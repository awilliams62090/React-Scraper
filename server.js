const express = require("express");
const logger = require("morgan")
const mongoose = require("mongoose");
const routes= require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactscraperhw", {
  useCreateIndex: true, 
  useNewUrlParser: true
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));