const result = document.querySelector(".result");
const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");
const addition = document.querySelector(".addition");
const substract = document.querySelector(".substract");
const multiply = document.querySelector(".multiply");
const division = document.querySelector(".division");
const reset = document.querySelector(".reset");

addition.addEventListener("click", () => {
  result.innerText = +value1.value + +value2.value;
});

substract.addEventListener("click", () => {
  result.innerText = +value1.value - +value2.value;
});

multiply.addEventListener("click", () => {
  result.innerText = +value1.value * +value2.value;
});

division.addEventListener("click", () => {
  result.innerText = +value1.value / +value2.value;
});

reset.addEventListener("click", () => {
  value1.value = "";
  value2.value = "";
  result.innerText = "0";
});
