import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
function Login() {
    return (
        <div className="main">
            <div class="background">
                <div className='background-img-container'>
                    <img class="background-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/ddd4085b-8ed5-416a-9b80-5085784ba0e9/5e3ba062-2e50-4086-8d83-65bbe3c485c1/KR-ko-20211206-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
                </div>
                
                <div></div>
            </div>

            <div className="login-header">
                <div className="logo-box">
                   <Link to='/'> <svg viewBox="0 0 1024 277" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M140.803 258.904C125.399 261.609 109.724 262.42 93.509 264.58L44.051 119.724V270.797C28.647 272.418 14.594 274.58 0 276.742V0H41.08L97.292 157.021V0H140.803V258.904ZM225.934 101.346C242.691 101.346 268.365 100.535 283.769 100.535V143.775C264.58 143.775 242.15 143.775 225.934 144.586V208.908C251.339 207.287 276.743 205.123 302.416 204.312V245.929L182.692 255.39V0H302.416V43.241H225.934V101.346ZM463.218 43.242H418.356V242.15C403.762 242.15 389.168 242.15 375.117 242.689V43.242H330.255V0H463.22L463.218 43.242ZM533.484 98.374H592.671V141.614H533.484V239.718H491.051V0H611.859V43.241H533.484V98.374ZM682.125 201.881C706.719 202.42 731.581 204.315 755.635 205.664V248.365C716.989 245.931 678.342 243.502 638.885 242.689V0H682.125V201.881ZM792.119 251.338C805.902 252.15 820.496 252.961 834.549 254.58V0H792.119V251.338ZM1024 0L969.137 131.615L1024 276.742C1007.78 274.58 991.568 271.607 975.352 268.904L944.274 188.91L912.657 262.42C896.979 259.715 881.845 258.904 866.173 256.742L921.845 129.992L871.576 0H918.058L946.435 72.699L976.705 0H1024Z"
                            fill="#D81F26"
                        />
                    </svg></Link>
                </div>
            </div>

            <div className="login-form">
                <div>
                    <h1 className="xxlarge">로그인</h1>
                </div>
                <div className="login-form-input">
                    <input required="required"></input>
                    <label className="medium">이메일 주소 또는 전화번호</label>
                </div>
                <div className="login-form-input">
                    <input required="required"></input>
                    <label className="medium">비밀번호</label>
                </div>
                <button class="login-form-button medium bold">로그인</button>

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
                    <Link to="/join">
                        <span className="medium">지금 가입하세요</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
