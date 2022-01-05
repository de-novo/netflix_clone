import { Router } from "express";
import { EmailDuplicationCheck } from "../middlewares/checkEmail.js";
import { User as userModel } from "../../models/user.js";
import { Counter as CounterModel } from "../../models/counter.js";
import { UserService } from "../../services/user.js";
import { AuthService } from "../../services/auth.js";

import {checkUser} from '../middlewares/checkUser.js'

const route = Router();

export default (app) => {
    app.use("/", route);
    // let userData = {};
    global.userData = {};
    route.post("/", EmailDuplicationCheck, async (req, res, next) => {
        console.log(req.body);
        const Email = req.body.Email;
        console.log("global.userData", global.userData, "/", "userData", userData);
        console.log(Email);
        res.status(200).json({
            message: "Singup please",
            isUser: false,
        });
    });

    route.get("/", async (req, res, next) => {
        console.log("global.userData", global.userData, "/", "userData", userData);
        res.send(userData);
    });
    //회원가입 폼
    // route.post("/signup/regform", EmailDuplicationCheck, async (req, res, next) => {
    //     const counter = await CounterModel.findOne({ name: "userCount" });
    //     const { password, salt } = await userModel.enCrypto(req.body.password);
    //     console.log(password, "/", salt);
    //     const _id = counter.count + 1;

    //     const signupData = { ...req.body, _id: _id, password: password, data: { checkPrivacy: req.body.checkPrivacy, checkAlram: req.body.checkAlram, salt: salt } };
    //     delete signupData.checkPrivacy;
    //     delete signupData.checkAlram;

    //     console.log(signupData);
    //     // await userModel.create(signupData);
    //     await userModel.signUser({ Email: signupData.Email }, signupData);
    //     await CounterModel.updateOne({ name: "userCount" }, { $inc: { count: 1 } });

    //     res.status(200).json({
    //         message: "signup success",
    //         isUser: true,
    //         Email: signupData.Email,
    //     });
    // });
    route.post("/signup/regform", EmailDuplicationCheck, async (req, res, next) => {
        console.log(req.body)
        const counter = await CounterModel.findOne({ name: "userCount" });
        const { password, salt } = await userModel.enCrypto(req.body.password);
        console.log(password, "/", salt);
        const _id = counter.count + 1;

        const signupData = { ...req.body, _id: _id, password: password, data: { checkPrivacy: req.body.checkPrivacy, checkAlram: req.body.checkAlram, salt: salt },proflie:[] };
        delete signupData.checkPrivacy;
        delete signupData.checkAlram;
        let UserServiceInstance = new UserService({ userModel });
        
        const { userRecord, accessToken, refreshToken } = await UserServiceInstance.modifyUser({ Email: signupData.Email }, signupData);

        // let AuthServiceInstance = new AuthService({userModel})

 
        // await userModel.create(signupData);
     

        await CounterModel.updateOne({ name: "userCount" }, { $inc: { count: 1 } });

        res.cookie("R_AUTH", refreshToken, {
            sameSite: "none",
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 14, // 2 Week
        });

        res.status(200).json({
            message: "signup success",
            isUser: true,
            Email: userRecord.Email,
            accessToken: accessToken,
        });
    });

    return app;
};
