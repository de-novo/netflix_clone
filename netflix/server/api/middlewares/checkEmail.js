import { User } from "../../models/user.js";

const EmailDuplicationCheck = async (req, res, next) => {
    let Email = req.query.Email || req.body.Email;
    if (Email) {
        const user = await User.findOne({ Email: Email });
        if (user) {
            return res.status(200).json({
                message: "Login Please",
                isUser: true,
            });
        }
    }
    next();
};


export {EmailDuplicationCheck}