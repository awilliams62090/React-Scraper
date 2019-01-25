import axios from "axios";

export default {
  // API call to google Books API
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Grab all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Delete book by ID
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Save Book to DB
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
