const searchInput = document.getElementById("searchInput");
const cardPembungkus = document.querySelectorAll(".tab-pane");
const cards = document.querySelectorAll(".menu-item");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector("h4").innerText.toLowerCase();
    const description = card.querySelector("p").innerText.toLowerCase();

    // Menyembunyikan card jika judul atau deskripsi tidak cocok dengan kata kunci pencarian
    if (title.includes(searchText) || description.includes(searchText)) {
      card.style.display = "block"; // Menampilkan card yang cocok
    } else {
      card.style.display = "none"; // Menyembunyikan card yang tidak cocok
    }
  });
});
