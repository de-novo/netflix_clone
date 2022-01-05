import dbLoader from "./db.js";
import expressLoader from "./express.js";
import errorHandler from "./errorHandler.js";
import logger from "./logger.js";
export default (app) => {
    
    dbLoader(app);
    logger.info("✌️ MongoDB Connected");
    expressLoader(app);
    errorHandler(app);
    logger.info("✌️ Express loaded");
};
