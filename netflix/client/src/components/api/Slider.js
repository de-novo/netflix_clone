import React from "react";
import useSlide from "./useSlide";
import PropTypes from "prop-types";
import styled from "styled-components";

const SliderContainer = styled.div`
    ${(props) => props?.style}

    position : relative;
    &:hover {
        z-index: 4;
    }
`;
const SliderBox = styled.div`
    transition: ${(props) => (props.slideitem.className === "current" ? "none" : `all ${props.delay / 1000}s`)};
    transform: ${(props) =>
        props.slideitem.className === "current" ? `translateX(0%)` : props.slideitem.className === "active-prev" ? `translateX(${props.MOVE_LENGTH}%)` : `translateX(${-props.MOVE_LENGTH}%)`};
`;

const Slide = styled.div`
    ${(props) => props?.style}
    position : relative;
    width: ${(props) => props?.SLIDER_WIDTH}%;
    left: 50%;
    transform: translateX(-50%);
`;

const SlideItem = styled.div`
    ${(props) => props?.style};
    width: ${(props) => props?.ITEM_WIDTH}%;
    display: inline-block;
`;

const ButtonStyle = styled.button`
    ${(props) => props?.style};
`;

// setting , style , List ,count
function Slider(props) {
    const { target, viewCount, delay, passNum, containerStyle, itemStyle, buttonStyle, dot, nowDot, otherDot, children, Component } = props;

    // console.log(props);
    const slideitem = useSlide(target, viewCount, passNum, delay);
    // console.log(slideitem);

    const COUNT = slideitem.nowlist.length;

    const SLIDER_WIDTH = (100 / viewCount) * COUNT; // 슬라이드아이템 담을 크기

    const ITEM_WIDTH = 100 / COUNT; // 아이템 개당 넓이계산

    const MOVE_LENGTH = (100 / viewCount) * passNum; //몇개 넘길건가에 대한 계산

    //패딩주면 반쪼가리 가능

    // console.log(children)
    const SLIDER_STYLE = {
        position: "relative",

        width: `${SLIDER_WIDTH}%`,
        left: " 50%",
        transform: "translateX(-50%)",
    };

    const DOT_BOX_STYLE = {
        textAlign: "center",
        fontSize: "1.6rem",
        margin: "0.8rem",
    };
    // + slideitem.className
    return (
        <SliderContainer className="slider-container" style={containerStyle}>
            <SliderBox className={"slider-box " + slideitem.className} slideitem={slideitem} delay={delay} MOVE_LENGTH={MOVE_LENGTH}>
                <Slide className={"slider "} SLIDER_WIDTH={SLIDER_WIDTH}>
                    {slideitem.nowlist.map((item, index) => {
                        const noPaddingClassName = viewCount >= index ? "prev-item" : index > 2 * viewCount ? "next-item" : "current-item";
                        const paddingClassName = viewCount > index ? "prev-item" : index > 2 * viewCount + 1 ? "next-item" : "current-item";
                        return (
                            <SlideItem className={`slide-item ${containerStyle.padding ? paddingClassName : noPaddingClassName}`} style={itemStyle} ITEM_WIDTH={ITEM_WIDTH} key={index}>
                                <Component item={item} index={index}></Component>
                            </SlideItem>
                        );
                    })}
                </Slide>
            </SliderBox>
            <ButtonStyle onClick={slideitem.nextButton} style={{ ...buttonStyle, right: "0" }}></ButtonStyle>
            <ButtonStyle onClick={slideitem.prevButton} style={{ ...buttonStyle, left: "0" }}></ButtonStyle>
            <div style={DOT_BOX_STYLE}>
                <ul style={{ display: "flex", justifyContent: "center" }}>
                    {slideitem.dot?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </SliderContainer>
    );
}

Slider.defaultProps = {
    target: ["array"],
    viewCount: 1,
    delay: 5000,
    passNum: 1,

    slideStyle: {
        position: "relative",
        backgroundColor: "transparent",
        width: "100%",
        height: "auto",
        margin: "auto",
        overflow: "hidden",
    },
    itemStyle: {
        backgroundColor: "transparent",
        width: "auto",
        height: "auto",
        padding: "auto",
        margin: "auto",
    },
    buttonStyle: {
        position: "absolute",
        height: "100%",
        width: "5%",
        top: "0",
        backgroundColor: "transparent",
        outline: "none",
        border: "none",
    },

    dot: false,
    nowDot: "●",
    otherDot: "○",

    Component: () => {
        return <div></div>;
    },
};

Slider.prototype = {
    target: PropTypes.arrayOf(PropTypes.object),
    viewCount: PropTypes.number,
    delay: PropTypes.number,
    passNum: PropTypes.number,
    slideStyle: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        margin: PropTypes.string,
        padding: PropTypes.string,
        backgroundColor: PropTypes.string,
    }),
    itemStyle: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        margin: PropTypes.string,
        padding: PropTypes.string,
        backgroundColor: PropTypes.string,
    }),
    dot: PropTypes.bool,
};

export default Slider;
