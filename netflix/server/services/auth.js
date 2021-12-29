import config from "../config/index.js";
// import { CustomError } from "../CustomError.js";
import jwt from 'jsonwebtoken';

export class AuthService {

    constructor({ userModel }) {
        this.userModel = userModel;
    }

    // 로그인 시 사용자 정보 조회 후 token 생성
    async SingIn(userEmail){
        const user =  await this.userModel.findOne({Email:userEmail});
        if(!user){
            throw new Error 
        }
        
        const _id = user._id;
        const Email = user.Email;

    // 보내줄 정보 추가 ex) 관심있는 언어/ 프로필이미지주소 /  닉네임 등



        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();
        console.log(accessToken)
        return { _id,Email,accessToken,refreshToken}

    }
    async reissueAccessToken(refreshToken){
        let decodeSuccess = true;
        let decodeRfreshToken = ''
        try {
            decodeRfreshToken = await jwt.verify(refreshToken,config.REFRESH_TOKEN_SECRET);
            const user = await this.userModel.findOne({Email:decodeRfreshToken.Email});
            if(!user){
                throw new Error
            }
            const { _id, Email, } = user;
            const  accessToken = await user.generateAccessToken();
            return {decodeSuccess, _id,Email,accessToken}



        }catch(err){
            decodeSuccess = false;
            return{decodeSuccess};

        }

    }
    

};

    


