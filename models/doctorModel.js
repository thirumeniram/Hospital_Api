const mongoose = require("mongoose");

//Doctors's schema with name and password
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    
  },

});

const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;

