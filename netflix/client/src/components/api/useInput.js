import React, { useState, useEffect } from "react";
import axios from "axios";
function useInput(url, validation,go_true,go_false) {
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
                console.log(res.data)
                onReset();
                if(go_true&&go_false){
                    res.data===true?go_true():go_false()
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
