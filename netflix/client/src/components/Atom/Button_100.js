import React from "react";
import { Link } from "react-router-dom";

function Button_100(props) {
    const path = props.to? props.to : '/'
    const className = props.className ? props.className : "medium"
    const style = {
        color: "white",
        marginTop: "2.8rem",
        borderRadius: "2px",
        width: "100%",
        padding: "1.4rem",
        backgroundColor: "#e50914",
        border: "none",
        outline: "none",
        marginBottom: "1.2rem",
        ...props.style
    };
    return (
        <div>
            <button className={className} style={style}><Link to={path}>{props.content}</Link></button>
        </div>
    );
}

export default Button_100;
