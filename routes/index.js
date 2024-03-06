const express=require("express");
const router=express.Router();

router.use('/doctors',require('./doctors.js'))
router.use('/patients',require('./patients.js'))
router.use('/reports',require('./reports.js'))

module.exports = router;