import React, { createContext, useState } from "react";

//useContext 사용 할거임 어디에서나 사용가능하게

export const TokenContext = createContext({
    setToken: (TOKEN) => {},
    token: "",
});

const TokenContextProvider = ({ children }) => {
    const getToken = () => {
        const ACCESS_TOKEN_String = localStorage.getItem("ACCESS_TOKEN");
        const ACCESS_TOKEN = JSON.parse(ACCESS_TOKEN_String);

        if (ACCESS_TOKEN) {
            return ACCESS_TOKEN;
        }
        return null;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (TOKEN) => {
        localStorage.setItem("ACCESS_TOKEN", JSON.stringify(TOKEN));
        TOKEN && setToken(TOKEN);
    };

    return <TokenContext.Provider value={{ token, setToken: saveToken }}>{children}</TokenContext.Provider>;
};




export default TokenContextProvider