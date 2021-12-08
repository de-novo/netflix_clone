import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


//로그인전 main
import Startmain from "./components/StartPage/StartMain";


//로그인 페이지
import Login from './components/LoginPage/Login'

function App() {
    return (
        <div className="App">
        
            <Routes>
                <Route path='/' element={<Startmain/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes> 
            {/* 로그인? 안했어? 그럼 이거봐 */}

            {/* 로그인하면 이제 메인이지 */}
        </div>
    );
}

export default App;
