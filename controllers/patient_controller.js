const Patient = require("../models/patientModel");

module.exports.registerPatient = async (req, res, next) => {
  try {
    if (!req.user) {
        console.log(req.user)
        return res.status(403).json({ success: false, message: "No authenticated doctor found" });
      }
      req.body.doctor = req.user._id; 
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
