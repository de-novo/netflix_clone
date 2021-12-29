import React, { useEffect, useState } from "react";
import Nav from "../Atom/Nav";

import Slider from "../api/Slider";
import axios from "axios";
const Item = (props) => {
    return (
        <div>
            <img style={{ borderRadius:'5px',}} src={`https://image.tmdb.org/t/p/original/${props.item?.backdrop_path}`}></img>
            <h3>{props.item?.title}</h3>
            <br />
            {/* {props.item?.overview} */}
            {/* {props.index} */}
        </div>
    );
};

function Home() {
    const config = {
        headers: {
            authorization: `Bearer ${JSON.parse(localStorage.getItem("ACCESS_TOKEN"))}`,
        },
    };
    const [movieList, setMovieList] = useState();
    const [movieGenreList, setMovieGenreList] = useState();
    useEffect(() => {
        console.log(config.headers);
        axios.get("/api/home", config).then((res) => {
            console.log(res.data);
            if (res.data.accessToken) {
                localStorage.setItem("ACCESS_TOKEN", JSON.stringify(res.data.accessToken));
            }
            if (res.data.movieList) {
                setMovieList(res.data.movieList);
            }
            if (res.data.movieGenre) {
                setMovieGenreList(movieGenreList);
            }
        });
    }, []);
    const slideSetting = {
        target: movieList,
        viewCount: 5,
        delay: 500,
        containerStyle: {
            backgroundColor: "black",
            height: "auto",
            padding: "0 clamp(0px, 4%, 7rem)",
        },
        itemStyle: {
            borderRadius:'2px',
            padding: "0 0.8rem",
            "&:hover": {
                transform: "transform: translateY(-50%);",
            },
        },
        passNum: 5,
        Component: Item,
    };

    return (
        <div>
            <Nav></Nav>
            <div className="movie-container">
                <h2>박깉애 님이 시청 중인 콘첸츠</h2>
                <Slider {...slideSetting}></Slider>
            </div>
        </div>
    );
}

export default Home;
