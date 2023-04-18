//////////////////////////////////// task 1
function getUpper(anyArr) {
  const newArr = [];
  for (let i = 0; i < anyArr.length; i++) {
    let str = anyArr[i];
    str = str[0].toUpperCase() + str.slice(1, -1) + str.at(-1).toUpperCase();
    newArr.push(str);
  }
  return newArr;
}
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];
console.log(getUpper(arr1));

////////////////////////////////////////// task 2
// 1. Replace 'MERN Stack' with 'Front-end'
let text1 = "We are MERN-Stack developers";
text1 = text1.replace("MERN-Stack", "Front-end");
console.log(text1);

// 2. Replace all 'e' with 'a'
let text2 = "We are MERN-Stack developers";
text2 = text2.replace(/e/g, "a");
console.log(text2); 

// 3. Concat "in Microsoft!" to 'text'
let text3 = "We are MERN-Stack developers";
text3 = text3.concat(" in Microsoft!");
console.log(text3); 

// 4. Find index of each 'r' and collect them in a new Array called 'newArr'
let text4 = "We are MERN-Stack developers";
let newArr = [];
for (let i = 0; i < text4.length; i++) {
  if (text4[i] === "r" || text4[i] === "R" ) {
    newArr.push(i);
  }
}
console.log(newArr); 

// 5. Find index of first 'r' (excepting 'are')
let text5 = "We are MERN-Stack developers";
console.log(`task-2.5`, text5.toLowerCase().indexOf('r', 5));


// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
let text6 = 'We are MERN-Stack developers';
let vowels = ['a', 'i', 'o', 'u', 'e'];
let newArr1 = [];

for (let char of text6) {
  if (vowels.includes(char.toLowerCase()) && !newArr1.includes(char.toLowerCase())) {
    newArr1.push(char.toLowerCase());
  }
}
console.log(newArr1);



////////////////////////////////////////// task 3
const arr3 = [
  {
    region: "Yasamal",
    area: 170,
  },

  {
    region: "Nizami",
    area: 20,
  },

  {
    region: "Nesimi",
    area: 10,
  },

  {
    region: "Sebail",
    area: 30,
  },
  {
    region: "Xetai",
    area: 30,
  },
];

const calcArea = () => {
    const sum = arr3.reduce((acc, curr) =>curr.region.length===6? acc + curr.area:acc, 0);
    return sum;
  };
  
  console.log('reduce',calcArea());

////////////////////////////////////////// task 4
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];
arr4.sort((a, b) => a - b)
console.log(arr4);


////////////////////////////////////////// task 5
const arr5 = [5, [8], [9, ["hi", ["don't touch me"], [0]], "9"]];
console.log(arr5.flat(Infinity));


////////////////////////////////////////// task 6
const colors = [
  "green",
  "blue",
  "yellow",
  "black",
  "red",
  "brown",
  "white",
  "gray",
  "violet",
  "pink",
];

colors.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  } else {
    return a.length - b.length;
  }
});

console.log(colors);
