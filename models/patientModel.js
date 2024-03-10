const mongoose = require("mongoose");

//report schema with status and date
const reportSchema = new mongoose.Schema({
    status: {
      type: String,
      required: true,
      enum: ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"],
    },
    date: {
      type: Date,
      required: true,
    },
  }, { timestamps: true }); 
  
  //patient schema with name,phonenumber ,report and doctor
  const patientSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    
     
    },
    reports: [reportSchema], 
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
  }, { timestamps: true }); 
  
  

const Patient = new mongoose.model("Patient", patientSchema);

module.exports = Patient;


