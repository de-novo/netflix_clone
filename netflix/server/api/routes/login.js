import { Router } from 'express';

const route = Router();
export default (app)=>{
    app.use('/login',route)

    route.post('/',(req,res)=>{
        console.log(req.body)
    })


    
}