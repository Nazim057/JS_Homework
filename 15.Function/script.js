// ////////////////// task 1
function getFirstValue(arr) {
    return arr[0];
  }
console.log("Task 1 ", getFirstValue([1, 2, 3, 4, 5, 6]));


// ///////////////// task 2
function getLastItem(arr) {
    return arr[arr.length - 1];
  }
  console.log("Task 2 ", getLastItem([1, 2, 3, 4, 5, 6]));



// /////////////////// task 3
const findIndex = function(arr, str) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === str) {
        return i;
      }
    }
  };
  console.log("Task 3 ", findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));



/////////////////// task 4
function addition(num1, num2) {
    let result = num1 + num2;
    return result;
  }
  console.log("Task 4 ", addition(3, 2));



/////////////////// task 5
const lessThan100 = (num1, num2) => (num1 + num2) < 100;
  console.log("Task 5.1 ", lessThan100(3, 2));
  console.log("Task 5.2 ", lessThan100(300, 2));



/////////////////// task 6
function volumeOfBox(sizes) {
    const { width, length, height } = sizes;
    const volume = width * length * height;
    return volume;
  }
  console.log("Task 6 ", volumeOfBox({ width: 2, length: 5, height: 7 })); 



/////////////////// task 7
function points(twoPointers, threePointers) {
    let totalPoints = (2 * twoPointers) + (3 * threePointers);
    return totalPoints;
  }
  console.log("Task 7 ", points(2, 3));


/////////////////// task 8
const arr5 = [
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    }
];

function fillInfo() {
    for (let value of arr5){
        value.name = "Nazim"
        value.surname = "Namazov"
        value.city = "Şəmkir"
    }
}
fillInfo(); 
console.log("Task 8 ", arr5);



