import config from "../../config";
import jwt from 'jsonwebtoken';
import { User as userModel} from "../../models/user";





const getUserIdByAccessToken =(req,res,next)=>{
    let userEmail = ''
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        let token = req.headers.authorization.split(' ')[1];
        try{
            const decodedUser = await jwt.verify(token,config.ACCESS_TOKEN_SECRET);
            const user = await userModel.findOne({Email:decodedUser.Email});
            if(user){
                userEmail = user.Email;
            }
        }catch{}
        
    }
    req.user = {
        Email:userEmail
    }
    next();
}




export {getUserIdByAccessToken};