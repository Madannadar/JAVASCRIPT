const name = "madan"
const repoCount = 50

// console.log(name + repoCount + " value"); // old style
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // new style

const gameName = new String('Madan_games') 

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,5)
// console.log(newString);

const anotherString = gameName.slice(-8,2)
// console.log(anotherString);

const newstringone = "    madan   "
console.log(newstringone)
console.log(newstringone.trim());

const url = "https://madan.com/madan%20nadar"
console.log(url.replace('%20','-'));

console.log(url.includes('madan')); // checks if url has madan returns true;

console.log(gameName.split('_'));


