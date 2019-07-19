//package utilization vars ----------------------
    var express     = require("express");
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose");
//-----------------------------------------------

//run initializations----------------------------
    //tell mongoose where mongo is located
    mongoose.connect("mongodb://localhost:27017/practice_app",{useNewUrlParser: true});
    //tell express that file names are embeded javascript by default
    app.set("view engine", "ejs");
    //tell express where to find local(static) files
    app.use(express.static("public"));
    //tell express to use body-parser
    app.use(bodyParser.urlencoded({extended:true}));
//-----------------------------------------------





//listen for the server
var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Starting app");
});