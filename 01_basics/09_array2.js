const marvel_heros = ["thor", "iron Man", "hulk", "spiderman"]
const dc_heros = ["flash", "batman", "superman"]

// const All_heros = marvel_heros.concat(dc_heros);
// console.log(All_heros);

// const both_heros = [...marvel_heros, ...dc_heros];
// console.log(both_heros);

// const arr2 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const arr3 = arr2.flat(Infinity);
// console.log(arr3);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"}));

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1,num2,num3));
