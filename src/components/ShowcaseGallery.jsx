import React, { useState, useEffect } from "react";
import { SHOWCASE } from "../data/showcase.js";

const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR8KCePvKsnhLpQ41bhVDTbof0TRiL34p6hMrDWmQ1yYsKbYLZhCMnpUv0NCLpPzg85UPom931S1bIr/pub?output=csv";
const GOOGLE_SHEET_EDIT_URL = "https://docs.google.com/spreadsheets/d/16JdFFVjSNFNJ_U-CAIMkd_jqMSbUHTYRLjxWDCTr38E/edit?usp=sharing";

// Helper function to parse CSV supporting quoted fields
function parseCSV(text) {
  const lines = [];
  let row = [];
  let inQuotes = false;
  let currentToken = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentToken += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      row.push(currentToken.trim());
      currentToken = "";
    } else if ((char === "\r" || char === "\n") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        i++;
      }
      row.push(currentToken.trim());
      if (row.some((field) => field.length > 0)) {
        lines.push(row);
      }
      row = [];
      currentToken = "";
    } else {
      currentToken += char;
    }
  }
  if (currentToken.length > 0 || row.length > 0) {
    row.push(currentToken.trim());
    if (row.some((field) => field.length > 0)) {
      lines.push(row);
    }
  }
  return lines;
}

