//injecting dependencies
const express = require("express");
const path = require("path"); // this is a core module
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

const app = express(); //express instance
const port = 4000; //port

//connect to the database
//mongoose.connect(config.database);
mongoose.connect(config.database, { useNewUrlParser: true }, err => {
  if (!err) {
    console.log("MongoDB connection success!!!");
  } else {
    console.log("Errr is DB connection : " + err);
  }
});

//******Middleware******
//cors Middleware
app.use(cors()); //alows us to make a request to our API from a deferent domain

//Body Parser Middleware
app.use(bodyParser.json());

//pasport middleware
app.use(passport.initialize());
app.use(passport.session());

//passport folder
require("./config/passport")(passport);

//set static folder
app.use(express.static(path.join(__dirname, "public")));

// ******ROUTES******
//index route
app.get("/", (req, res, next) => {
  res.send("First");
});

//admin routes
const admin = require("./controllers/adminController");
app.use("/admin", admin);
// user routes
const users = require("./controllers/userController");
app.use("/users", users);
//donor routes
const donors = require("./controllers/donorController");
app.use("/donors", donors);
//appUser routes
const appusers = require("./controllers/appUserController");
app.use("/appusers", appusers);

//start server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
