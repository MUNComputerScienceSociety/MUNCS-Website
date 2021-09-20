import JAHARRHY from '../../public/assets/execs/jaharrhy.jpg';

function cleanJacksNameLol(input) {
    input = input.replace(/&/g, '&amp;');
    input = input.replace(/</g, '&lt;');
    input = input.replace(/>/g, '&gt;');
    return input;
}

// TODO executive avatars
// TODO previous executives
export const EXECUTIVES = [
	{
		name: "Madison Emshey",
		roles: ["President"],
		username: "mbemshey",
		discord: {
			username: "Modstrosus",
			discriminator: "0001",
		},
	},
	{
		name: "Jack Harrhy",
		roles: ["Vice President"],
		username: "jaharrhy",
		discord: {
			username: cleanJacksNameLol("<i>jack arthur null</i>"),
			discriminator: "7539",
		},
		picture: JAHARRHY,
	},
	{
		name: "David Chicas",
		roles: ["Executive Assistant"],
		username: "dchicasduena",
		discord: {
			username: "dech",
			discriminator: "0089",
		},
	},
	{
		name: "Rishi Gandhi",
		roles: ["International Student Representative"],
		username: "rrgandhi",
		discord: {
			username: "R1SH1",
			discriminator: "6363",
		},
	},
	{
		name: "Vilakshan Khanna",
		roles: ["Social Representative"],
		username: "vkhanna",
		discord: {
			username: "Vilakshan",
			discriminator: "6171",
		},
	},
	{
		name: "Zac Batten",
		roles: ["Event Coordinator"],
		username: "zbatten",
	},
	{
		name: "Genadi V",
		roles: ["Computer Science Undergraduate Committee Representative"],
	},
	{
		name: "Mathew Emshey",
		roles: ["Representative-at-Large"],
		username: "memshey",
		discord: {
			username: "maegpi",
			discriminator: "5707",
		},
	},
	{
		name: "Abhijeet Singh",
		roles: ["Representative-at-Large"],
		username: "abhijeets",
	},
];
