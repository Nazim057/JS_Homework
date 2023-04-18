/////////////////////////////////////////////// task 1
let names1 = ["Adam", "Sarah", "Malcolm"]; //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"]; //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]; //"CJMPRR"
function secretName(names) {
  return names.map((name) => name[0]).join("");
}
console.log(secretName(names1));

/////////////////////////////////////////////// task 2
const users = [
  { name: "Anar", surname: "Hesenli", age: "22", uni: "ADA", gender: "male" },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
  },
  {
    name: "Hikmet",
    surname: "Hesenova",
    age: "22",
    uni: "UNEC",
    gender: "male",
  },
  { name: "Nicat", surname: "Sadiqov", age: "25", uni: "UNEC", gender: "male" },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "ADNSU",
    gender: "male",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
  },
];

/////////////////////////////////////////////// task 2.1
console.log(
  users.filter((user) => user.uni === "UNEC" && user.surname.charAt(0) === "R")
);

/////////////////////////////////////////////// task 2.2
console.log(
  users.filter((user) => user.age === "22" && user.name.charAt(0) === "A")
);

/////////////////////////////////////////////// task 2.3
const users1 = users.map((user) => ({
  ...user,
  name: user.gender === "male" ? `Mr ${user.name}` : `Ms ${user.name}`,
}));
console.log(users1);

/////////////////////////////////////////////// task 2.4
console.log(users.sort((a, b) => a.age - b.age));


/////////////////////////////////////////////// task 3
const letters = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5, 6, 7]

// console.log(numbers[ Math.floor( Math.random()*numbers.length ) ]);

function random(arr) {
  return arr[ Math.floor( Math.random()*arr.length ) ];
}
console.log(random(numbers)); // dinamik



/////////////////////////////////////////////// task 4

const arr4 = [
  {
    product: "Lenova",
    price: 1900,
  },
  {
    product: "HP",
    price: 1300,
  },
  {
    product: "Acer",
    price: 1600,
  },
];

arr4.forEach(item => {
    item.price /= 2;
});
console.log(arr4);




/////////////////////////////////////////////// task 5
let num1 = 246
let num2 = 102
let num3 = 152 
function reverseNum(num) {
    let reversed = num.toString().split('').reverse().join('');
    let sum = num + reversed
    return +sum // numbers
  }
console.log(reverseNum(num1));













