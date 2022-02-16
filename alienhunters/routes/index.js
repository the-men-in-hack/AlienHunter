const router = require("express").Router();
const Abduction = require("../models/Abduction.model");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

/* GET home page */

router.get("/", (req, res, next) => {

  Abduction
    .find()
    .populate("reporter")
    .then( abductionsFromDB => {
      res.render("index", {abductions: abductionsFromDB});
    })
    .catch(err => console.log("no posts found in DB", err));
});



module.exports = router;

