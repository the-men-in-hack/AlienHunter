const router = require("express").Router();
const Abduction = require("../models/Abduction.model");

router.get("/", (req, res, next) => {
    Abduction.find()
    .then( abductionsFromDB => {
      res.render("abduction/abduction-list", {abductions: abductionsFromDB});
    })
    .catch();
});

    
router.get("/create", (req, res, next) => {
    res.render("abduction/abduction-new");
});
    
router.post('/create', (req, res, next) => {

  const abductionDetails = {
    location: {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude],
    },
    locationName: req.body.locationName,
    timeDate: req.body.timeDate,
    reporter: req.session.user._id,
    pictures: req.body.pictures,
    description: req.body.description,
  }

  console.log(abductionDetails)

  Abduction.create(abductionDetails,{returnNewDocument: true} )
    .then( abduction => {
      res.render("abduction/abduction-detail" , abduction);
    })
    .catch( err => {
      console.log('Error creating new abduction...', err);
    })
})

router.get("/:abductionId", (req, res, next) => {
    Abduction.findById(req.params.abductionId)
    .then( (abduction) => {
        res.render("abduction/abduction-detail", abduction);
    })
    .catch();
});

router.get("/:abductionId/edit", (req, res, next) => {
    Abduction.findById(req.params.abductionId)
    .then( (abductionDetails) => {
      res.render("abduction/abduction-edit", abductionDetails);
    })
    .catch( err => {
      console.log("Error getting abduction details from DB...", err);
    });
});

router.post("/:abductionId/edit", (req, res, next) => {
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

  Abduction.findByIdAndUpdate(abductionId, abductionDetails)
    .then( () => {
      res.redirect(`/abduction/${abductionId}`);
    })
    .catch( err => {
      console.log("Error updating abduction...", err);
    });
});


router.get("/:abductionId/delete", (req, res, next) => {
    Abduction.findByIdAndDelete(req.params.abductionId)
    .then(() => {
      res.redirect("/abduction");
    })
    .catch(err => {
      console.log("Error deleting abduction...", err);
    });

});

module.exports = router;

