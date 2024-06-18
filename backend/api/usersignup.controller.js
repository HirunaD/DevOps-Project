import UserDAO from "../dao/usersignupDAO.js";

export default class SignupController {
    static async apiSignup(req, res, next) {
        try {
            const { LabreferenceNo, Passcode} =
                req.body;
            const existingUser = await UserDAO.getUserByEmail(LabreferenceNo);
            if (existingUser) {
                throw new Error("Email already exists");
            }
            const result = await UserDAO.addUser(
                LabreferenceNo ,
                Passcode 
            );
            if (result.error) {
                throw new Error(result.error);
            }
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
