// **************************************************
// AZIONI CHE AVVENGONO AL CARICAMENTO DEL DOM
// **************************************************
let variabileDatiUtente;
window.addEventListener("DOMContentLoaded", async () => {
  variabileDatiUtente = await dati.prendiUtente();
  stampaUtenti(variabileDatiUtente);
  document.querySelector(".seconda-voce").classList.remove("attivo");
  document.querySelector(".terza-voce").classList.remove("attivo");
});

// **************************************************
// FUNZIONE PER STAMPA UTENTI PREDI DALL'API
// **************************************************
function stampaUtenti(variabileDatiUtente) {
  variabileDatiUtente.forEach((element) => {
    document.querySelector(".lista-utenti").innerHTML +=
      `<li class="utente" id=user${element.id}>
    <p>` +
      element.id +
      `</p>
    <a class="nome-lista-utenti" href="#popup1" onclick=vediInfo(${element.id})>
      <img src="img/user_placeholder.png" alt="#" class="placeholder" />
      <h3 class="nome">` +
      element.name +
      `</h3>
    </a>
    <p class="email">` +
      element.email +
      `</p>
    <div class="icone-lista-utente">
      <a href="#popup3"
        ><ion-icon
          name="pencil-outline"
          id="matita"
          class="link-lista-utenti"
          onclick=modificaRiga(${element.id})
        ></ion-icon
      ></a>
      <a href="#"
        ><ion-icon
          name="trash-bin-outline"
          id ="bidone"
          onclick="cancellaRiga(${element.id})"
        ></ion-icon
      ></a>
    </div>
  </li>`;
  });
}

// **************************************************
// FUNZIONE PER REFRESH PAGINA
// **************************************************

document.querySelector(".link-refresh").addEventListener("click", (e) => {
  e.preventDefault();
  location.reload();
});

// **************************************************
// NAVIGAZIONE MOBILE
// **************************************************

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".menu");
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const btnNavv = document.querySelector(".btn-mobile-nav");
const headerr = document.querySelector(".nav");
btnNavv.addEventListener("click", function () {
  headerr.classList.toggle("nav-open");
});
