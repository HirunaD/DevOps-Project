import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectID;

let patients;

export default class PatientDAO {
  static async injectDB(conn) {
    if (patients) {
      return;
    }
    try {
      patients = await conn.db('Medical').collection('patient');
    } catch (e) {
      console.error(
        `Unable to establish collection handles in PatientDAO: ${e}`
      );
    }
  }

  static async addPatient(
    fullName,
    date,
    gender,
    address,
    contactNumber,
    nameOfLabTest,
    symptoms
  ) {
    try {
      const lastPatient = await patients.findOne(
        {},
        { sort: { $natural: -1 } }
      );
      const lastPatientNumber = lastPatient
        ? parseInt(lastPatient.patientNumber)
        : 0;
      const patientNumber = lastPatientNumber + 1;

      const addDoc = {
        patientNumber: patientNumber.toString(),
        fullName: fullName,
        gender: gender,
        address: address,
        contactNumber: contactNumber,
        date: date,
        nameOfLabTest: nameOfLabTest,
        symptoms: symptoms,
      };
      return await patients.insertOne(addDoc);
    } catch (e) {
      console.error(`Unable to add patient: ${e}`);
      return { error: e };
    }
  }

  // get all patients
  static async getAllPatients() {
    let cursor;
    try {
      cursor = await patients.find();
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { patientsList: [], totalNumPatients: 0 };
    }

    const displayCursor = cursor.limit(30);

    try {
      const patientsList = await displayCursor.toArray();
      const totalNumPatients = await patients.countDocuments();
      return { patientsList, totalNumPatients };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { patientsList: [], totalNumPatients: 0 };
    }
  }

  //delete patient
  static async deletePatient(patientId) {
    try {
      const deleteResponse = await patients.deleteOne({
        _id: ObjectId(patientId),
      });

      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete patient: ${e}`);
      return { error: e };
    }
  }

  //update patient

  static async updatePatient(patientId, updatedPatientData) {
    try {
      const updateResponse = await patients.updateOne(
        { _id: ObjectId(patientId) },
        { $set: updatedPatientData }
      );

      if (updateResponse.modifiedCount === 0) {
        return { error: 'Patient not found or no changes made' };
      }

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update patient: ${e}`);
      return { error: e };
    }
  }
}