export function ShowcaseGallery() {
  const [members, setMembers] = useState(SHOWCASE);
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch live profiles from Google Sheet on page load
  useEffect(() => {
    async function fetchGoogleSheetData() {
      try {
        const response = await fetch(GOOGLE_SHEET_CSV_URL);
        if (!response.ok) throw new Error("Failed to fetch Google Sheet data");

        const csvText = await response.text();
        const parsedRows = parseCSV(csvText);

        if (parsedRows.length > 1) {
          const headers = parsedRows[0].map((h) => h.toLowerCase());

          const getCol = (row, fieldName) => {
            const index = headers.indexOf(fieldName.toLowerCase());
            return index !== -1 && row[index] ? row[index] : "";
          };

          const sheetMembers = parsedRows.slice(1).map((row, idx) => {
            const skillsRaw = getCol(row, "skills");
            const skillsArray = skillsRaw
              ? skillsRaw.split(",").map((s) => s.trim()).filter(Boolean)
              : ["Computer Science"];

            const pName = getCol(row, "projectName");
            const pDesc = getCol(row, "projectDescription");
            const pLink = getCol(row, "projectLink");

            return {
              id: getCol(row, "id") || `sheet-${idx}`,
              name: getCol(row, "name") || "MUN CS Member",
              category: getCol(row, "category") || "student",
              role: getCol(row, "role") || "Computer Science Student @ MUN",
              gradYear: getCol(row, "gradYear") || "2026",
              avatar: getCol(row, "avatar") || "https://utsavkarki.com.np/img/utsav1o1.png",
              bio: getCol(row, "bio") || "Computer Science student at Memorial University.",
              skills: skillsArray,
              links: {
                github: getCol(row, "github"),
                linkedin: getCol(row, "linkedin"),
                portfolio: getCol(row, "portfolio")
              },
              featuredProject: pName
                ? {
                    name: pName,
                    description: pDesc || "Featured project",
                    link: pLink || getCol(row, "portfolio")
                  }
                : null
            };
          });

          if (sheetMembers.length > 0) {
            setMembers(sheetMembers);
          }
        }
      } catch (error) {
        console.error("Error fetching live Google Sheet profiles:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGoogleSheetData();
  }, []);

  const categories = [
    { label: "All", value: "ALL" },
    { label: "Alumni", value: "alumni" },
    { label: "Students", value: "student" },
    { label: "Executives", value: "executive" },
  ];

  const filteredMembers = members.filter((member) => {
    const matchesCategory =
      categoryFilter === "ALL" || member.category === categoryFilter;

    const query = searchQuery.toLowerCase();
    const matchesQuery =
      member.name.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      member.bio.toLowerCase().includes(query) ||
      member.skills.some((skill) => skill.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full space-y-6 my-4">
      {/* Top Google Sheet Integration Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4 rounded-xl border border-gray-400 bg-[rgb(193,193,193)] text-black">
        <div>
          <h2 className="text-base font-bold text-black flex items-center gap-2">
            📊 Live Google Sheets Showcase Sync Active
          </h2>
          <p className="text-xs text-gray-800 mt-0.5">
            Profiles on this page are fetched directly from our official MUN Google Sheet. Anyone with a verified <code className="bg-black text-white px-1.5 py-0.5 rounded font-mono text-[11px]">@mun.ca</code> email can add or update their card!
          </p>
        </div>
        <a
          href={GOOGLE_SHEET_EDIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs font-bold bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>✏️ Edit / Add Cards in Google Sheet</span> ↗
        </a>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
        <input
          type="text"
          placeholder="Search by name, company, or skill (e.g. React, Java, Cloud)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-2/3 p-2.5 border border-gray-400 rounded-lg bg-[rgb(193,193,193)] text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto justify-start sm:justify-end">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategoryFilter(cat.value)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                categoryFilter === cat.value
                  ? "bg-black text-white"
                  : "bg-[rgb(193,193,193)] text-black border border-gray-400 hover:bg-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {isLoading ? (
          <div className="col-span-full text-center py-10 text-gray-700 font-semibold flex items-center justify-center gap-2">
            <span className="animate-spin text-lg">⏳</span> Syncing live cards from Google Sheets...
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            No alumni or student profiles match your search.
          </div>
        ) : (
          filteredMembers.map((member) => (
            <div
              key={member.id}
              style={{ backgroundColor: "rgb(193, 193, 193)", color: "#000000" }}
              className="showcase-card border border-gray-400 rounded-xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow max-w-full overflow-hidden min-w-0 break-words"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-4 mb-3 min-w-0">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-black shrink-0"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://utsavkarki.com.np/img/utsav1o1.png";
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <h3 style={{ color: "#000000" }} className="text-lg font-bold text-black flex items-center justify-between gap-2 min-w-0">
                      <span className="truncate min-w-0">{member.name}</span>
                      <span className="badge-pill text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-black text-white shrink-0">
                        {member.gradYear ? `'${member.gradYear.slice(-2)}` : member.category}
                      </span>
                    </h3>
                    <p style={{ color: "#1a1a1a" }} className="text-xs font-medium text-black truncate min-w-0">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p style={{ color: "#1a1a1a" }} className="text-xs text-black mb-3 leading-relaxed break-words line-clamp-4 overflow-hidden">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-1 mb-4 overflow-hidden">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{ color: "#000000" }}
                      className="text-[11px] bg-gray-200 border border-gray-300 text-black px-2 py-0.5 rounded-md truncate max-w-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {member.featuredProject && (
                  <div className="p-2.5 rounded-lg bg-gray-200 border border-gray-300 mb-3 text-xs text-black min-w-0 overflow-hidden break-words">
                    <div style={{ color: "#000000" }} className="font-semibold text-black flex justify-between items-center gap-2 min-w-0">
                      <span style={{ color: "#000000" }} className="font-bold text-black truncate min-w-0 flex-1">🚀 {member.featuredProject.name}</span>
                      {member.featuredProject.link && (
                        <a
                          href={member.featuredProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#000000" }}
                          className="text-black font-semibold underline hover:opacity-80 shrink-0"
                        >
                          View ↗
                        </a>
                      )}
                    </div>
                    <p style={{ color: "#1a1a1a" }} className="text-black mt-0.5 text-[11px] break-words line-clamp-3">
                      {member.featuredProject.description}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-gray-400 flex flex-wrap gap-3 text-xs min-w-0">
                {member.links.github && (
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#000000" }}
                    className="text-black font-semibold underline hover:opacity-75 truncate max-w-full"
                  >
                    GitHub ↗
                  </a>
                )}
                {member.links.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#000000" }}
                    className="text-black font-semibold underline hover:opacity-75 truncate max-w-full"
                  >
                    LinkedIn ↗
                  </a>
                )}
                {member.links.portfolio && (
                  <a
                    href={member.links.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#000000" }}
                    className="text-black font-semibold underline hover:opacity-75 truncate max-w-full"
                  >
                    Website ↗
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
