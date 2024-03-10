# Hospital_Api

This project is a Hospital API for the doctors of a Hospital which has been allocated for testing and quarantine + well being of COVID-19 patients

# Installation

To run this application on your local machine, please follow these steps:

Clone this repository using the following command: https://github.com/thirumeniram/Hospital_Api.git

Install the required dependencies using the following command: $ npm install

Start the application using the following command: $ npm  tart

Open the application in your postman app by visiting the following URL: http://localhost:8000

# Features:

There can be 2 types of Users

- **Doctors**
- **Patients**

- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps:-
  
 - Registering the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
 - After the checkup, create a Report

-Patient Report will have the following fields

- Status - Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]
- Date- the date of report creation


# Routes:

- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status
