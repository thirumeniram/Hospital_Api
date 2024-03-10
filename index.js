const express=require("express")
const bodyParser = require("body-parser");
const passport = require("passport");
const passportStratergy = require("./config/passport");
const db = require("./config/database");
const router = require("./routes/index");

const app = express();
const PORT =8000;

//Initializing Passport for authentication
app.use(passport.initialize());

//Settingup body-parser middleware to parse request bodies,through this we can access request body as req.body.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//the main router for the application. This includes all defined routes in routes/index.js
app.use(router);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`server is giving an error: ${err}`);
  } else {
    console.log("server is succesfully up and running");
  }
});