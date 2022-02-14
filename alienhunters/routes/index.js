const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", req.session.user);
});

module.exports = router;
