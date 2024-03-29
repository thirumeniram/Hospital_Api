# Hospital_Api

This project is a Hospital API for the doctors of a Hospital which has been allocated for testing and quarantine + well being of COVID-19 patients

# Installation

To run this application on your local machine, please follow these steps:

Clone this repository : https://github.com/thirumeniram/Hospital_Api.git

Install the required dependencies using the following command: $ npm install

Start the application using the following command: $ npm  start

Open the application in your postman app by visiting the following URL: http://localhost:8000

# Features:

- There can be 2 types of Users
  - **Doctors**
  - **Patients**


- Each time a patient visits, the doctor will follow 2 steps:

  - Registering the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
  - After the checkup, creating a Report

- Patient Report will have the following fields
  
  - Status - Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]
  - Date- the date of report creation

- All the reports of a Individual patient

- All the report for a particuler status it can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]


# Routes:

 - /doctors/register           - for registering a doctor
 - /doctors/login              - for logging a doctor
 - /patients/register          - for registering a patient
 - /patients/:id/create_report - for creating a report for a patient
 - /patients/:id/all_reports   - for getting all the reports of a individual patient
 - /reports/:status            - for all the reports for a particular status
