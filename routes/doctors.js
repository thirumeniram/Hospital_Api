const express= require('express');
const router = express.Router();


const {registerDoctor} = require("../controllers/doctor_controller");

const {login }=require("../controllers/doctor_controller")




//Route for registering a new doctor. When a POST request is made , the registerDoctor function from doctorController is called.
router.post('/register', registerDoctor); 

//Route for doctor login. When a POST request is made', the login function from doctorController is called.
router.post('/login', login); 


module.exports = router;


  


