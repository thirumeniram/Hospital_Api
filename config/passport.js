const passport = require("passport");
const DoctorModel = require("../models/doctorModel");
const JWTStrategy = require("passport-jwt").Strategy;
const extractJWT = require("passport-jwt").ExtractJwt;

const jwtOptions = {
  jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "your_secret_key", // Ideally, use an environment variable
};

// passport.use(
//   new JWTStrategy(jwtOptions, (jwtPayload, done) => {
//     // Use jwtPayload.id instead of jwtPayload.sub
//     console.log("JWT Strategy triggered", jwtPayload);
//     try {
//       const doctor = await DoctorModel.findById(jwtPayload.id).exec(); // Use async/await
//       if (doctor) {
//         // Doctor found
//         return done(null, doctor);
//       } else {
//         // No doctor found with this id
//         return done(null, false);
//       }
//     } catch (err) {
//       console.error("Error finding doctor:", err);
//       return done(err, false);
//     }
//     });
//   })
// );

passport.use(
    new JWTStrategy(jwtOptions, (jwtPayload, done) => {
      console.log("JWT Strategy triggered", jwtPayload);
      // Wrap the async logic inside an immediately invoked async function
      (async () => {
        try {
          const doctor = await DoctorModel.findById(jwtPayload.id).exec(); // Now valid because we're inside an async function
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
      })(); // Immediately invoke the async function
    })
  );
module.exports = passport;
