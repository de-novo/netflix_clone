import { Router } from 'express';
import login from './routes/login.js'
import signup from './routes/signup.js';
import home from './routes/home.js';
export default () => {
    const app = Router();
    signup(app)
    login(app)
    home(app)

    return app;
}

