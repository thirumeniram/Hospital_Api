const express=require("express");
const router=express.Router();

//Any request to '/doctors' will be passed to the doctors.js router for further processing
router.use('/doctors',require('./doctors.js'))

//Any request to'/patients' will be passed to th patients.js router for further processing
router.use('/patients',require('./patients.js'))


//Any request to'/reports' will be passed to th reports.js router for further processing
router.use('/reports',require('./reports.js'))

module.exports = router;

