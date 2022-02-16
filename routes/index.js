const router = require("express").Router();
const Abduction = require("../models/Abduction.model");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const session = require("express-session");

/* GET home page */

router.get("/", (req, res, next) => {
  let isUser;
  Abduction
    .find()
    .populate("reporter")
    .then(abductionsFromDB => {
      console.log(abductionsFromDB)
      if(req.session.user._id == abductionsFromDB.reporter._id) {
        isUser =  true
      }
      res.render("index", {abductions: abductionsFromDB, isUser});
    })
    .catch(err => console.log("no posts found in DB", err));
});



module.exports = router;

