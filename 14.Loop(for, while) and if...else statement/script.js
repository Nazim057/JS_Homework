console.log("Hello!");

console.log(`
`);
// 1.Convert Age to Days
function calcAge(age) {
  return (age = age * 365);
}
let age = 6  // istədiyin ili yaz
console.log(`${age} ildə ${calcAge(age)} gün var`);


console.log(`
`);
// 1.Loop text
let frontEnd = "Front-end Developer";
let nese = "";
for (let i = 0; i < frontEnd.length; i++) {
  nese += frontEnd[i];
  console.log(nese);
}


console.log(`
`)
// 3.Sum of even numbers(e.g: 2,4,6...) in 10.
let cemi3 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    cemi3 += i;
  }
}
console.log(`10-a qədər cüt rəqəmlərin cəmi: ${cemi3}`);

console.log(`
`)
// // 4.Multiply the odd numbers(e.g: 1,3,5...) in 17.
for (let i = 0;i<17 ; i++) {
    if (i%2==1) {
        console.log(`${i} x 17 = ${i*17} `);
    }
}

console.log(`
`)
// 4.Multiply numbers between 10 and 18.
let hasil4 = 1;
for (let i = 10; i <= 18; i++) {
  hasil4 *= i;
}
console.log(`10-18 arlıqı rəqəmlərin hasili: ${hasil4}`);


console.log(`
`)
// 5.Sum numbers between 17 and 30. Except 19, 20.
let cemi5 = 0 
for (let i=17 ; i <= 30; i++) {
  if (i == 19 || i == 20) {
    continue;
  }
  cemi5+=i
}
console.log(`19 və 20 istisna olmaqla 17-30 aralıqı rəqəmlərin cəmi: ${cemi5}`);


console.log(`
`)
// 6.Sum of even numbers and assign this result a variable.
// Sum of odd numbers and assign this result a variable.
let cemi6 = 0 
let x = 0
let y = 0
while (cemi6<30) {
  cemi6++;
  if (cemi6 % 2 == 1) {
    x+=cemi6;
  } else {
    y+=cemi6;
  }
}
console.log(`30-a qədər olan Tək ədədlərin cəmi: ${x}`);
console.log(`30-a qədər olan Cüt ədədlərin cəmi: ${y}`);


console.log(`
`)
// 7.Find of even numbers(e.g: 2,4,6...) in 16. And every number to the power of 2.
for (let i = 1; i<17 ; i++) {
    if (i%2==0) {
        console.log(`2 üstü ${i} = ${2**i} `);
    }
}

