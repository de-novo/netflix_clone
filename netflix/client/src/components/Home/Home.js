import React, { useContext, useEffect, useState } from "react";
import Nav from "../Atom/Nav";
import { useNavigate } from "react-router-dom";
import Slider from "../api/Slider";
import axios from "axios";
import styled from "styled-components";
import { TokenContext } from "../api/TokenContext";
import EditProfile from "../EditProfile";
import { UserContext } from "../api/UserContext";
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
        position:absolute;
        // height: 5.5rem;
        font-size: 2rem;
    }
    > .trailer {
        display: none;
        overflow: hidden;
        height: 0;
        padding-bottom: 56.25%;
        position: relative;
        > iframe {
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            position: absolute;
        }
    }
    > .overview {
        border: 1px solid black;
        display: none;
        border-radius: 0 0 5px 5px;
    }
    &:hover {
        z-index: 5;

        transform: scale(1.5);
        >h3{
            position:static;
        }
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
    const [trailerURL, setTrailerURL] = useState("");
    const { token, setToken, config } = useContext(TokenContext);
    const [mouseHandler, setMouseHandler] = useState(false);
    //나중에 클래스로 나눠야할듯 MovieService

    const trailer = async () => {
        console.log(props.item.id);
        const trailerconfig = { ...config, params: { id: props.item.id } };

        await axios.get("/api/home", trailerconfig, { ...props.item }).then((res) => {
            if (res.data.trailerURL) {
                console.log(res.data.trailerURL);
                return setTrailerURL(`${res.data.trailerURL}?autoplay=1&mute=1`);
            }
            if (res.data.accessToken) {
                return setToken(res.data.accessToken);
            }
        });
        setMouseHandler(!mouseHandler);
    };

    return (
        <ItemComponent
            onMouseEnter={trailer}
            onMouseLeave={() => {
                setMouseHandler(!mouseHandler);
            }}
        >
            <img className="thumnail" src={`https://image.tmdb.org/t/p/original/${props.item?.backdrop_path}`} alt={props.item?.title}></img>
            <div className="trailer">
                {mouseHandler ? <iframe src={trailerURL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> : null}
            </div>

            <h3>{props.item?.title}</h3>
            <div className="overview">{props.item?.overview}</div>
            {/* {props.index} */}
        </ItemComponent>
    );
};
//로그인 확인
function Home() {
    const [editProfile, setEditProfile] = useState(false);
    const [movieList, setMovieList] = useState();
    const [movieGenreList, setMovieGenreList] = useState();
    const { token, setToken, config } = useContext(TokenContext);
    const { nowUser } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(token);
        if (!token) {
            navigate("/");
        }
    }, [token, navigate]);

    useEffect(() => {
        axios.get("/api/home", config).then((res) => {
            console.log(res.data);
            if (res.data.accessToken) {
                localStorage.setItem("ACCESS_TOKEN", JSON.stringify(res.data.accessToken));
            }
            if (res.data.movieList) {
                setMovieList(res.data.movieList);
            }
            if (res.data.movieGenre) {
                setMovieGenreList(res.data.movieGenre);
            }
        });
    }, [config]);
    const slideSetting = {
        
        viewCount: 5,
        delay: 500,
        containerStyle: {
            margin: '2rem 0',
            backgroundColor: "black",
            height: "auto",
            padding: "0 clamp(0px, 4%, 7rem)",
        },
        itemStyle: {
            borderRadius: "2px",
            padding: "0 0.8rem",
        },
        dot:false,
        passNum: 5,
        Component: Item,
    };
    const title = [`${nowUser?.name} 님이 시청 중인 콘텐츠`,`${nowUser?.name} 님이 좋아할만한 영화`,'인기있는 콘텐츠',`상영중인 영화`,`죽기전에 한번은 봐야하는 영화`]
    return (
        <div>
            {editProfile ? <EditProfile setEditProfile={setEditProfile}></EditProfile> : null}
            <Nav setEditProfile={setEditProfile}></Nav>
            {movieList?.map((item, index) => {
               return <div className="movie-container ">
                    <h2>{title[index]}</h2>
                    <Slider {...slideSetting} target={item}></Slider>
                </div>;
            })}
        </div>
    );
}

export default Home;
