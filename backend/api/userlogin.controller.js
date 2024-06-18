import LoginDAO from "../dao/userloginDAO.js";

export async function loginu(req, res) {
    const { fullName,contactNumber } = req.body;

    try {
        const user = await LoginDAO.getUserByEmailAndPassword(  fullName,contactNumber);
        if (user) {
            res.status(200).json({
                id: user.id,
                fullName: user.fullName,
                contactNumber: user.contactNumber,
                
                
               
            });
        } else {
            res.status(401).json({
                message: "Invalid User Name or contactNumber ",
            });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({
            message: "An error occurred while logging in",
        });
    }
}
