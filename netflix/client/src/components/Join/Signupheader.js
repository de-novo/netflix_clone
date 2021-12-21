import React from "react";
import { Link } from "react-router-dom";
import "./Signupheader.css";

import Logo from "../Atom/Logo";
function Signupheader() {
    return (

            <header className="signup-header">
                <div style={{width:'16.7rem',marginLeft:'3%'}}><Logo></Logo></div>
                
                <div className="signup-login large bold">
                    <div className="login-btn-box">
                        <Link to="/login">로그인</Link>
                    </div>
                </div>
            </header>
    );
}

export default Signupheader;
