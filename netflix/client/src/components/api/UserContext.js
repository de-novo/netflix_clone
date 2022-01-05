import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import axios from "axios";
//useContext 사용 할거임 어디에서나 사용가능하게
import { TokenContext } from "./TokenContext";
export const UserContext = createContext({
    setUser: (TOKEN) => {},
    user: [],
});

const UserContextProvider = ({ children }) => {
    // console.trace()
    const { token, setToken, config } = useContext(TokenContext);
    const [user, setUser] = useState([]);
    const [nowUser, setNowUser] = useState("");
    // const getUser = useCallback(async () => {
    //     const user = await axios.get("/api/home/user", config).then((res) => {
    //         return res.data?.profile;
    //     });
    //     console.log(user);
    //     if (user) {
    //         return setUser(user);
    //     }

    //     return null;
    // });

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                console.log(config);
                const user = await axios.get("/api/home/user", config).then((res) => {
                    if (res.data.accessToken) {
                        setToken(res.data.accessToken);
                        return getUser();
                    }
                    return res.data?.profile;
                });
                console.log(user);
                if (user) {
                    setNowUser(user[0]);
                    return setUser(user);
                }

                return null;
            };
            getUser();
        }
    }, [token,config, setToken]);

    const saveUser = (USER) => {
        // localStorage.setItem("ACCESS_TOKEN", JSON.stringify(TOKEN));
        USER && setUser(USER);
    };

    return <UserContext.Provider value={{ user, setUser: saveUser, nowUser, setNowUser }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
