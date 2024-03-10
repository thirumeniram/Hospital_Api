const Patient = require("../models/patientModel");

//Function to create a new report for a patient
module.exports.createReport = async (req, res, next) => {
  try {
    //Getting the patient by the ID passed as a URL parameter
    const patient = await Patient.findById(req.params.id);
    // console.log(patient);

    //Setting the current date/time as the report submission date
    req.body.date = Date.now();

    //Adding the new report to the patient's reports array
    patient.reports.push(req.body);
    // console.log("req_body",req.body)
    // console.log(patient);
    await patient.save(); 

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

//Function to retrieve all reports for a specific patient
module.exports.getAllReportsForPatient = async (req, res, next) => {
    try {
       
      //Finding the patient by ID and return all reports
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

  //Function to retrieve all reports by their status
  module.exports.getAllReportsByStatus = async (req, res, next) => {
    try {
      
      //Finding patients with reports matching the specified status
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
      
    }
  };
