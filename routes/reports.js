const express= require('express');
const router = express.Router();
const {getAllReportsByStatus }=require("../controllers/report_controller")
// const reportController = require('../../../controllers/api/v1/report_controller');
// const {verifyToken} = require('../../../config/middleware');
// const passport = require('passport');

// // ****** Defining Routes ****** //
// router.post('/:id/create_report', verifyToken, reportController.create_report);
// router.get('/:status',  reportController.report_by_status);
router.get("/:status", getAllReportsByStatus);
router.get('/', (req, res) => {
    res.send('Welcome to the reports page');
  });
  


module.exports = router;