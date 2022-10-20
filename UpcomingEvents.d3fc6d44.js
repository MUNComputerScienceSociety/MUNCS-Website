import{j as e,f as s}from"./chunks/jsx-runtime.a6f250ba.js";import"./chunks/index.fcdd4f45.js";const a=[{link:"/events/advent-of-code-2022",title:"Advent of Code 2022",dates:[{time:new Date(2022,11,1),title:"AOC Starts"},{time:new Date(2022,11,25),title:"AOC Ends"}]},{link:"/events/hacktoberfest-2022",title:"Hacktoberfest 2022",dates:[{time:new Date(2022,9,1),title:"Hacktoberfest Begins"},{time:new Date(2022,9,31),title:"Hacktoberfest Ends"}]},{link:"/events/fall-2022-election",title:"Fall 2022 Election",dates:[{time:new Date(2022,8,26),title:"Applications Open"},{time:new Date(2022,8,30),title:"Applications Close"},{time:new Date(2022,9,3),title:"Campaigning Starts"},{time:new Date(2022,9,5),title:"Voting Starts"},{time:new Date(2022,9,12),title:"Voting & Campaigning End"},{time:new Date(2022,9,14),title:"Results posted"}]},{link:"/events/september-2022-kattis-competition",title:"Kattis Competition",dates:[{time:new Date(2022,8,26),title:"Begins @ 3pm"}]},{link:"/events/february-2022-picoCAD-competition",title:"picoCAD Competition",dates:[{time:new Date(2022,1,18),title:"Competition Begins"},{time:new Date(2022,1,27),title:"Competition Ends"}]},{link:"/events/february-2022-gmod-prop-hunt",title:"Garry's Mod Prop Hunt Night",dates:[{time:new Date(2022,1,25),title:"Begins @ 7pm"}]},{link:"/events/february-2022-department-headship-application",title:"Department: Sharene Bungay Headship Application Meeting",dates:[{time:new Date(2022,1,23),title:"Meeting on Webex @ 1pm"}]},{link:"/events/february-2022-kattis-competition",title:"Kattis Competition",dates:[{time:new Date(2022,1,11),title:"Pre-Comp. Info Session @ 5pm"},{time:new Date(2022,1,11),title:"Begins @ 6pm"},{time:new Date(2022,1,11),title:"Ends @ 11pm"}]},{link:"/events/january-2022-xonotic",title:"Xonotic Night",dates:[{time:new Date(2022,0,13),title:"Xonotic Night"}]},{link:"/events/hacktoberfest-2021",title:"Hacktoberfest 2021",dates:[{time:new Date(2021,9,1),title:"Hacktoberfest Begins"},{time:new Date(2021,9,28),title:"Workshop"},{time:new Date(2021,9,31),title:"Hacktoberfest Ends"}]},{link:"/events/fall-2021-clothing",title:"Fall 2021 Clothing Order",dates:[{time:new Date(2021,8,24),title:"Clothing Order Available"},{time:new Date(2021,9,11),title:"Clothing Order Availability Ends"}]},{link:"/events/fall-2021-election",title:"Fall 2021 Election",dates:[{time:new Date(2021,8,20),title:"Applications Open"},{time:new Date(2021,8,27),title:"Applications Close"},{time:new Date(2021,8,30),title:"Campaigning Starts"},{time:new Date(2021,9,5),title:"Campaigning Ends"},{time:new Date(2021,9,6),title:"Results posted"}]},{link:"/events/fall-2021-info-session",title:"Info Session",dates:[{time:new Date(2021,8,27),title:"Info Session in EN2007"}]}],l=({date:t})=>e.exports.jsxs("li",{children:[t.title,e.exports.jsx("span",{className:"italic float-right opacity-50 dark:opacity-70",children:s(t.time,"MMMM do, yyyy")})]}),o=({dates:t})=>e.exports.jsx("ul",{className:"list-disc pl-5",children:t.map(i=>e.exports.jsx(l,{date:i},i.time))}),m=({event:t})=>e.exports.jsx("a",{href:t.link,children:e.exports.jsxs("div",{className:"border px-3 py-2 rounded-sm mb-2",children:[e.exports.jsx("h2",{className:"font-semibold",children:t.title}),e.exports.jsx(o,{dates:t.dates})]})}),n=a.map(t=>({...t,dates:t.dates.filter(i=>new Date(i.time)>=new Date().setDate(new Date().getDate()-1))})).filter(t=>t.dates.length>0).reverse(),c=()=>e.exports.jsxs(e.exports.Fragment,{children:[n.length===0&&e.exports.jsx("p",{className:"italic text-center",children:"No upcoming events"}),n.map(t=>e.exports.jsx(m,{event:t},t.link))]});export{c as UpcomingEvents};