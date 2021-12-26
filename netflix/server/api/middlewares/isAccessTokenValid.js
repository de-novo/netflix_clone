import config from "../../config";
import jwt from 'jsonwebtoken';
import { User as userModel } from "../../models/user.js";



const isAccessTokenVali= async(req,res,next)=>{
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        let token = req.headers.authorization.split(' ')[1];
        
        
    }



}