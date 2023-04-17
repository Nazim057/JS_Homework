///////////////////////// Task 1
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

///////////////////////// Task 2
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sum = ages.reduce((acc, age) => acc + age, 0);
const average = sum / ages.length;
console.log(average);

///////////////////////// Task 3
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const countryCodes = countries.map(
  (country, index) => `${index}.${country.substring(0, 3).toUpperCase()}`
);
console.log(countryCodes);

///////////////////////// Task 4
let numbers = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];

const sumOfIndexes = numbers.reduce((acc, number, index) => {
  if (number === 7) {
    return acc + index;
  }
  return acc;
}, 0);

console.log(sumOfIndexes);

///////////////////////// Task 5
const todos = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
];

const completedTodos = todos.filter((todo) => todo.completed === true);
console.log(completedTodos);

///////////////////////// Task 6
const longTitleTodos = todos.filter((todo) => todo.title.length > 40);
console.log(longTitleTodos);
