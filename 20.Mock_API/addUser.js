const form = document.querySelector("form");
const nameInput = document.querySelector("#exampleInputName1");
const emailInput = document.querySelector("#exampleInputEmail1");
const addBtn = document.querySelector(".addBtn");

form.addEventListener("input", () => {
  addBtn.disabled = !(nameInput.value && emailInput.value);
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;

  try {
    const response = await axios.post("http://localhost:5700/data", {
      name,
      email,
    });

    window.location.href = "index.html";
  } catch (error) {
    console.error(error);
  }
});
