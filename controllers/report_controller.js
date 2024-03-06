const Patient = require("../models/patientModel");

module.exports.createReport = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);
    console.log(patient);
    req.body.date = Date.now();
    patient.reports.push(req.body);
    console.log("req_body",req.body)
    console.log(patient);
    await patient.save(); // Ensure save operation is awaited

    res.status(200).json({
      success: true,
      message: "report submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "could not create a report, internal server error",
    });
  }
};

module.exports.getAllReportsForPatient = async (req, res, next) => {
    try {
        console.log("called")
      const patient = await Patient.findById(req.params.id);
      res.status(200).json({
        success: true,
        reports: patient.reports,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "could not fetch the patient reports",
      });
    }
  };
  
  module.exports.getAllReportsByStatus = async (req, res, next) => {
    try {
      const patients = await Patient.find({
        "reports.status": req.params.status,
      });
  
      res.status(200).json({
        success: true,
        data: patients,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "could not fetch the reports",
      
      });
      res.send("could not fetch the reports")
    }
  };
