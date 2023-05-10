const form = document.querySelector("form");
const nameInput = document.querySelector("#exampleInputName1");
const emailInput = document.querySelector("#exampleInputEmail1");
const addBtn = document.querySelector(".addBtn");

form.addEventListener("input", () => {
  addBtn.disabled = !(nameInput.value && emailInput.value);
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const contactName = nameInput.value;
  const contactTitle = emailInput.value;

  try {
    const response = await axios.post("https://northwind.vercel.app/api/suppliers/", {
      contactName,
      contactTitle,
    });

    window.location.href = "index.html";
  } catch (error) {
    console.error(error);
  }
});
