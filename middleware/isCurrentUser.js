const Abduction = require("../models/Abduction.model");

 module.exports = (req, res, next ) => {
    Abduction
        .findById(req.params.abductionId)
        .then( (abductionDetails) => {
            if(req.session.user._id != abductionDetails.reporter){
                return res.redirect("/")
            }else{
                next()
            }
        })
        .catch(err => console.log("could not execute isCurrentUser middleware", err))
}