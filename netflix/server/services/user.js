import config from "../config/index.js";
// import { CustomError } from "../CustomError.js";
import jwt from "jsonwebtoken";

export class UserService {
    constructor({ userModel }) {
        this.userModel = userModel;
    }

    async modifyUser(conditions, user) {
        const userRecord = await this.userModel.modifyUser(conditions, user);
        const accessToken = await userRecord.generateAccessToken();
        const refreshToken = await userRecord.generateRefreshToken();

        
        console.log("userRecord:", userRecord);
        console.log("accessToken:", accessToken);
        console.log("refreshToken:", refreshToken);
        return { userRecord, accessToken, refreshToken };
    }
    async findByNickName(nickName) {
        const users = await this.userModel.findByNickName(nickName);
        return users;
    }

    async findById(id) {
        const users = await this.userModel.findById(id);
        return users;
    }
}
