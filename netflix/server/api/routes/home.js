import { Router } from "express";

import { User as userModel } from "../../models/user.js";
import { AuthService } from "../../services/auth.js";
import { checkUser } from "../middlewares/checkUser.js";
import { UserService } from "../../services/user.js";
import { isAccessTokenValid } from "../middlewares/isAccessTokenValid.js";
import { isReissueAccessToken } from "../middlewares/isReissueAccessToken.js";

import { MovieService } from "../../services/movie.js";
const route = Router();
export default (app) => {
    app.use("/home", route);
    route.use(isAccessTokenValid);
    route.use(isReissueAccessToken);
    route.get("/", async (req, res, next) => {
        console.log(req.query)
        if (req.query.id) {
            // console.log(req.query);
            const MovieServiceInstance = new MovieService();
            const { trailerURL } = await MovieServiceInstance.getMovieTrailer(req.query.id);
            return res.status(200).json({
                trailerURL,
            });
        }

        const MovieServiceInstance = new MovieService();

        const { movieGenreList } = await MovieServiceInstance.getMovieGenresList();
        await MovieServiceInstance.getMovieList(1);
        await MovieServiceInstance.getMovieList(2);
        await MovieServiceInstance.getMovieList(3);
        await MovieServiceInstance.getMovieList(4);
        await MovieServiceInstance.getMovieList(5);
        res.status(200).json({
            movieGenreList,
            movieList: MovieServiceInstance.movieList,
        });

        //최신영화

        //극장상영중 영화

        //장르별 추천영
    });

    route.get("/user", async (req, res) => {
        
        let UserServiceInstance = new UserService({ userModel });

        const user = await UserServiceInstance.findById(req.user._id);
        // console.log(user)
        res.status(200).json({
           profile:user.profile
        });
    });
    route.post("/user", async (req, res) => {


        const profileData = req.body.profile;
        let UserServiceInstance = new UserService({ userModel });
        console.log(req.body)
        await UserServiceInstance.modifyUser({ _id: req.user._id }, { $set: { profile: profileData } });
        res.status(200).json({
            message: "gd",
        });
    });

    return app;
};
