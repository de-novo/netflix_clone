import React, { useRef, useState } from "react";
import Nav from "./Atom/Nav";
import useSlide from "./api/useSlide";

import Slider from "./api/Slider";

const Item = (props) => {
    return (
        <div>
            {props.item?.id}
            <br />
            {props?.index}
            {/* {props.index} */}
        </div>
    );
};

const movieList = [
    {
        id: 1,
        name: "1",
        img: "gdgd",
    },
    {
        id: 2,
        name: "2",
        img: "gdgd",
    },
    {
        id: 3,
        name: "3",
        img: "gdgd",
    },
    {
        id: 4,
        name: "4",
        img: "gdgd",
    },
    {
        id: 5,
        name: "5",
        img: "gdgd",
    },
    {
        id: 6,
        name: "6",
        img: "gdgd",
    },
    {
        id: 7,
        name: "7",
        img: "gdgd",
    },
    {
        id: 8,
        name: "8",
        img: "gdgd",
    },
    {
        id: 9,
        name: "9",
        img: "gdgd",
    },
    {
        id: 10,
        name: "10",
        img: "gdgd",
    },
    {
        id: 11,
        name: "11",
        img: "gdgd",
    },
    {
        id: 12,
        name: "12",
        img: "gdgd",
    },
    {
        id: 13,
        name: "13",
        img: "gdgd",
    },
    {
        id: 14,
        name: "14",
        img: "gdgd",
    },
    {
        id: 15,
        name: "15",
        img: "gdgd",
    },
    {
        id: 16,
        name: "16",
        img: "gdgd",
    },
    {
        id: 17,
        name: "17",
        img: "gdgd",
    },
    {
        id: 18,
        name: "18",
        img: "gdgd",
    },
];

function Home() {

    const slideSetting = {
        target: movieList,
        viewCount: 7,
        delay: 500,
        containerStyle: {
            backgroundColor: "black",
            height: "auto",
        },
        passNum: 4,
        Component: Item,
    };

    return (
        <div>
            <Nav></Nav>
            <div className="movie-container">
                <h2>박깉애 님이 시청 중인 콘첸츠</h2>
                <Slider {...slideSetting}></Slider>
            </div>

            {/* <Slider {...slideSetting} /> */}
        </div>
    );
}

export default Home;
