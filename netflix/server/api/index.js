import { Router } from 'express';
import login from './routes/login.js'
import signup from './routes/signup.js';
import home from './routes/home.js';
import logout from './routes/logout.js';
export default () => {
    const app = Router();
    signup(app)
    login(app)
    logout(app)
    home(app)

    return app;
}

