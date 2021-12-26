import React from "react";


import Signupheader from "../Signupheader";
import Button100 from "../../Atom/Button_100";
import "./Signup.css";

function Join() {
    // https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png

    return (
        <div className="signup">
            <Signupheader></Signupheader>
            <main className="signup-main">
                <div className="signup-container">
                    <span className="singup-img"></span>
                    <p className="small normal">1/3단계</p>
                    <p className="xxlarge normal">계정 설정 마무리하기</p>
                    <p className="large thin">맞춤형콘텐츠 서비스, 넷플릭스! 비밀번호를 설정해 다양한 디바이스에서 아무 때나 시청하세요.</p>
                  <Button100 content={'다음'} to={'/signup/regform'} style={{fontSize:'2.4rem'}}></Button100>
                </div>
            </main>
        </div>
    );
}

export default Join;
