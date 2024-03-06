const mongoose=require("mongoose")

mongoose.connect(
    "mongodb+srv://thirumeniram25:N295hRIbLHwENLoE@cluster0.0sjd2ml.mongodb.net/"
  );
  
  const db = mongoose.connection;
  
  db.on("error", (error) => console.error("error in connecting with mongodb:", error));

  db.once("open", () => {
    console.log("succesfully connected with mongodb");
  });

  
  
  module.exports = db;




  