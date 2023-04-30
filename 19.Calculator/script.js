const result = document.querySelector(".result");
const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");
const addition = document.querySelector(".addition");
const substract = document.querySelector(".substract");
const multiply = document.querySelector(".multiply");
const division = document.querySelector(".division");
const reset = document.querySelector(".reset");

addition.addEventListener("click", () => {
  if (value1.value === "" || value2.value === "") {
    if (value1.value === "") {
      alert("Value1 boşdur");
    } else {
      alert("Value2 boşdur");
    }
  } else {
    result.innerText = +value1.value + +value2.value;
  }
});

substract.addEventListener("click", () => {
  if (value1.value === "" || value2.value === "") {
    if (value1.value === "") {
      alert("Value1 boşdur");
    } else {
      alert("Value2 boşdur");
    }
  } else {
    result.innerText = +value1.value - +value2.value;
  }
});

multiply.addEventListener("click", () => {
  if (value1.value === "" || value2.value === "") {
    if (value1.value === "") {
      alert("Value1 boşdur");
    } else {
      alert("Value2 boşdur");
    }
  } else {
    result.innerText = +value1.value * +value2.value;
  }
});

division.addEventListener("click", () => {
  if (value1.value === "" || value2.value === "") {
    if (value1.value === "") {
      alert("Value1 boşdur");
    } else {
      alert("Value2 boşdur");
    }
  } else if(value2.value == "0") {
    alert("Sıfıra bölme sonsuzluk verir");
  } else {
    result.innerText = +value1.value / +value2.value;
  }
});

reset.addEventListener("click", () => {
  value1.value = "";
  value2.value = "";
  result.innerText = "0";
});
