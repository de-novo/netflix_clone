import React, { Children, useEffect, useState } from "react";
import Nav from "../Atom/Nav";

import Slider from "../api/Slider";
import axios from "axios";
import styled from "styled-components";
const ItemComponent = styled.div`
    z-index: 4;
    position: relative;
    transition: all 0.5s;
    background-color: black;
    border-radius: 5px 5px 0 0;
    > img {
        border-radius: 5px;
    }
    > h3 {
        font-size: 2rem;
    }
    > .trailer {
        width: 100%;
        display: none;
    }
    > .overview {
        border: 1px solid black;
        display: none;
        border-radius: 0 0 5px 5px;
    }
    &:hover {
        z-index: 5;

        transform: scale(1.5);
        float: none;
        > .trailer {
            display: block;
        }
        > .thumnail {
            display: none;
        }
        > .overview {
            display: block;
            background-color: black;
            position: absolute;
        }
    }
`;

const Item = (props) => {
    const [trailerURL, setTrailerURL] = useState();
    const trailer = () => {
        const config = {
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem("ACCESS_TOKEN"))}`,
            },
            params: { ...props.item },
        };

        axios.get("/api/home", config, { ...props.item }).then((res) => {
            if (res.data.trailerURL) {
                console.log(res.data.trailerURL);
                return setTrailerURL(res.data.trailerURL);
            }
            if (res.data.accessToken) {
                return localStorage.setItem("ACCESS_TOKEN", JSON.stringify(res.data.accessToken));
            }
        });
    };

   const Url = ()=>{
        if(!trailerURL){
            return Url
        }

    return `${trailerURL}?autoplay=1&mute=1`
   }

    return (
        <ItemComponent onMouseEnter={trailer}>
            <img className="thumnail" src={`https://image.tmdb.org/t/p/original/${props.item?.backdrop_path}`} alt={props.item?.title}></img>
            <iframe className="trailer" src={Url()} frameborder="0" allow="autoplay" allowfullscreen ng-show="showvideo"   mozallowfullscreen  allowfullscreen ></iframe>
            <h3>{props.item?.title}</h3>
            <div className="overview">{props.item?.overview}</div>
            {/* {props.index} */}
        </ItemComponent>
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
            borderRadius: "2px",
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
            <div className="movie-container ">
                <h2>박깉애 님이 시청 중인 콘첸츠</h2>
                <Slider {...slideSetting}></Slider>
                <h2>박깉애 님이 시청 중인 콘첸츠</h2>
                <Slider {...slideSetting}></Slider> <h2>박깉애 님이 시청 중인 콘첸츠</h2>
                <Slider {...slideSetting}></Slider> <h2>박깉애 님이 시청 중인 콘첸츠</h2>
                <Slider {...slideSetting}></Slider> <h2>박깉애 님이 시청 중인 콘첸츠</h2>
                <Slider {...slideSetting}></Slider>
            </div>
        </div>
    );
}

export default Home;
