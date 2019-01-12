const router= require("express").Router();
const googleController = require("../../controllers/googleController");

//matches to my google api
router.route("/").get(googleController.findAll); 

module.exports= router;