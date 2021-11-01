import { LINKS } from "./links";

export const SIDEBAR = [
	{
		text: "Home",
		link: "/",
		children: [
			{ text: "Discord", link: LINKS.discord },
			{ text: "GitHub", link: LINKS.github },
		],
	},
	{
		text: "Events",
		link: "/events",
	},
	{
		text: "Society",
		link: "/society/",
		children: [
			{ text: "Executives", link: "/society/executives" },
			{
				text: "Constitution",
				link: "/society/constitution",
				children: [
					{
						text: "1. Definitions",
						link: "/society/constitution#1-definitions",
					},
					{ text: "2. Name", link: "/society/constitution#2-name" },
					{ text: "3. Purpose", link: "/society/constitution#3-purpose" },
					{ text: "4. Membership", link: "/society/constitution#4-membership" },
					{
						text: "5. Executive Positions",
						link: "/society/constitution#5-executive-positions",
					},
					{
						text: "6. Executive Elections",
						link: "/society/constitution#6-executive-elections",
					},
					{
						text: "7. Executive Resignation",
						link: "/society/constitution#7-executive-resignation",
					},
					{
						text: "8. Executive Removal",
						link: "/society/constitution#8-executive-removal",
					},
					{
						text: "9. Executive Vacancy",
						link: "/society/constitution#9-executive-vacancy",
					},
					{ text: "10. Meetings", link: "/society/constitution#10-meetings" },
					{ text: "11. Finance", link: "/society/constitution#11-finance" },
					{
						text: "12. Amendments",
						link: "/society/constitution#12-amendments",
					},
				],
			},
			{
				text: "Code of Conduct",
				link: "/society/code-of-conduct",
				children: [
					{
						text: "Our Goal",
						link: "/society/code-of-conduct#our-goal",
					},
					{
						text: "Applicability and Scope",
						link: "/society/code-of-conduct#applicability-and-scope",
					},
					{
						text: "Toward a Welcoming and Safe Environment",
						link: "/society/code-of-conduct#toward-a-welcoming-and-safe-environment",
					},
					{
						text: "Anti-Harassment Statement",
						link: "/society/code-of-conduct#anti-harassment-statement",
					},
					{
						text: "Reporting",
						link: "/society/code-of-conduct#reporting",
					},
					{
						text: "Enforcement Process",
						link: "/society/code-of-conduct#enforcement-process",
					},
					{
						text: "Consequences",
						link: "/society/code-of-conduct#consequences",
					},
					{
						text: "Acknowledgements",
						link: "/society/code-of-conduct#acknowledgements",
					},
					{
						text: "License",
						link: "/society/code-of-conduct#license",
					},
				],
			},
			{ text: "Locations", link: "/society/locations" },
			{ text: "Meeting Documents", link: "/society/meeting-documents" },
		],
	},
	{
		text: "Resources",
		link: "/resources/",
		children: [{ text: "Archives", link: "/resources/archives" }],
	},
];
