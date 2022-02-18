const router = require("express").Router();
const Abduction = require("../models/Abduction.model");

/* GET home page */

router.get("/", (req, res, next) => {
  Abduction
    .find()
    .populate("reporter")
    .then(abductionsFromDB => {
      res.render("index", {abductions: abductionsFromDB});
    })
    .catch(err => console.log("no posts found in DB", err));
});



module.exports = router;

