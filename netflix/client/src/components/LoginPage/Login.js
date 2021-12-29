import React, { useEffect } from "react";
import axios from "axios";
import useInput from "../api/useInput";

import { Link, useNavigate } from "react-router-dom";
import Logo from "../Atom/Logo";
import Button100 from "../Atom/Button_100";
import Input100 from "../Atom/Input_100.js";
import "./Login.css";
const validator = (data) => {
    return EmailVlidator(data?.Email) && data?.password ? true : false;
};

const EmailVlidator = (Email) => {
    let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    return regEmail.test(Email);
};
function Signup() {
    const navigate = useNavigate();
    const isLogin = (data) => {
        if (data.isUser === false) {
            alert(data.message);
            return navigate("");
        }
        console.log(data.isLogin);
        if (data.isLogin && data.accessToken) {
            localStorage.setItem("ACCESS_TOKEN", JSON.stringify(data.accessToken));
            return navigate("/home");
        } else {
            alert(data.message);
        }
    };
    const { inputs, setInputs, onChange, onSubmit } = useInput("/api/login", validator, isLogin);
    useEffect(() => {
        axios.get("/api").then((res) => {
            let mounted = true;
            console.log("이제시작");
            if (res.data.Email && mounted) setInputs({ ...res.data });

            return () => (mounted = false);
        });
    }, [setInputs]);

    return (
        <div className="main">
            <div class="background">
                <div className="background-img-container">
                    <img
                        class="background-img"
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/ddd4085b-8ed5-416a-9b80-5085784ba0e9/5e3ba062-2e50-4086-8d83-65bbe3c485c1/KR-ko-20211206-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                        alt="login-background"
                    ></img>
                </div>

                <div></div>
            </div>

            <div className="login-header">
                <div className="logo-container">
                    <Logo></Logo>
                </div>
            </div>

            <div className="login-form">
                <div>
                    <h1 className="xxlarge">로그인</h1>
                </div>
                {/* <div className="login-form-input">
                    <input required="required"></input>
                    <label className="medium">이메일 주소 또는 전화번호</label>
                </div>
                <div className="login-form-input">
                    <input required="required"></input>
                    <label className="medium">비밀번호</label>
                </div> */}
                <Input100 attr={{ id: "login_email", name: "Email" }} onChange={onChange} inputs={inputs ? inputs : ""} label={"이메일 주소 또는 전화번호"}></Input100>
                <Input100 attr={{ id: "login_pw", name: "password" }} onChange={onChange} inputs={inputs ? inputs : ""} label={"비밀번호"}></Input100>

                <Button100 content={"로그인"} onSubmit={onSubmit}></Button100>
                {/* <button class="login-form-button medium bold">로그인</button> */}

                <div className="login-form-save">
                    <div>
                        <input type="checkbox" value="login-save"></input>
                        <label className="small greycolor">로그인 정보 저장</label>{" "}
                    </div>
                    <Link to="/help">
                        <span className="small greycolor">도움이 필요하신가요?</span>
                    </Link>
                </div>
                <div className="facebook-login">
                    <div className="facebook"></div>
                    <label className="small greycolor">Facebook으로 로그인</label>
                </div>
                <div className="login-form-join">
                    <span className="medium greycolor">Netfilx 회원이 아니신가요?</span>{" "}
                    <Link to="/">
                        <span className="medium">지금 가입하세요</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
