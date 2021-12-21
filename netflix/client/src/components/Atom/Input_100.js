import React from "react";
import "./Input_100.css";
function Input_100(props) {
    const attr = {
        ...props.attr
    };
    const inputStyle = {
        ...props.inputStyle
    }
    const labelStyle={
        ...props.labelStyle
    }




    return (
        <div className="login-form-input">
            <input {...attr} required="required" style={inputStyle} onChange={props.onChange} value={props.inputs?props.inputs[attr.name]:""}></input>
            <label className="medium" style={labelStyle}>{props.label}</label>
        </div>
    );
}

export default Input_100;
