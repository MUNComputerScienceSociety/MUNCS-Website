export const LINKS = {
	discord: "https://discord.muncompsci.ca/",
	github: "https://github.com/MUNComputerScienceSociety/",
	githubExecDocs:
		"https://github.com/MUNComputerScienceSociety/Executive-Docs/",
	csclubExecDocs: "https://www.cs.mun.ca/~csclub/executive-documents/",
	facebookPage: "https://www.facebook.com/MUNCSSociety/",
	facebookGroup: "https://www.facebook.com/groups/2202189009/",
	instagram: "https://www.instagram.com/muncssociety/",
	twitter: "https://twitter.com/muncssociety.",
};

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
		text: "Society",
		link: "/society/",
		children: [
			{ text: "Executives", link: "/society/executives" },
			{ text: "Constitution", link: "/society/constitution" },
			{ text: "Code of Conduct", link: "/society/code-of-conduct" },
			{ text: "Meeting Documents", link: "/society/meeting-documents" },
		],
	},
	{
		text: "Resources",
		link: "/resources/",
		children: [
			{ text: "Archives", link: "/resources/archives" },
		],
	},
];
