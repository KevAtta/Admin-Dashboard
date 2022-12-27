// **************************************************
// SEZIONE "POST"
// **************************************************
document.querySelector(".terza-voce").addEventListener("click", () => {
  document.querySelector(".terza-voce").classList.add("attivo");
  document.querySelector(".prima-voce").classList.remove("attivo");
  document.querySelector(".seconda-voce").classList.remove("attivo");
  document.querySelector(".corpo-sez2").style.display = "none";
  document.querySelector(".corpo-sez1").style.display = "none";
  document.querySelector(".corpo-sez3").style.display = "block";
  document.querySelector(".sezione").innerText = "/Post";

  document.querySelector(".loading").style.display = "block";

  // prende l'APi e costruisce l'HTML
  post.prendiPost().then((data) => {
    for (i = 0; i < data.length; i++) {
      let value3 = Math.floor(Math.random() * 100);
      document.querySelector(".post-list").innerHTML +=
        `<div class="post-card">
      <a href="">
      <img src="https://randomuser.me/api/portraits/women/` +
        value3 +
        `.jpg" class="profilo-autore-post" />
      <h4 class="Titolo">` +
        data[i].title +
        `</h4>
      <p class="id-autore">ID autore:` +
        data[i].userId +
        `</p>
      <p class="corpo-post">"` +
        data[i].body +
        `"</p>
        </a>
    </div>`;
    }

    document.querySelector(".loading").style.display = "none";
  });
});
