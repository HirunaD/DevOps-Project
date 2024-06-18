import { stat } from 'fs';
import PatientDAO from '../dao/patientDAO.js';

export default class PatientController {
  static async addPatient(req, res, next) {
    try {
      const {
        fullName,
        date,
        gender,
        address,
        contactNumber,
        nameOfLabTest,
        symptoms,
      } = req.body;

      const result = await PatientDAO.addPatient(
        fullName,
        date,
        gender,
        address,
        contactNumber,
        nameOfLabTest,
        symptoms
      );

      res.json({ status: 'success', result });
    } catch (e) {
      console.log(`error, ${e}`);
      res.status(500).json({ error: e.message });
    }
  }

  //get all patients
  static async getAllPatients(req, res, next) {
    try {
      const patients = await PatientDAO.getAllPatients();
      res.json({ status: 'success', patients });
    } catch (e) {
      console.error(`Error: ${e.message}`);
      res.status(500).json({ error: e.message });
    }
  }

  // Delete a patient
  static async deletePatient(req, res, next) {
    try {
      const patientId = req.params.id;
      const result = await PatientDAO.deletePatient(patientId);
      res.json({ status: 'success', result });
    } catch (e) {
      console.error(`Error: ${e.message}`);
      res.status(500).json({ error: e.message });
    }
  }

  // Update a patient


  static async updatePatient(req, res, next) {
    try {
      const patientId = req.params.id;
      const updatedPatientData = req.body; // Assuming you send the updated patient data in the request body
  
      const result = await PatientDAO.updatePatient(patientId, updatedPatientData);
  
      if (result.error) {
        res.status(404).json({ error: 'Patient not found or no changes made' });
      } else {
        res.json({ status: 'success', result });
      }
    } catch (e) {
      console.error(`Error: ${e.message}`);
      res.status(500).json({ error: e.message });
    }
  }
  









}
