const charactersDiv = document.getElementById("characters");
const paginationDiv = document.getElementById("pagination");
const mainScreen = document.getElementById("main-screen");
const detailScreen = document.getElementById("detail-screen");

const detailImage = document.getElementById("detail-image");
const detailName = document.getElementById("detail-name");
const detailKi = document.getElementById("detail-ki");
const detailDescription = document.getElementById("detail-description");

let currentPage = 1;
let totalPages = 1;

async function fetchCharacters(page = 1) {
  const res = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=18`);
  const data = await res.json();

  charactersDiv.innerHTML = "";
  data.items.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${c.image}" alt="${c.name}">
      <h2>${c.name}</h2>
    `;
    card.onclick = () => showDetail(c);
    charactersDiv.appendChild(card);
  });

  totalPages = data.meta.totalPages;
  renderPagination();
}

function renderPagination() {
  paginationDiv.innerHTML = `
    <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}>Anterior</button>
    <span>Página ${currentPage} de ${totalPages}</span>
    <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? "disabled" : ""}>Siguiente</button>
  `;
}

function changePage(page) {
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    fetchCharacters(currentPage);
  }
}

function showDetail(character) {
  mainScreen.style.display = "none";
  detailScreen.style.display = "block";

  detailImage.src = character.image;
  detailName.textContent = character.name;
  detailKi.textContent = character.ki;
  detailDescription.textContent = character.description;
}

function goBack() {
  detailScreen.style.display = "none";
  mainScreen.style.display = "block";
}

// Inicializar
fetchCharacters();

// Inicializar
fetchCharacters();
