// BARRETTA LATERLAE NELLE VOCI DEL MENU DI SELEZIONE A SINSITRA
// sezione "utenti"
document.querySelector(".prima-voce").addEventListener("click", () => {
  document.querySelector(".prima-voce").classList.add("attivo");
  document.querySelector(".seconda-voce").classList.remove("attivo");
  document.querySelector(".terza-voce").classList.remove("attivo");
  document.querySelector(".corpo-sez2").style.display = "none";
  document.querySelector(".corpo-sez1").style.display = "block";
  document.querySelector(".corpo-sez3").style.display = "none";
  document.querySelector(".sezione").innerText = "/Utenti";
});

// **************************************************
// PULSANTE ELEMINIAZIONE
// *************************************************
function cancellaRiga(id) {
  document.querySelector(`#user${id}`).remove();
}

// **************************************************
// PULSANTE MODIFICA
// **************************************************
function modificaRiga(id) {
  document.querySelector(".form-modifica").addEventListener("submit", (e) => {
    e.preventDefault();
    modifica(e.target, id);
    // document.querySelector("#popup3").style.display = "none";
  });
}

function modifica(form, id) {
  var formData = new FormData(form);

  document.querySelector(`#user${id} p`).innerText =
    Object.fromEntries(formData).id;
  document.querySelector(`#user${id} a h3`).innerText =
    Object.fromEntries(formData).nomecompleto;
  document.querySelector(`#user${id} .email`).innerText =
    Object.fromEntries(formData).email;

  fetch("https://jsonplaceholder.typicode.com/users/" + id, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      name: Object.fromEntries(formData).nomecompleto,
      email: Object.fromEntries(formData).email,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// ********************************************************
// PULSANTE PER AGGIUNTA UTENTE
// *******************************************************
// click del submit
document
  .querySelector(".form-aggiunta-utenti")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    // const a = document.getElementById("id").value;
    // console.log(a);
    aggiungiUtente(e.target);
  });

// funzione per aggiungereUtente alla lista nella schermata
function aggiungiUtente(form) {
  var formData = new FormData(form);

  dati
    .prendiUtente()
    .then((data) => {
      const numeroId = data.length;

      document.querySelector(".lista-utenti").innerHTML +=
        `<li class="utente" id=user${numeroId + 1}>
  <p>${numeroId + 1}</p>
  <a class="nome-lista-utenti" href="#popup1">
    <img src="img/user_placeholder.png" alt="#" class="placeholder" />
    <h3 class="nome">` +
        Object.fromEntries(formData).nomecompleto +
        `</h3>
  </a>
  <p class="email">` +
        Object.fromEntries(formData).email +
        `</p>
  <div class="icone-lista-utente">
    <a href="#"
      ><ion-icon
        name="pencil-outline"
        id="matita"
        class="link-lista-utenti"
      ></ion-icon
    ></a>
    <a href="#"
      ><ion-icon
        name="trash-bin-outline"
        id="bidone"
        class="numero${numeroId}"
        onclick="cancellaRiga(${numeroId})"
      ></ion-icon
    ></a>
  </div>
</li>`;

      document.getElementById("nomecompleto").value = "";
      document.getElementById("email").value = "";
      document.getElementById("indirizzo").value = "";
      document.getElementById("telefono").value = "";
      document.getElementById("azienda").value = "";
      document.getElementById("azienda").value = "";

      // return numeroId;
    })
    .then((data) =>
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          id: data + 1,
          name: Object.fromEntries(formData).nomecompleto,
          email: Object.fromEntries(formData).email,
          phone: Object.fromEntries(formData).telefono,
          address: Object.fromEntries(formData).indirizzo,
          company: Object.fromEntries(formData).azienda,
        }),
        headers: { "content-type": "application/json; charset=UTF-8" },
      })
    )
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// *****************************************************
// INFO POP-UP
// ****************************************************

