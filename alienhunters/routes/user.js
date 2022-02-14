const router = require("express").Router();
const User = require("../models/User.model");

router.get("/profile", isLoggedIn, (req, res) => {
    const userId = req.session.user._id

  User
    .findById(userId)
    .then((user) => {
      res.render("users/profile", user);
    })
    .catch(err => console.log("No user was found with this ID", err))
});

module.exports = router;