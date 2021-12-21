import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


//로그인전 main
import Startmain from "./components/StartPage/StartMain";


//로그인 페이지
import Login from './components/LoginPage/Login'
//회원가입 페이지
import Signup from "./components/Join/signup/Signup";
import Regform from "./components/Join/Regform/Regform";
//홈 

import Home from "./components/Home/Home";
function App() {
    return (
        <div className="App">
        
            <Routes>
                <Route path='/' element={<Startmain/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/signup/regform' element={<Regform/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes> 
            {/* 로그인? 안했어? 그럼 이거봐 */}

            {/* 로그인하면 이제 메인이지 */}
        </div>
    );
}

export default App;
