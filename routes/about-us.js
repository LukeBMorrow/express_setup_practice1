var express = require("express");
var router = express.Router({mergeParams: true});

router.get("/", function(req, res){
    res.send("about us page here");
});



module.exports = router;