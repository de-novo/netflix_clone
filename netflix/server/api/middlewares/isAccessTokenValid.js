import config from "../../config/index.js";
import jwt from "jsonwebtoken";
import { User as userModel } from "../../models/user.js";

const isAccessTokenValid = async (req, res, next) => {
    try {
        console.log('isAccessTokenValid 시도')
        console.log('=======================================')
        console.log('req.headers.authorization:', req.headers.authorization)
        console.log('=======================================')
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            let token = req.headers.authorization.split(" ")[1];
            console.log('isAccessTokenValid token받아오기 : ', token)

            let decodedUser = await jwt.verify(token, config.ACCESS_TOKEN_SECRET);
            console.log('isAccessTokenValid decodedUser : ', decodedUser)
            const user = await userModel.findOne({ Email: decodedUser.Email });

            if (!user) {
                throw new Error();
            } else {
                req.user = {
                    _id: user._id,
                    Email: user.Email,
                };
            }
            next();
        } else {
            throw new Error();
        }
    } catch {
        console.log('AccessToken expire')
        next();
    }
    // if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    //     let token = req.headers.authorization.split(" ")[1];
    //     let decodedUser = await jwt.verify(token, config.ACCESS_TOKEN_SECRET);
    //     const user = await userModel.findOne({ Email: decodedUser.Email });

    //     if (!user) {
    //         throw new Error();
    //     } else {
    //         req.user = {
    //             _id: user._id,
    //             Email: user.Email,
    //         };
    //     }
    //     next();
    // } else {
    //     throw new Error();
    // }
};

export { isAccessTokenValid };
