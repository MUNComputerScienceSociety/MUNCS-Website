import React, { useState } from "react";
import { COURSES } from "../data/courses.js";

export function CourseList() {
  const [activeLevel, setActiveLevel] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCourse, setExpandedCourse] = useState(null);

  const levels = ["ALL", "1000", "2000", "3000", "4000", "6000"];

  const filteredCourses = COURSES.filter((course) => {
    const matchesLevel =
      activeLevel === "ALL" || course.level.toString() === activeLevel;
    const matchesQuery =
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesQuery;
  });

  const toggleExpand = (id) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  return (
    <div className="w-full space-y-6 my-4">
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
        <input
          type="text"
          placeholder="Search courses (e.g. COMP 6915, Python, Algorithms)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/2 p-2.5 border border-gray-400 rounded-lg bg-[rgb(193,193,193)] text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto justify-start sm:justify-end">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setActiveLevel(lvl)}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeLevel === lvl
                  ? "bg-black text-white"
                  : "bg-[rgb(193,193,193)] text-black border border-gray-400 hover:bg-gray-300"
              }`}
            >
              {lvl === "ALL" ? "All" : lvl === "6000" ? "Grad (6000)" : `${lvl}s`}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No courses found matching your criteria.
          </div>
        ) : (
          filteredCourses.map((course) => {
            const isExpanded = expandedCourse === course.id;
            return (
              <div
                key={course.id}
                style={{
                  backgroundColor: isExpanded ? "rgb(77, 78, 78)" : "rgb(193, 193, 193)",
                  color: isExpanded ? "#ffffff" : "#000000"
                }}
                className="border border-gray-400 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div
                  onClick={() => toggleExpand(course.id)}
                  className="p-4 cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded ${
                          isExpanded ? "bg-white text-black" : "bg-black text-white"
                        }`}
                      >
                        {course.code}
                      </span>
                      <h3 className={`text-lg font-bold ${isExpanded ? "text-white" : "text-black"}`}>
                        {course.title}
                      </h3>
                    </div>
                    <p className={`text-sm mt-1 line-clamp-2 ${isExpanded ? "text-gray-200" : "text-gray-800"}`}>
                      {course.description}
                    </p>
                  </div>

                  <button className={`text-xs font-semibold hover:underline self-end sm:self-center shrink-0 ${isExpanded ? "text-white" : "text-black"}`}>
                    {isExpanded ? "Collapse ▲" : "View Resources ▼"}
                  </button>
                </div>

                {isExpanded && (
                  <div
                    style={{ backgroundColor: "rgb(60, 61, 61)" }}
                    className="p-4 border-t border-gray-600 space-y-5 text-sm text-white"
                  >
                    {course.recommendedBooks && course.recommendedBooks.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-white flex items-center gap-1.5 mb-1.5">
                          <span>📖</span> Recommended Books & Readings
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-200">
                          {course.recommendedBooks.map((book, idx) => (
                            <li key={idx}>
                              <span className="font-medium text-white">{book.title}</span> by {book.author}{" "}
                              {book.link && (
                                <a
                                  href={book.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white font-semibold underline text-xs ml-1"
                                >
                                  [Link]
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {course.videoTutorials && course.videoTutorials.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-white flex items-center gap-1.5 mb-1.5">
                          <span>🎥</span> Curated Video Tutorials
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {course.videoTutorials.map((video, idx) => (
                            <a
                              key={idx}
                              href={video.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 border border-gray-500 rounded-lg hover:border-white transition-colors bg-gray-800 text-white block"
                            >
                              <div className="font-semibold text-white">
                                {video.title}
                              </div>
                              <div className="text-xs text-gray-300">
                                {video.platform}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {course.projectIdeas && course.projectIdeas.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-white flex items-center gap-1.5 mb-1.5">
                          <span>🛠️</span> Past Projects & Assessment Focus
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-200">
                          {course.projectIdeas.map((proj, idx) => (
                            <li key={idx}>{proj}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {course.examResources && course.examResources.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-white flex items-center gap-1.5 mb-1.5">
                          <span>📝</span> Exam Prep & Review Notes
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-200">
                          {course.examResources.map((note, idx) => (
                            <li key={idx}>{note}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
