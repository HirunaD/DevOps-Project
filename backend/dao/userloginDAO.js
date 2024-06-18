import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;

let users;

class LoginDAO {
    static async injectDB(conn) {
        if (users) {
            return;
        }
        try {
            users = await conn.db("Medical").collection("staff");
        } catch (e) {
            console.error(
                `Unable to establish collection handles in LoginDAO: ${e}`
            );
        }
    }

    static async getUserByEmailAndPassword(fullName, contactNumber) {
        try {
            return await users.findOne({ fullName: fullName, contactNumber: contactNumber });
        } catch (e) {
            console.error(`Unable to get user: ${e}`);
            return null;
        }
    }
}

export default LoginDAO;