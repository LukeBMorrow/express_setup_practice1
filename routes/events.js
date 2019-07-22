var express = require("express");
var router = express.Router({mergeParams: true});

router.get("/", function(req, res){
    res.send("events page here");
});



module.exports = router;