const passport = require("passport");
const DoctorModel = require("../models/doctorModel");
const JWTStrategy = require("passport-jwt").Strategy;
const extractJWT = require("passport-jwt").ExtractJwt;

const jwtOptions = {
  jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),//Function to extract the JWT from the authorization header
  secretOrKey: "secret", // The secret key to verify the JWT's signature. 
};


//Using passport to utilize the JWT Strategy for handling authentication
passport.use(
    new JWTStrategy(jwtOptions, (jwtPayload, done) => {
      console.log("JWT Strategy triggered", jwtPayload);
     
      (async () => {
        try {
          const doctor = await DoctorModel.findById(jwtPayload.id).exec(); 
          if (doctor) {
            // Doctor found
            return done(null, doctor);
          } else {
            // No doctor found with this id
            return done(null, false);
          }
        } catch (err) {
          console.error("Error finding doctor:", err);
          return done(err, false);
        }
      })();//Immediately invoking the async function
    })
  );
module.exports = passport;
