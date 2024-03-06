const express= require('express');
const router = express.Router();


// // ****** Defining Routes ****** //
// router.post('/register', doctorController.register);
// router.post('/login', doctorController.login);


const doctorController = require('../controllers/doctor_controller'); // Update the path as per your project structure

// Defining Routes
router.post('/register', doctorController.registerDoctor); // Use the registerDoctor method for the /register route
router.post('/login', doctorController.login); // Use the login method for the /login route

// A simple GET route for the doctors' welcome page
router.get('/', (req, res) => {
  res.send('Welcome to the Doctors page');
});

module.exports = router;


  


