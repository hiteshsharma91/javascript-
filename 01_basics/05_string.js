const name = "Hitesh"
const Repo = 84;

console.log(name + Repo);
console.log(`hello my name is ${name} and my repo is ${Repo}`);


const GameName = new String("hiteshhh")

// console.log(GameName[5]);
// console.log(GameName.__proto__);

// console.log(GameName.length);
// console.log(GameName.toUpperCase())

console.log(GameName.charAt(4));
console.log(GameName.indexOf("e"));

const NewString = GameName.substring(0,5)
console.log(NewString);

const AnotherString = GameName.slice(-8, 4);
console.log(AnotherString);


const NewStringOne = new String("     hitesh     ");
console.log(NewStringOne);
console.log(NewStringOne.trim());

const url = String("https://hitesh.com/hiteshsharma%20isheere.==$")
console.log(url.replace("%20", "-"));

console.log(url.includes("ritesh"));
console.log(url.includes("hitesh"));

console.log(GameName.split("-"));
