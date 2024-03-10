const Patient = require("../models/patientModel");

//Function to register a new patient
module.exports.registerPatient = async (req, res, next) => {
  try {
     //Checking if the doctor is authenticated and attached to the request
    if (!req.user) {
        console.log(req.user)
        return res.status(403).json({ success: false, message: "No authenticated doctor found" });
      }
       //Setting the doctor's ID as a property on the patient document to establish the relationship
      req.body.doctor = req.user._id; 
      //Create ing new patient with the request body
    const patient = await Patient.create(req.body);

    res.status(200).json({
      success: true,
      message: "successfully created a patient",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "could not create a patient, internal server error",
    });
  }
};
