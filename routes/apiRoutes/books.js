const router = require("express").Router();
const booksController= require("../../controllers/booksController");
// const keys= require("../../keys");
// const GoogleBook= require("node-googlebook-api");
// const googleBook= new GoogleBook(keys.googleBook);





router.get("/books", (req, res) => {
  axios.get("https://www.googleapis.com/books/v1/volumes?q=greatgatsby+intitle&key=AIzaSyAmxSogQpkB3YdNogyOAU6k6iJ5RnpquUQ").then(({ data: { results } }) => res.json(results))
  .catch(err => res.status(422).json(err));
});

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);
  
module.exports = router;
