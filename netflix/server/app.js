import config from "./config/index.js";
import express from "express";
import logger from "./loaders/logger.js";
import loaders from "./loaders/index.js";
import crypto from "crypto";

import { User as userModel } from "./models/user.js";

const app = express();

loaders(app);

// crypto.randomBytes(64, (err, buf) => {
//   crypto.pbkdf2('NETFLIX', buf.toString('base64'), 100000, 64, 'sha512', (err, key) => {
//     console.log(key.toString('base64'));
//   });
// });

// crypto.pbkdf2('입력비밀번호', '기존salt', 100000, 64, 'sha512', (err, key) => {
//   console.log(key.toString('base64'));
// });

// let user=await userModel.findOne({ password: '0' })
// await userModel.findOneAndUpdate({ password: '0' },{ password: 'pjs6616'} )
// console.log(user);



const server = app
    .listen(config.port, () => {
        logger.info(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️
    ################################################
  `);
    })
    .on("error", (err) => {
        logger.error(err);
        process.exit(1);
    });

export { server };
