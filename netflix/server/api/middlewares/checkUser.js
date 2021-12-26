import { User } from "../../models/user.js";
import mongoose from "mongoose";

const checkUser = async (req, res, next) => {
    let Email = req.query.Email || req.body.Email;

    if (!Email) {
        throw new CustomError("NotFoundError", 404, "User not found");
    }
    const user = await User.findOne({ Email: Email });
    if (user) {
        return next();
    }
    return res.status(200).json({
        memmage:'pleas signup',
        isUser:false
    });
};

export { checkUser };
