const express= require('express');
const passport = require("passport");
const router = express.Router();

const {registerPatient} = require("../controllers/patient_controller");

const {createReport,getAllReportsForPatient }=require("../controllers/report_controller")
  

// Route to register a patient. It uses JWT authentication to ensure that only authenticated doctors can access this route.
router.post(
  "/register",
  // (req, res, next) => {
    passport.authenticate('jwt', { session: false }), 
    // (err, user, info) => {
    //   if (err) {
     
    //     return next(err);
    //   }
    //   if (!user) {
    //     console.log(info.message)
    //     return res.status(401).json({ message: info.message });
    //   }
    //   req.user = user;
    //   next();
    // })(req, res, next); // This is the correct placement for invocation.
  // },
 
  registerPatient
);

//Route to create a report for a patient.  It uses JWT authentication to ensure that only authenticated doctors can access this route.
router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  createReport
);

//Route to get all reports for a specific patient.
router.get("/:id/all_report", getAllReportsForPatient );



module.exports = router;