import { Router } from "express";

import { User as userModel } from "../../models/user.js";
import { AuthService } from "../../services/auth.js";
import { checkUser } from "../middlewares/checkUser.js";

import { isAccessTokenValid } from "../middlewares/isAccessTokenValid.js";
import { isReissueAccessToken } from "../middlewares/isReissueAccessToken.js";

import { MovieService } from "../../services/movie.js";
const route = Router();
export default (app) => {
    app.use("/home", route);
    route.use(isAccessTokenValid);
    route.use(isReissueAccessToken);
    route.get("/", async (req, res, next) => {
        if(req.query.id){
            console.log(req.query)
            const MovieServiceInstance = new MovieService();
            const {trailerURL} = await MovieServiceInstance.getMovieTrailer(req.query.id)
            return res.status(200).json({
                trailerURL
            })




        }
      
        const MovieServiceInstance = new MovieService();

        const { movieGenreList } = await MovieServiceInstance.getMovieGenresList();
        await MovieServiceInstance.getMovieList(1)
        res.status(200).json({
            movieGenreList,
            movieList:MovieServiceInstance.movieList,
        })
        

        //최신영화

        //극장상영중 영화

        //장르별 추천영화
    });

    route.post("/", async (req, res) => {});

    return app;
};
