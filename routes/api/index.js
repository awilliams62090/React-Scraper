const router = require("express").Router();
const articleRoutes = require("./apiRoutes");

// Article routes
router.use("/articles", articleRoutes);

module.exports = router;