const Doctor = require("../models/doctorModel");
const jwt = require("jsonwebtoken");

//Function to register a new doctor
module.exports.registerDoctor = async (req, res, next) => {
  try {
    //Create a new doctor using the request body
    const doctor = await Doctor.create(req.body);
    res.status(200).json({
      success: true,
      message: "doctor created successfully",
    });
  } catch (error) {
    let errorMessage = "Could not create a doctor, internal server error";
    // Check for validation error (error code 11000 is for duplicate key)
    // if (error.name === 'ValidationError') 
    // {
    //   errorMessage = "Validation error: " + Object.values(error.errors).map(val => val.message).join(', ');
    // } else if (error.code === 11000) {
    //   errorMessage = "Duplicate field value entered";
    // } else if (error.name === 'MongoServerError') {
    //   errorMessage = "Database error: " + error.message;
    // }
    console.log(error)
    
    res.status(500).json({
        
      success: false,
      message: "could not create a doctor, internal server error",
    });
  }
};

// Function to login a doctor
module.exports.login = async (req, res, next) => {
  try {
     // Find a doctor that matches the request body
    const doctor = await Doctor.findOne(req.body);
    
    if (doctor) {
       // If doctor is found, sign a JWT with the doctor's ID
      const token = jwt.sign({ id: doctor.id },"secret"); 
      res.status(200).json({
        success: true,
        token: token,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Name or Password do not match",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};
