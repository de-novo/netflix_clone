import config from "./config/index.js";
import express from "express";
import logger from "./loaders/logger.js";
import loaders from "./loaders/index.js";
import crypto from "crypto";
import { request } from "https";
import axios from "axios";
import { MovieService } from "./services/movie.js";
import { User as userModel } from "./models/user.js";

const app = express();

loaders(app);


const movie = new MovieService()
// const {movieGenreList,genreList}= await movie.getMovieGenresList()
// console.log(movieGenreList)
// const {trailerURL} = await movie.getMovieTrailer(903303)
// console.log(trailerURL)

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
