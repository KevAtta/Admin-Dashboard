// **************************************************
// IMMAGINI DALL'API
// **************************************************
class Immagini {
  async prendiImmagini() {
    const rispostaApi = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );

    const datiImmagini = await rispostaApi.json();

    return datiImmagini;
  }
}

// **************************************************
// ISTANZA DELLA CLASSE
// **************************************************
const immagini = new Immagini();
