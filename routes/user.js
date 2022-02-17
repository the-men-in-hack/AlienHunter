const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", isLoggedIn, (req, res) => {
    const userId = req.session.user._id

  User
    .findById(userId)
    .then((user) => {
      res.render("user/profile", user);
    })
    .catch(err => console.log("No user was found with this ID", err))
});

router.get("/:userId/edit", isLoggedIn, (req, res, next) => {
  
  User
    .findById(req.params.userId)
    .then( (userDetails) => {
      res.render("user/user-edit", userDetails);
    })
    .catch( err => {
      console.log("Error getting user from DB...", err);
    });
});
  
router.post('/:userId/edit', isLoggedIn, (req, res, next) => {

const userDetails = {
    username: req.body.username,
    picture: req.body.picture,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    hobby: req.body.hobby,
    haveBeenAbducted: req.body.haveBeenAbducted,
    haveBeenProbed: req.body.haveBeenProbed,
    probeLocation: [req.body.probeLocation],
    experiments: [req.body.experiments],
    country: req.body.country,
    alienDescription: req.body.alienDescription,
}
  User
      .findByIdAndUpdate(req.params.userId, userDetails)
      .then( user => {
        res.redirect("../");
      })
      .catch( err => {
        console.log('Error updating user...', err);
      })
})

//other Profile route

router.get("/:userId/profile", isLoggedIn, (req, res, next) => {
  
  User
    .findById(req.params.userId)
    .then( (userDetails) => {
      res.render("user/other-profile", userDetails);
    })
    .catch( err => {
      console.log("Error getting user from DB...", err);
    });
});




module.exports = router;