let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:5700/users";
let row = document.querySelector(".row");
console.log(id);
async function getAllData() {
  row.innerHTML = "";
  const res = await axios(`${BASE_URL}/${id}`);
  const element = await res.data;
    row.innerHTML = `
    <div class="col col-4"></div>
    <span class="col col-4">
    <div class="about-card">
      <img src="${element.photo}" />
      <h5>${element.title}</h5>
      <p>${element.description}</p>
    </div>
    </span> 
    <div class="col col-4"></div>
          `;
}

getAllData();
