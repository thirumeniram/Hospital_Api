const mongoose=require("mongoose")



mongoose.connect(
     
  //mongoose key for my database
    "mongodb+srv://thirumeniram25:N295hRIbLHwENLoE@cluster0.0sjd2ml.mongodb.net/"
  );
  
  const db = mongoose.connection;
  
  //If an error occurs, it logs the error message to the console
  db.on("error", (error) => console.error("error in connecting with mongodb:", error));

  //Once the connection is open, it logs a success message to the console
  db.once("open", () => {
    console.log("succesfully connected with mongodb");
  });

  
  
  module.exports = db;




  