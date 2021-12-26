import { Router } from "express";
import { EmailDuplicationCheck } from "../middlewares/checkEmail.js";
import { User as userModel } from "../../models/user.js";
import { AuthService } from "../../services/auth.js";
import config from "../../config/index.js";
import { checkUser } from "../middlewares/checkUser.js";
const route = Router();
export default (app) => {
    app.use("/login", route);

    route.post("/",checkUser, async (req, res) => {
        const Email = req.body.Email;
        const user = await userModel.findOne({ Email: Email });
        const { isLogin } = await userModel.deCrypto(req.body.password, user.password, user.data.salt);

        //jwt 토큰만들어서 방출
        if (isLogin) {
            let UserServiceInstance = new AuthService({ userModel });
            const { accessToken, refreshToken } = await UserServiceInstance.SingIn(Email);
            console.log(UserServiceInstance)
            res.cookie("R_AUTH", refreshToken, {
                sameSite: "none",
                httpOnly: true,
                secure: true,
                maxAge: 1000 * 60 * 60 * 24 * 14, // 2 Week
            });
            res.status(201).json({
                Email: Email,
                accessToken: accessToken,
                message: `sussece Login`,
                isLogin: isLogin,
            });
        } else {
            res.status(203).json({
                message: `password is wrong `,
                isLogin: isLogin,
            });
        }
    });

    return app;
};
