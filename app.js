//"localhost:3000"                                                           <----- url for server
//"C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"                        <----- mongo start cmd
//"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db" <----- mongod start cmd
//package utilization vars ----------------------
    var express     = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    Blog            = require("./models/blog.js"),
    indexRoutes     = require("./routes/index.js");
    blogPostRoutes  = require("./routes/blog-posts.js");
    aboutUsRoutes   = require("./routes/about-us.js");
    eventsRoutes    = require("./routes/events.js");
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

//routes----------------------------------------
    app.use(indexRoutes);
    app.use("/blog-posts"   ,blogPostRoutes);
    app.use("/about-us"     ,aboutUsRoutes);
    app.use("/events"       ,eventsRoutes);
//----------------------------------------------



//listen for the server-------------------------
    var port = process.env.PORT || 3000;
    app.listen(port, function(){
        console.log("Starting app");
    });
//----------------------------------------------


//CODE BLOCKS ----------------------------------

// TEST BLOG CREATION BLOCK ********
// Blog.create({
//     title: "Test Blog",
//     image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//     body: "this blog is going to be a storm."
// })
//**********************************