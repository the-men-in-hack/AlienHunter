const router = require("express").Router();
const Abduction = require("../models/Abduction.model");

/* GET home page */

router.get("/", (req, res, next) => {
  Abduction
    .find()
    .populate("reporter")
    .then(abductionsFromDB => {
      // let dateFormat = abductionsFromDB[0].timeDate.toDateString();
      // console.log("-------------------", dateFormat)
      res.render("index", {abductions: abductionsFromDB});
    })
    .catch(err => console.log("no posts found in DB", err));
});



module.exports = router;