function vediInfo(id) {
  fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then((risposta) => risposta.json())
    .then((data) => {
      document.querySelector(".li1").innerHTML =
        "<strong>ID</strong>: " + data.id;
      document.querySelector(".li2").innerHTML =
        "<strong>Nome e cognome</strong>: " + data.name;
      document.querySelector(".li3").innerHTML =
        "<strong>Email</strong>: " + data.email;
      document.querySelector(".li4").innerHTML =
        "<strong>Indirizzo</strong>: " + data.address.street;
      document.querySelector(".li5").innerHTML =
        "<strong>Telefono</strong>: " + data.phone;
      document.querySelector(".li6").innerHTML =
        "<strong>Sito</strong>: " + data.website;
      document.querySelector(".li7").innerHTML =
        "<strong>Azienda</strong>: " + data.company.name;

      // document.querySelector("#popup1").style.visibility = "visible";
      // document.querySelector("#popup1").style.opacity = 1;
    });

  fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((risposta) => risposta.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".lii1").innerHTML =
        "<strong>ID</strong>: " + data.id;
      document.querySelector(".lii2").innerHTML =
        "<strong>Titolo</strong>: " + data.title;
      document.querySelector(".lii3").innerHTML =
        "<strong>Corpo</strong>: " + data.body;
    });
}

document.querySelector(".post-popup").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".content1").style.display = "none";
  document.querySelector(".content2").style.display = "block";
  document.querySelector(".post-popup").classList.toggle("attivo");
  document.querySelector(".generale-popup").classList.toggle("attivo");
  document.querySelector(".content2").style.backgroundColor = "#fff";
});

document.querySelector(".generale-popup").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".content1").style.display = "block";
  document.querySelector(".content2").style.display = "none";
  document.querySelector(".generale-popup").classList.toggle("attivo");
  document.querySelector(".post-popup").classList.toggle("attivo");
  document.querySelector(".content1").style.backgroundColor = "#fff";
  document.querySelector(".generale-popup").style.display = "block";
});

// *****************************************************
// BARRA DI RICERCA
// *****************************************************
const cercaUtentee = document.querySelector(".barra-ricerca");

