import React, { useState, useEffect } from "react";

import axios from "axios";
function useInput(url, validation,go) {
    const [inputs, setInputs] = useState({});
    // // // // // // // // // // // // // // // // // // // //
    useEffect(() => {
        console.log(inputs);
    }, [inputs]);
    // // // // // // // // // // // // // // // // // // // //
    if (typeof validation !== "function") {
        return;
    }
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs();
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!validation(inputs)) {
            return alert("입력값을 확인해주세요");
        }
        axios
            .post(url, inputs)
            .then((res) => {
                onReset();
                if(go){
                    go(res.data)
                }
            });
    };

    return {
        inputs,
        setInputs,
        onChange,
        onSubmit,
    };
}

export default useInput;
