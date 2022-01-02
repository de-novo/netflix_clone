import React, { useContext, useEffect } from "react";

import { TokenContext } from "./api/TokenContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.clear();
        axios.get("/api/logout");
        navigate("/");
    }, [navigate]);

    return <div></div>;
}

export default Logout;
