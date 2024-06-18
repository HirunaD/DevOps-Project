import express from 'express';
import PatientCtrl from './patient.controller.js';

const router = express.Router();

router.route('/').post(PatientCtrl.addPatient);

router.route('/').get(PatientCtrl.getAllPatients);

router.route('/:id').delete(PatientCtrl.deletePatient);

router.route('/:id').put(PatientCtrl.updatePatient);

export default router;
