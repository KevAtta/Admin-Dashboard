// **************************************************
// CLASSE CHE PRENDE GLI UTENTI DALL'API
// **************************************************

class Dati {
  async prendiUtente() {
    const rispostaApi = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const datiUtenti = await rispostaApi.json();

    return datiUtenti;
  }
}

// **************************************************
// ISTANZA DELLA CLASSE CON I VARI DATI
// **************************************************
const dati = new Dati();
