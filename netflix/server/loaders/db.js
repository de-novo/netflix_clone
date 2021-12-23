import config from "../config/index.js";
import mongoose from "mongoose";

export default (app) => {
    // configure mongoose(MongoDB)
    if (process.env.NODE_ENV !== "test") {
        const connection = mongoose.connect(config.DB_URL);
    }
    // console.log(config);
};

// module.exports = () => {
//     const connect = () => {
//         mongoose.connect(MongodbUrl, (err) => {
//             if (err) {
//                 console.error("mongodb connection error", err);
//             }
//             console.log("MongoDB connected");
//         });
//     };
//     connect();
//     mongoose.connection.on('disconnected', connect);
//     require('../models/user')
//     require('../models/counter')
// };
