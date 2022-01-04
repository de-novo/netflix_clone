import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { TokenContext } from "./api/TokenContext";
import Profile from "./Profile";
import { UserContext } from "./api/UserContext";
function useInput(url) {
    const { user, setUser } = useContext(UserContext);
    const { token, setToken, config } = useContext(TokenContext);
    // // // // // // // // // // // // // // // // // // // //
    useEffect(() => {
        console.log(user);
    }, [user]);
    // // // // // // // // // // // // // // // // // // // //

    const onChange = (e, key, name) => {
        const { value } = e.target;

        let copy = [...user];
        copy[key] = { [name]: value };
        setUser(copy);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios
            .post(url, { profile: user }, config)
            .then((res) => {
                console.log(res.data);
                if (res.data.accessToken) {
                    return setToken(res.data.accessToken);
                }
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    return {
        onChange,
        onSubmit,
    };
}

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: #111;
    z-index: 10;
`;

const Button = styled.button`
    position: relative;
    width: 10rem;
    height: 10rem;
    background-color: red;
    outline: none;
    border: none;

    color: white;
`;
const Box = styled.div`
    margin-bottom: 5rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 20rem;
    line-height: 10rem;
    text-align: center;
`;

const ButtonBox = styled(Box)`
    justify-content: center;
`;
function EditProfile({ setEditProfile }) {
    const { onChange, onSubmit } = useInput("/api/home/user");
    const { user, setUser } = useContext(UserContext);
    const { token, setToken, config } = useContext(TokenContext);
    const addUser = (e) => {
        e.preventDefault();
        console.log(user)
        let copy= [...user];
      
        copy.push({name:''})
        console.log(copy)
      return  setUser(copy)
    };
    console.log("useruseruseruseruser", user);
    // const onClickHandler = () => {

    //     console.log(token);
    //     axios.post("/api/home/user", { proflie: [{ name: "박준혁" }, { name: "박기태" }] }, config).then((res) => {
    //         if (res.data.accessToken) {
    //             return setToken(res.data.accessToken);
    //         }
    //         console.log(res.data);
    //         // setEditProfile(false)
    //     });
    // };
    return (
        <Container>
            <Box>
                {user?.map((item, index) => {
                    console.log(index);
                    return <Profile item={item} index={index} onChange={onChange} />;
                })}
                {user.length<5?<Button onClick={addUser}>+</Button>:null}
            </Box>
            <ButtonBox>
                <Button
                    onClick={(e) => {
                        onSubmit(e);
                        setEditProfile(false);
                    }}
                >
                    완료
                </Button>
            </ButtonBox>
        </Container>
    );
}

export default EditProfile;
