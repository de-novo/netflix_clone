import { Router } from "express";
import { EmailDuplicationCheck } from "../middlewares/checkEmail.js";
import { User as userModel } from "../../models/user.js";
import { Counter as CounterModel } from "../../models/counter.js";
const route = Router();

export default (app) => {
    app.use("/", route);

    route.post("/", EmailDuplicationCheck, async (req, res, next) => {
        console.log(req.body);
        const Email = req.body.Email;
        console.log(Email);
        res.status(200).json({
            message: "Singup please",
            isUser: false,
        });
    });

    route.get("/", EmailDuplicationCheck, async (req, res, next) => {
        console.log(req.body);
    });

    route.post("/signup/regform", EmailDuplicationCheck, async (req, res, next) => {
        const counter = await CounterModel.findOne({ name: "userCount" })
        const {password,salt}= await userModel.enCrypto(req.body.password);
 
        const _id = counter.count+1
        

        const signupData = { ...req.body, _id:_id, password:password, data: { checkPrivacy: req.body.checkPrivacy, checkAlram: req.body.checkAlram,salt:salt } };
        delete signupData.checkPrivacy;
        delete signupData.checkAlram;


        console.log(signupData);
        // await userModel.create(signupData);
        await userModel.signUser({Email:signupData.Email},signupData)
        await CounterModel.updateOne({ name: "userCount" }, { $inc: { count: 1 } });

    });
   
    return app;
};
