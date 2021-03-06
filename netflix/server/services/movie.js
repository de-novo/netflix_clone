import config from "../config/index.js";
import axios from "axios";
export class MovieService {
    constructor() {
        this.movieList = [];
    }

    async getMovieGenresList() {
        const get = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${config.MOVIEAPI}&language=ko-KR`);
        const movieGenreList = get.data.genres;
        return { movieGenreList };
    }
    async getMovieList(num = 1) {
        const get = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${config.MOVIEAPI}&language=ko-KR&page=${num}`);
        const movieList = get.data.results;
        this.movieList = [...this.movieList, movieList];

        return;
    }

    async getMovieTrailer(movidId) {
        const get = await axios.get(`https://api.themoviedb.org/3/movie/${movidId}/videos?api_key=${config.MOVIEAPI}`);
        const result = get.data.results[0];
       
        let trailerURL;
       
        switch (result?.site) {
            case "YouTube": {
                trailerURL = `https://www.youtube.com/embed/${result.key}`;
                break;
            }
            case "Vimeo": {
                trailerURL = `https://vimeo.com/${result}`;
                break;
            }
            default:
        }
        return { trailerURL };
    }

    async filterMovie(genreID) {
        const filteredMovieList = this.movieList.filter((movie) => {
            return movie.genre_ids.includes(genreID);
        });

        return { filteredMovieList };
    }
}
