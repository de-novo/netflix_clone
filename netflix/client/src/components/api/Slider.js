import React from "react";
import useSlide from "./useSlide";
import PropTypes from "prop-types";
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
    const CONTAINER_STYLE = {
        ...containerStyle,
        position: "relative",
        overflow: "hidden",
        // height : 'auto'
        // padding:' 0 15rem'
    };

    // console.log(children)
    const SLIDER_STYLE = {
        position: "relative",
     
        width: `${SLIDER_WIDTH}%`,
        left: " 50%",
        transform: "translateX(-50%)",
    };

    const ITEM_STYLE = {
        ...itemStyle,
        width: `${ITEM_WIDTH}%`, 
        border: "1px solid white",
        display: "inline-block",
    };

    const BUTTON_STYLE = {
        ...buttonStyle,
    };

    const ANIMATION_STYLE = {
        transition: slideitem.className === "current" ? "none" : `all ${delay / 1000}s`,
        transform: slideitem.className === "current" ? `translateX(0%)` : slideitem.className === "active-prev" ? `translateX(${MOVE_LENGTH}%)` : `translateX(${-MOVE_LENGTH}%)`,
    };

    const DOT_BOX_STYLE = {
        textAlign: "center",
        fontSize: "1.6rem",
        margin: "0.8rem",
    };
    // + slideitem.className
    return (
        <div className="slider-container" style={CONTAINER_STYLE}>
            <div className={"slider-box " + slideitem.className} style={{ ...ANIMATION_STYLE }}>
                <div className={"slider "} style={{ ...SLIDER_STYLE }}>
                    {slideitem.nowlist.map((item, index) => {
                        const noPaddingClassName = viewCount >= index ? "prev-item" : index > 2 * viewCount ? "next-item" : "current-item";
                        const paddingClassName = viewCount > index ? "prev-item" : index > 2 * viewCount + 1 ? "next-item" : "current-item";
                        return (
                            <div className={`slide-item ${CONTAINER_STYLE.padding ? paddingClassName : noPaddingClassName}`} style={{ ...ITEM_STYLE }}>
                                <Component item={item} index={index}></Component>
                            </div>
                        );
                    })}
                </div>
            </div>
            <button onClick={slideitem.nextButton} style={{ ...BUTTON_STYLE, right: "0" }}></button>
            <button onClick={slideitem.prevButton} style={{ ...BUTTON_STYLE, left: "0" }}></button>
            <div style={DOT_BOX_STYLE}><ul style={{display:'flex',justifyContent:'center'}}>{slideitem.dot?.map((item,index)=><li>{item}</li>)}</ul></div>
        </div>
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
