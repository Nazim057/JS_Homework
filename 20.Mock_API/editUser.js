const editedUser = JSON.parse(localStorage.getItem("editedUser"));

const nameInput = document.getElementById("exampleInputName1");
const emailInput = document.getElementById("exampleInputEmail1");

nameInput.value = editedUser.contactName;
emailInput.value = editedUser.contactTitle;

const form = document.querySelector("form");
const editBtn = document.querySelector(".editBtn");

editBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const contactName = nameInput.value;
  const contactTitle = emailInput.value;

  try {
    await axios.put(`https://northwind.vercel.app/api/suppliers/${editedUser.id}`, { contactName, contactTitle });
    localStorage.removeItem("editedUser");
    window.location.href = "index.html";
  } catch (error) {
    console.error(error);
  }
});
