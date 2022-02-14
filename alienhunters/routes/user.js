const router = require("express").Router();
const User = require("../models/User.model");

router.get("/profile", (req, res, next) => {

    User
      .find()
      .then((userFromDb) => {
        res.render("users/profile", { user: userFromDb });
      })
      .catch(err => console.log("Error getting book list", err));
  });
  

  module.exports = router;