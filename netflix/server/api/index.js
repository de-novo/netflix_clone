import { Router } from 'express';
import login from './routes/login.js'
import signup from './routes/signup.js';
export default () => {
    const app = Router();
    signup(app)
    login(app)

    return app;
}

