import config from "../config";
import { CustomError } from "../CustomError.js";

export class UserService {
    constructor({ userModel }) {
        this.userModel = userModel;
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
