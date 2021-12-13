import React from "react";
import { Link } from "react-router-dom";
import "./Signupheader.css";

import Logo from "../Atom/Logo";
function Signupheader() {
    return (

            <header className="signup-header">
                <Logo></Logo>
                <div className="signup-login large bold">
                    <div className="login-btn-box">
                        <Link to="/login">로그인</Link>
                    </div>
                </div>
            </header>
    );
}

export default Signupheader;
