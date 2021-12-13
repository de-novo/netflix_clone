import React from "react";
import { Link } from "react-router-dom";
import "./Regform.css";
import Signupheader from "../Signupheader";
import Button_100 from "../../Atom/Button_100";
import Input_100 from "../../Atom/Input_100";
function Regform() {
    return (
        <div className="regform">
            <Signupheader></Signupheader>
            <main className="regform-main">
                <div className="regform-container">
                    <p className="small normal">2/3단계</p>
                    <p className="xxlarge normal">비밀번호를 설정해 멤버십을 시작하세요.</p>
                    <p className="large thin">몇 단계만 더 거치면 넷플릭스 가입 완료!</p>
                    <p className="large thin">복잡한 단계는 모두 없앴습니다.</p>
                    <Input_100 attr={{id:'signup_email'}}label={'이메일 주소'} inputStyle={{fontSize:'1.8rem',border:'1px solid #8c8c8c',height:'6rem', margin:'0.5rem 0'}}></Input_100>
                    <Input_100 attr={{id:'signup_pw'}}label={'비밀번호를 추가하세요'} inputStyle={{fontSize:'1.8rem',border:'1px solid #8c8c8c',height:'6rem', margin:'0.5rem 0'}}></Input_100>
                    <div class='checkbox-container'>
                        <input type="checkbox" value="check-privacy" style={{width:'2.5rem',height:'2.5rem'}}></input>
                        <span className="medium greycolor">예, 저는 <Link to='/'>개인정보 처리방침</Link>에 따른 개인정보 수집 및 활용에 동의합니다.</span>{" "}
                    </div>
                    <div class='checkbox-container'>
                        <input type="checkbox" value="check-alram" style={{width:'2.5rem',height:'2.5rem'}}></input>
                        <span className="medium greycolor">예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택 사항)</span>{" "}
                    </div>
                    <Button_100 content={"동의하고 계속"} to={"/signup/regform"} style={{fontSize:'2.4rem'}}></Button_100>
                </div>
            </main>
        </div>
    );
}

export default Regform;
