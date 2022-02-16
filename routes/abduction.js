const router = require("express").Router();
const Abduction = require("../models/Abduction.model");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const isCurrentUser = require("../middleware/isCurrentUser");

router.get("/", (req, res, next) => {

    Abduction
      .find()
      .populate("reporter")
      .then( abductionsFromDB => {
        res.render("abduction/abduction-list", {abductions: abductionsFromDB});
      })
      .catch(err => console.log("no posts found in DB", err));
});

    
router.get("/create", isLoggedIn, (req, res, next) => {
    res.render("abduction/abduction-new");
});
    
router.post('/create', isLoggedIn, (req, res, next) => {

  const abductionDetails = {
    location: {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude],
    },
    locationName: req.body.locationName,
    timeDate: req.body.timeDate,
    pictures: req.body.pictures,
    description: req.body.description,
    reporter: req.session.user._id,
  }

  console.log(abductionDetails)

  Abduction.create(abductionDetails ) //,{new: true} 
    .then( abduction => {
      console.log(abduction);
      res.render("abduction/abduction-detail" , abduction);
    })
    .catch( err => {
      console.log('Error creating new abduction...', err);
    })
})

router.get("/:abductionId", isLoggedIn, (req, res, next) => {
    Abduction
      .findById(req.params.abductionId)
      .populate("reporter")
      .then( (abduction) => {
        res.render("abduction/abduction-detail", abduction);
      })
      .catch();
});

router.get("/:abductionId/edit", isLoggedIn,isCurrentUser,(req, res, next) => {
  console.log(req.session.user._id)  
  
  Abduction
    .findById(req.params.abductionId)
    .populate("reporter")
    .then( (abductionDetails) => {
      res.render("abduction/abduction-edit", abductionDetails);
    })
    .catch( err => {
      console.log("Error getting abduction details from DB...", err);
    });
});

router.post("/:abductionId/edit", isLoggedIn, isCurrentUser, (req, res, next) => {
  const abductionId = req.params.abductionId;

  const abductionDetails = {
      
    location: {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude],
    },
    locationName: req.body.locationName,
    timeDate: req.body.timeDate,
    reporter: req.body.reporter,
    pictures: req.body.pictures,
    description: req.body.description,
  }

  Abduction
    .findByIdAndUpdate(abductionId, abductionDetails)
    .then( () => {
      res.redirect(`/abduction/${abductionId}`);
    })
    .catch( err => {
      console.log("Error updating abduction...", err);
    });
});

router.get("/:abductionId/delete", isLoggedIn, isCurrentUser, (req, res, next) => {
      Abduction
      .findByIdAndDelete(req.params.abductionId)
      .then(() => {
        res.redirect("./");
    })
      .catch(err => {
      console.log("Error deleting abduction...", err);
    });
});

module.exports = router;

