const express= require('express');
const router = express.Router();
const {getAllReportsByStatus }=require("../controllers/report_controller")

//This route is used to fetch all reports matching a specific status.
router.get("/:status", getAllReportsByStatus);

  


module.exports = router;