// **************************************************
// classe che prende i post dall'API
// **************************************************
class Post {
  async prendiPost() {
    const rispostaApi = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const datiPost = await rispostaApi.json();

    return datiPost;
  }
}

// **************************************************
// ISTANZADELLA CLASSE POST
// **************************************************
const post = new Post();
