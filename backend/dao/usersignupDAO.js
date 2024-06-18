import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectID;

let users;

export default class UserDAO {
  static async injectDB(conn) {
    if (users) {
      return;
    }
    try {
      users = await conn.db('Medical').collection('staff');
    } catch (e) {
      console.error(`Unable to establish collection handles in UserDAO: ${e}`);
    }
  }

  static async addUser(LabreferenceNo, Passcode) {
    try {
      const count = await users.countDocuments();
      const userId = (count + 1).toString().padStart(3, '0');
      const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }); // get current date in ISO format
      const addDoc = {
        userId: userId,
        LabreferenceNo: LabreferenceNo,
        Passcode: Passcode,
        createDate: currentDate,
      };
      return await users.insertOne(addDoc);
    } catch (e) {
      console.error(`Unable to add user: ${e}`);
      return { error: e };
    }
  }

  static async getUserByLabreferenceNo(LabreferenceNo) {
    try {
      return await users.findOne({ LabreferenceNo: LabreferenceNo });
    } catch (e) {
      console.error(`Unable to get user: ${e}`);
      return null;
    }
  }
}
