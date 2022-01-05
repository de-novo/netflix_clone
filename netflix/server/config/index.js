import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

// const envFound = dotenv.config();
// if (envFound.error) {
//     throw new Error("Couldn't find .env file");
// }
export default {
    port: process.env.PORT || 8080,
    // mongoDB URL
    DB_URL: process.env.DB_URL,
    MOVIEAPI: process.env.myAPI,

    api: {
        prefix: "/api",
    },
    /* Used by winston logger */
    logs: {
        level: process.env.LOG_LEVEL || "silly",
    },

    // JWT secret
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
};
