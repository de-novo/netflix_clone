import { User } from "../../models/user.js";
import mongoose from "mongoose";

const checkUser = async (req, res, next) => {
    let Email = req.query.Email || req.body.Email;
    console.log("checkUser", Email);
    if (!Email) {
        throw new CustomError("NotFoundError", 404, "User not found");
    }
    const user = await User.findOne({ Email: Email });
    if (user) {
        console.log("user", user);
        req.data = {
            isUser: true,
            message: "plz Login",
        };
    } else if (!user) {
        console.log("!user", user);
        return res.status(200).json({
            message: "plz signup",
            isUser: false,
        });
    }
    next();
};

export { checkUser };
