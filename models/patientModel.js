const mongoose = require("mongoose");

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
  
  const patientSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number, // Changed to String for reasons mentioned above
      required: true,
    
     
    },
    reports: [reportSchema], // Use the defined reportSchema for reports
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
  }, { timestamps: true }); // Optionally apply timestamps to the entire patient record
  
  

const Patient = new mongoose.model("Patient", patientSchema);

module.exports = Patient;


