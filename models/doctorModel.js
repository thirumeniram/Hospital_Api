const mongoose = require("mongoose");

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

//   customId: {
//     type: String,
//     unique: true,
//     default: () => new Date().getTime().toString() 
//   },