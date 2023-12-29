const searchInput = document.getElementById("searchInput");
const cardPembungkus = document.querySelectorAll(".tab-pane");
const cards = document.querySelectorAll(".menu-item");
const produkKami = document.querySelectorAll(".produk-kami");
const kma = document.querySelectorAll(".kma");
const kmb = document.querySelectorAll(".kmb");
const kmc = document.querySelectorAll(".kmc");
const kaa = document.querySelectorAll(".kaa");
const kab = document.querySelectorAll(".kab");
const kac = document.querySelectorAll(".kac");

let textKelasA = " (1.200-1.500 /pcs)";
let textKelasB = " (1.500-2.000 /pcs)";
let textKelasC = " (mulai dari 2.000)";

setTimeout(() => {
  // produk kami
  produkKami.forEach((pk) => {
    const descriptionElementpk = pk.querySelector("p");
    if (descriptionElementpk) {
      let description = descriptionElementpk.innerText.toLowerCase();

      // Menambahkan variabel textKelasA ke dalam description
      description += textKelasA;

      // Memperbarui teks dari elemen p
      descriptionElementpk.innerText = description;
    }
    // Menyembunyikan card jika judul atau deskripsi tidak cocok dengan kata kunci pencarian
  });

  // kma
  kma.forEach((kue) => {
    const descriptionElementkma = kue.querySelector("p");
    const titleElementkma = kue.querySelector("h4");
    if (descriptionElementkma) {
      let description = descriptionElementkma.innerText.toLowerCase();

      // Menambahkan variabel textKelasA ke dalam description
      description += textKelasA;

      // Memperbarui teks dari elemen p
      descriptionElementkma.innerText = description;
    }
    // Menyembunyikan card jika judul atau deskripsi tidak cocok dengan kata kunci pencarian
  });

  // kmb
  kmb.forEach((kue) => {
    const titleElementkmb = kue.querySelector("h4");
    const descriptionElementkmb = kue.querySelector("p");
    if (descriptionElementkmb) {
      let description = descriptionElementkmb.innerText.toLowerCase();

      // Menambahkan variabel textKelasA ke dalam description
      description += textKelasB;

      // Memperbarui teks dari elemen p
      descriptionElementkmb.innerText = description;
    }
    // Menyembunyikan card jika judul atau deskripsi tidak cocok dengan kata kunci pencarian
  });

  // kmc
  kmc.forEach((kue) => {
    const titleElementkmc = kue.querySelector("h4");
    const descriptionElementkmc = kue.querySelector("p");
    if (descriptionElementkmc) {
      let description = descriptionElementkmc.innerText.toLowerCase();

      if (titleElementkmc.innerText.toLowerCase() === "bolu anak ayam") {
        textKelasC = "(6.000/3pcs)";
      } else if (titleElementkmc.innerText.toLowerCase() === "bolu boneka") {
        textKelasC = "(2.000/pcs)";
      } else if (titleElementkmc.innerText.toLowerCase() === "cheese roll") {
        textKelasC = "(3.500/pcs)";
      } else if (titleElementkmc.innerText.toLowerCase() === "clorot") {
        textKelasC = "(3.000/pcs)";
      } else if (titleElementkmc.innerText.toLowerCase() === "horn") {
        textKelasC = "(2.500/pcs)";
      } else if (titleElementkmc.innerText.toLowerCase() === "kue kelepon") {
        textKelasC = "(2.500/pcs)";
      } else if (titleElementkmc.innerText.toLowerCase() === "roti abon") {
        textKelasC = "(2.500/pcs)";
      } else if (titleElementkmc.innerText.toLowerCase() === "roti buaya") {
        textKelasC = "(12.000/pcs)";
      } else {
        textKelasC = "(mulai dari 2.000)";
      }

      // Menambahkan variabel textKelasA ke dalam description
      description += textKelasC;

      // Memperbarui teks dari elemen p
      descriptionElementkmc.innerText = description;
    }
    // Menyembunyikan card jika judul atau deskripsi tidak cocok dengan kata kunci pencarian
  });

  // kaa
  kaa.forEach((kue) => {
    const titleElementkaa = kue.querySelector("h4");
    const descriptionElementkaa = kue.querySelector("p");
    if (descriptionElementkaa) {
      let description = descriptionElementkaa.innerText.toLowerCase();

      // Menambahkan variabel textKelasA ke dalam description
      description += textKelasA;

      // Memperbarui teks dari elemen p
      descriptionElementkaa.innerText = description;
    }
    // Menyembunyikan card jika judul atau deskripsi tidak cocok dengan kata kunci pencarian
  });

  // kaa
  kab.forEach((kue) => {
    const titleElementkab = kue.querySelector("h4");
    const descriptionElementkab = kue.querySelector("p");
    if (descriptionElementkab) {
      let description = descriptionElementkab.innerText.toLowerCase();

      if (titleElementkab.innerText.toLowerCase() === "kebab mini") {
        textKelasB = "(1.500)";
      } else if (titleElementkab.innerText.toLowerCase() === "kebab medium") {
        textKelasB = "(2.000)";
      } else if (titleElementkab.innerText.toLowerCase() === "kebab premium") {
        textKelasB = "(3.000)";
      } else {
        textKelasB = "(1.500-2.000 /pcs)";
      }

      // Menambahkan variabel textKelasA ke dalam description
      description += textKelasB;

      // Memperbarui teks dari elemen p
      descriptionElementkab.innerText = description;
    }
    // Menyembunyikan card jika judul atau deskripsi tidak cocok dengan kata kunci pencarian
  });

  // kaa
  kac.forEach((kue) => {
    const titleElementkac = kue.querySelector("h4");
    const descriptionElementkac = kue.querySelector("p");
    if (descriptionElementkac) {
      let description = descriptionElementkac.innerText.toLowerCase();

      if (titleElementkac.innerText.toLowerCase() === "kebab mini") {
        textKelasC = "(1500)";
      } else if (titleElementkac.innerText.toLowerCase() === "kebab medium") {
        textKelasC = "(2000)";
      } else if (titleElementkac.innerText.toLowerCase() === "kebab premium") {
        textKelasC = "(3000)";
      } else if (titleElementkac.innerText.toLowerCase() === "bacang") {
        textKelasC = "(3000)";
      } else if (titleElementkac.innerText.toLowerCase() === "bakso ayam tusuk") {
        textKelasC = "(3000)";
      } else if (titleElementkac.innerText.toLowerCase() === "otak-otak") {
        textKelasC = "(10.000/pack)";
      } else if (titleElementkac.innerText.toLowerCase() === "risoles mayo") {
        textKelasC = "(2.500/pcs)";
      } else if (titleElementkac.innerText.toLowerCase() === "sosis solo premium") {
        textKelasC = "(2.500/pcs)";
      } else {
        textKelasC = "(mulai dari 2.000)";
      }
      // Menambahkan variabel textKelasA ke dalam description
      description += textKelasC;

      // Memperbarui teks dari elemen p
      descriptionElementkac.innerText = description;
    }
    // Menyembunyikan card jika judul atau deskripsi tidak cocok dengan kata kunci pencarian
  });
}, 1000);

searchInput.addEventListener("input", function (e) {
  e.preventDefault();
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

document.addEventListener("DOMContentLoaded", function () {
  var kuemanis = document.querySelectorAll(".km");
  var manisArr = Array.prototype.slice.call(kuemanis);
  manisArr.sort(function (a, b) {
    var manisA = a.querySelector("h4").textContent.toUpperCase();
    var manisB = b.querySelector("h4").textContent.toUpperCase();
    return manisA.localeCompare(manisB);
  });

  var menuItemsContainermanis = document.querySelector(".kuemanis");
  manisArr.forEach(function (element) {
    menuItemsContainermanis.appendChild(element);
  });

  // kue asin
  var kueasin = document.querySelectorAll(".ka");
  var asinArr = Array.prototype.slice.call(kueasin);
  asinArr.sort(function (a, b) {
    var asinA = a.querySelector("h4").textContent.toUpperCase();
    var asinB = b.querySelector("h4").textContent.toUpperCase();
    return asinA.localeCompare(asinB);
  });

  var menuItemsContainerasin = document.querySelector(".kueasin");
  asinArr.forEach(function (element) {
    menuItemsContainerasin.appendChild(element);
  });
});