cercaUtentee.addEventListener("keyup", (e) => {
  const input = e.target.value;

  if (e.key === "Enter") {
    // ricerca per vedere se il nome è presente
    let nomeAPI = variabileDatiUtente.filter((cercaNome) => {
      return cercaNome.name.indexOf(input) > -1;
    });
    // console.log(nomeAPI);

    // se l'array non è vuoto
    if (nomeAPI.length !== 0) {
      // pulisco tutta la grafica degli utenti
      document.querySelector(".lista-utenti").innerHTML = "";
      // per ogni elemento trovato in seguito all'inserimento dell'input
      nomeAPI.forEach((ele) => {
        // mostro tutti gli elementi trovati
        document.querySelector(".lista-utenti").innerHTML +=
          `<li class="utente">
        <p>` +
          ele.id +
          `</p>
        <a class="nome-lista-utenti" href="#popup1" onclick=vediInfo>
          <img src="img/user_placeholder.png" alt="#" class="placeholder" />
          <h3 class="nome">` +
          ele.name +
          `</h3>
        </a>
        <p class="email">` +
          ele.email +
          `</p>
        <div class="icone-lista-utente">
          <a href="#popup3"
            ><ion-icon
              name="pencil-outline"
              id="matita"
              class="link-lista-utenti"
            ></ion-icon
          ></a>
          <a href="#"
            ><ion-icon
              name="trash-bin-outline"
              id ="bidone"
            ></ion-icon
          ></a>
        </div>
      </li>`;
      });
    }
    // se non trovo nulla
    else {
      // stampo un messaggio di errore
      alert("Utente non trovato");
    }
  }

  if (e.target.value === "") {
    document.querySelector(".lista-utenti").innerHTML = "";
    stampaUtenti(variabileDatiUtente);
  }

  // ******************************
  // ALTRO METODO USANDO LO SPLIT!

  // const input = e.target.value;
  // let nomi = [];
  // let nomi_separati = [];

  // if (e.key === "Enter") {
  //   // con il ciclo for prendo tutti i nomi presenti nel JSON e vado a creare una matrice di nomi e cognomi
  //   // la funzione split mi divide le stringhe allo spazio
  //   for (i = 0; i < variabileDatiUtente.length; i++) {
  //     nomi[i] = variabileDatiUtente[i].name;
  //     nomi_separati[i] = nomi[i].split(" ");
  //   }
  //   // console.log(nomi);
  //   // console.log(nomi_separati[0][0]);

  //   // **********************************************************
  //   variabileDatiUtente.forEach((ele) => {
  //     let credenziali = ele.name.split(" ");
  //     let inputDiviso = input.split(" ");

  //     credenziali.forEach((item) => {
  //       if (inputDiviso.some((input) => input === item)) {
  //         console.log("ok");
  //       }
  //     });
  //   });
  //   // ***********************************************************

  //   // ciclo ogni nome e cognome e se l'input inseirito dall'utente matcha o con il nome o con il cognome scrive nell'HTML
  //   for (i = 0; i < variabileDatiUtente.length; i++) {
  //     for (j = 0; j < variabileDatiUtente.length; j++) {
  //       if (input === nomi_separati[i][j]) {
  //         document.querySelector(".lista-utenti").innerHTML = "";
  //         document.querySelector(".lista-utenti").innerHTML +=
  //           `<li class="utente" id=user${variabileDatiUtente[i].id}>
  //          <p>` +
  //           variabileDatiUtente[i].id +
  //           `</p>
  //            <a class="nome-lista-utenti" href="#popup1" onclick=vediInfo(${variabileDatiUtente[i].id})>
  //             <img src="img/user_placeholder.png" alt="#" class="placeholder" />
  //              <h3 class="nome">` +
  //           variabileDatiUtente[i].name +
  //           `</h3>
  //            </a>
  //           <p class="email">` +
  //           variabileDatiUtente[i].email +
  //           `</p>
  //            <div class="icone-lista-utente">
  //            <a href="#popup3"
  //           ><ion-icon
  //              name="pencil-outline"
  //               id="matita"
  //              class="link-lista-utenti"
  //              onclick=modificaRiga(${variabileDatiUtente[i].id})
  //            ></ion-icon
  //           ></a>
  //         <a href="#"
  //            ><ion-icon
  //           name="trash-bin-outline"
  //           id ="bidone"
  //           onclick="cancellaRiga(${variabileDatiUtente[i].id})"
  //           ></ion-icon
  //         ></a>
  //        </div>
  //       </li>`;
  //       }
  //     }
  //   }
  // }
  // // ripristina la schermata quando si lascia vuota la barra di ricerca
  // if (e.target.value === "") {
  //   document.querySelector(".lista-utenti").innerHTML = "";
  //   stampaUtenti(variabileDatiUtente);
  // }
});

/*****************************************************/
// COME FUNZIONA FILTER E INDEX OF
/*****************************************************/
// Il metodo filter() prende ogni elemento in un array e applica un'istruzione condizionale
// su di esso. Se questa condizione restituisce true, l'elemento viene inviato all'array
// di output. Se la condizione restituisce false, l'elemento non viene inviato all'array
// di output.
// ES:

// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter((item) => item % 2 === 0);
// console.log(evens); // [2, 4]

// RIGAURDO INDEXOF
// Il metodo indexOf() restituisce il primo indice in cui è possibile
// trovare un determinato elemento nell'array, oppure -1 se non è presente.
// ES(1):

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
// console.log(beasts.indexOf('bison', 2));
// expected output: 4

// console.log(beasts.indexOf('giraffe'));
// expected output: -1
// ES(2):

// const array = [2, 9, 9];
// array.indexOf(2);     // 0
// array.indexOf(7);     // -1
// array.indexOf(9, 2);  // 2
// array.indexOf(2, -1); // -1
// array.indexOf(2, -3); // 0

// Il indexOf()metodo salta gli slot vuoti negli array sparsi.
