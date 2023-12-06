const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".itemss");
const tabPannes = document.querySelectorAll(".tab-paness");
const pagination = document.querySelector(".pagination");

const itemsPerPage = 5; // Jumlah card yang ingin ditampilkan per halaman
let currentPage = 1;
let filteredCards = [];

function displayCards(startIndex, endIndex) {
  cards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = "block"; // Menampilkan card sesuai dengan indeks halaman
    } else {
      card.style.display = "none"; // Menyembunyikan card di luar indeks halaman
    }
  });
}

function displayFilteredCards() {
  const resultContainer = document.querySelector(".row.gy-5.tab-paness"); // Ganti dengan selektor yang sesuai
  resultContainer.innerHTML = ""; // Mengosongkan kontainer sebelum menambahkan kartu-kartu hasil pencarian

  filteredCards.forEach((card) => {
    resultContainer.appendChild(card.cloneNode(true)); // Menambahkan kartu yang cocok ke dalam kontainer
  });
}

function setupPagination(filtered = false) {
  const targetCards = filtered ? filteredCards : cards;
  const pageCount = Math.ceil(targetCards.length / itemsPerPage); // Jumlah total halaman

  let paginationHTML = "";
  for (let i = 1; i <= pageCount; i++) {
    paginationHTML += `<button onclick="gotoPage(${i})">${i}</button>`;
  }

  pagination.innerHTML = paginationHTML;

  displayCards(0, itemsPerPage); // Menampilkan halaman pertama saat halaman dimuat
}

function gotoPage(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  displayCards(startIndex, endIndex); // Menampilkan card pada halaman yang dipilih
  currentPage = page;
}

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();
  filteredCards = Array.from(cards).filter((card) => {
    const title = card.querySelector("h4").innerText.toLowerCase();
    const description = card.querySelector("p").innerText.toLowerCase();

    return title.includes(searchText) || description.includes(searchText);
  });

  currentPage = 1; // Kembali ke halaman pertama saat pencarian diubah

  if (filteredCards.length > 0) {
    displayFilteredCards();
    setupPagination(true);
    console.log("OK 1");
  } else {
    displayCards(0, itemsPerPage);
    setupPagination(false);
    console.log("OK 2");
  }
});

setupPagination(); // Memanggil fungsi untuk setup pagination saat halaman dimuat
