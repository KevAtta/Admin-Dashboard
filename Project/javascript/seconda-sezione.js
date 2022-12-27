// BARRETTA LATERLAE NELLE VOCI DEL MENU DI SELEZIONE A SINSITRA
// **************************************************
// sezione "immagini"
// **************************************************
document.querySelector(".seconda-voce").addEventListener("click", () => {
  document.querySelector(".seconda-voce").classList.add("attivo");
  document.querySelector(".prima-voce").classList.remove("attivo");
  document.querySelector(".terza-voce").classList.remove("attivo");
  document.querySelector(".corpo-sez2").style.display = "block";
  document.querySelector(".corpo-sez1").style.display = "none";
  document.querySelector(".corpo-sez3").style.display = "none";
  document.querySelector(".sezione").innerText = "/Immagini";
  // prende l'API e insericsi le immagini nel carosello

  document.querySelector(".loading").style.display = "block";

  immagini.prendiImmagini().then((data) => {
    for (i = 0; i < 100; i++) {
      document.querySelector(
        ".carousel-container"
      ).innerHTML += `<div class="mySlides animate">
      <a href="${data[i].url}">
      <img
      src="${data[i].url}"
      alt="slide"
      />
      </a>
    </div>`;
    }
    document.querySelector(
      ".carousel-container"
    ).innerHTML += `<a class="prev" onclick="prevSlide()">&#10094;</a>
  <a class="next" onclick="nextSlide()">&#10095;</a>`;
    showSlides();
    document.querySelector(".loading").style.display = "none";
  });
});
