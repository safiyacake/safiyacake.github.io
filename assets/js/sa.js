const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".itemss");
const tabPannes = document.querySelectorAll(".tab-paness");
const pagination = document.querySelector(".pagination");

const itemsPerPage = 5;
let currentPage = 1;
let filteredCards = [];

function displayCards(startIndex, endIndex, cardList) {
  cardList.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function updatePagination(cardList, filtered = false) {
  const pageCount = Math.ceil(cardList.length / itemsPerPage);
  let paginationHTML = "";

  for (let i = 1; i <= pageCount; i++) {
    paginationHTML += `<button onclick="gotoPage(${i}, ${filtered})">${i}</button>`;
  }

  pagination.innerHTML = paginationHTML;
}

function gotoPage(page, filtered) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const cardList = filtered ? filteredCards : Array.from(cards);
  displayCards(startIndex, endIndex, cardList);
  currentPage = page;
}

function filterCards() {
  const searchText = searchInput.value.toLowerCase();
  filteredCards = Array.from(cards).filter((card) => {
    const title = card.querySelector("h4").innerText.trim().toLowerCase();
    const description = card.querySelector("p").innerText.trim().toLowerCase();

    return title.includes(searchText) || description.includes(searchText);
  });

  currentPage = 1;

  if (filteredCards.length > 0) {
    displayCards(0, itemsPerPage, filteredCards);
    updatePagination(filteredCards, true);
  } else {
    displayCards(0, itemsPerPage, cards);
    updatePagination(cards);
  }
}

searchInput.addEventListener("input", filterCards);

// Initial setup
updatePagination(cards);
displayCards(0, itemsPerPage, cards);
