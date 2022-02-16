const Abduction = require("../models/Abduction.model");

 module.exports = (req, res, next ) => {
    Abduction
        .findById(req.params.abductionId)
        .then( (abductionDetails) => {
            console.log("before if", abductionDetails.reporter)
            if(req.session.user._id != abductionDetails.reporter){
                console.log("inside if",req.session.user._id)
                res.redirect("/")
            }
    })
    next();
}