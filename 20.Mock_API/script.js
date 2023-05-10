const allUser = document.querySelector(".allUser");

async function dataUser() {
  allUser.innerHTML = "";

  try {
    const response = await axios.get("https://northwind.vercel.app/api/suppliers/");
    const data = response.data;

    data.forEach((supplier) => {
      allUser.innerHTML += `
          <div class="card col-5 m-3" >
            <div class="card-body">
              <div>
                <h5 class="card-title">${supplier.contactName}</h5>
                <p class="card-text">${supplier.contactTitle}</p>
              </div>
              <div class="icons">
                <a >
                  <i class="fa-solid fa-pen icon" onclick="editUser(${supplier.id})"></i>
                </a>
                <i class="fa-solid fa-trash-can icon" onclick="deleteUser(${supplier.id})"></i>
              </div>
            </div>
          </div>
        `;
    });
  } catch (error) {
    console.log(error);
  }
}
dataUser();

async function deleteUser(id) {
  try {
    await axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`);
    dataUser();
  } catch (error) {
    console.log(error);
  }

  allUser.reset();
}

async function editUser(id) {
  try {
    const response = await axios.get(`https://northwind.vercel.app/api/suppliers/${id}`);
    const user = response.data;
    localStorage.setItem("editedUser", JSON.stringify(user));
    location.href = "./editUser.html";
  } catch (error) {
    console.log(error);
  }
}

