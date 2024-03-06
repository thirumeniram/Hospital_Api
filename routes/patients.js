const express= require('express');
const passport = require("passport");
const router = express.Router();

const {registerPatient} = require("../controllers/patient_controller");

const {createReport,getAllReportsForPatient }=require("../controllers/report_controller")
  

//  router.post('/register',verifyToken, patientController.register);

 
//  //- /patients/:id/create_report
//  router.post('/:id/create_report',verifyToken,reportController.create_report);
//  router.get('/:id/all_reports',  reportController.all_reports);


router.post(
  "/register",
  (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
     
        return next(err);
      }
      if (!user) {
        console.log(info.message)
        return res.status(401).json({ message: info.message });
      }
      req.user = user;
      next();
    })(req, res, next); // This is the correct placement for invocation.
  },
 
  registerPatient
);

router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  createReport
);

router.get("/:id/all_report", getAllReportsForPatient );

router.get('/', (req, res) => {
    res.send('Welcome to the Patients page');
  });
  


module.exports = router;