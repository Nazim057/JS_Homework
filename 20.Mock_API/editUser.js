const editedUser = JSON.parse(localStorage.getItem("editedUser"));

const nameInput = document.getElementById("exampleInputName1");
const emailInput = document.getElementById("exampleInputEmail1");

nameInput.value = editedUser.name;
emailInput.value = editedUser.email;

const form = document.querySelector("form");
const editBtn = document.querySelector(".editBtn");

editBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;

  try {
    await axios.put(`http://localhost:5757/data/${editedUser.id}`, { name, email });
    localStorage.removeItem("editedUser");
    window.location.href = "index.html";
  } catch (error) {
    console.error(error);
  }
});
