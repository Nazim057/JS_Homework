// 1. "getUpper(anyArr)" adlı funksiyanı yazın ki, o, böyük hərflə yazılmış birinci və sonuncu simvolla newArr-ı qaytarır.
// const arr1 = ['quba', 'mingəcevir', 'bakı', 'qazaq', 'gence', 'şirvan']
// console.log: ['QubA', 'MingeceviR', 'BakÜ', 'GazaG', 'Gence', 'ShirvaN']

const arr1 = ["quba", "mingəcevir", "baki", "qazaq", "gence", "şirvan"];
const newName = arr1.map(
  (item) =>
    item[0].toUpperCase() + item.slice(1, -1) + item.at(-1).toUpperCase()
);
console.log("task 1:   ", newName);



// 2.String and Array
let text = "We are MERN-Stack developers";

// 1) 'MERN Stack'i 'Front-end' ilə əvəz edin. // We are Front-end developers!
console.log("task 2.1:   ", text.replace("MERN-Stack", "Front-end"));

// 2) Bütün 'e' hərflərini 'a' ilə əvəz edin. // wa ara marn-stack davalopars!
console.log("task 2.2:   ", text.toLocaleLowerCase().replaceAll("e", "a"));

// 3) "in Microsoft!" 'text' birləşdirin. //We are MERN-Stack developers in Microsoft!
console.log("task 2.3:   ", text.concat(" in Microsoft!"));

// 4) Hər bir 'r' indeksini tapın və onları 'newArr' adlı yeni Massivdə toplayın //[4, 9, 26]
let newArr = [];
text
  .toLocaleLowerCase()
  .split("")
  .map((item, index) => item === "r" && newArr.push(index));
console.log("task 2.4:   ", newArr);

// 5) Birinci 'r' indeksini tapın ('are' istisna olmaqla). // 9
console.log("task 2.5:   ", text.toLocaleLowerCase().indexOf("r", 5));

// 6) "text"də saitləri tapın və onları unikal dəyərləri ehtiva edən "newArr"-a əlavə edin. //['e','a','o']
let vowels = ["a", "i", "o", "u", "e"];
let uniqueVowels = [
  ...new Set(
    Array.from(text.toLowerCase()).filter((herif) => vowels.includes(herif))
  ),
];
console.log("task 2.6:   ", uniqueVowels);


// 3.Cəm regionun sahəsini hesablamaq üçün 'calcArea()' adlı funksiyanı (ox funksiyası) yazın,
// əgər regionun uzunluğu 'arr3'-də 6-ya bərabərdirsə.
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

const calcArea = (Array) => {
  const sum = Array.reduce(
    (acc, curr) => (curr.region.length === 6 ? acc + curr.area : acc),
    0
  );
  return sum;
};
console.log("task 3:   ", calcArea(arr3));



// 4. 'arr4' artan qaydada çeşidləyin.
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];
arr4.sort((a, b) => a - b);
console.log("task 4:   ", arr4);



// 5. Bütün iç-içə massivi bir massivdə toplayın.
const arr5 = [5, [8], [9, ["hi", ["don't touch me"], [0]], "9"]];
console.log("task 5:   ", arr5.flat(Infinity));



// 6. "Rənglər" massivini rəng uzunluğu ilə çeşidləyin, əgər rəngin uzunluğu bir-birinə bərabərdirsə, onları əlifba sırası ilə sıralayın.
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

console.log(
  "task 6:   ",
  colors.sort((a, b) => a.length - b.length || a.localeCompare(b))
);
