import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "./api/UserContext";
const Container = styled.div`
    width: 10rem;
    height: 10rem;
    background-color: black;
    position: relative;
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;

    &:hover + .profilehover {
        display: block;
    }
`;
const Hover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #111;
    opacity: 0.6;
    top: 0;
    text-align: center;

    line-height: 10rem;

    display: none;
    &:hover {
        display: block;
    }
`;

const Edit = styled.div`
z-index:5;
position: absolute;
width:100%;
height:100%
// background-color: blue;
// top:50%;
transform:translateY(-50%);
top:0;

`;
const Input = styled.input`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
`;

const Button = styled.button`
    position: relative;
    top: 3rem;
    // left:50%;
    // transform:translateX(-50%);
`;

function Profile({ item, onChange, index }) {
    const [edit, setEdit] = useState(false);
    const { user, setUser } = useContext(UserContext);
    console.log(index);

    const removeUser = (e) => {
        e.preventDefault();
        let copy = [...user];
        copy.splice(index,1);
        setUser(copy);
    };

    return (
        <Container>
            <Box>{item.name}</Box>
            <Hover
                className="profilehover"
                onClick={() => {
                    setEdit(true);
                }}
            >
                수정
            </Hover>
            {edit ? (
                <Edit>
                    <Input
                        name="name"
                        onChange={(e) => {
                            onChange(e, index, "name");
                        }}
                    ></Input>
                    <Button
                        onClick={() => {
                            setEdit(false);
                        }}
                    >
                        수정
                    </Button>
                    <Button
                        onClick={(e) => {
                            removeUser(e);
                            setEdit(false);
                        }}
                    >
                        삭제
                    </Button>
                </Edit>
            ) : null}
        </Container>
    );
}

export default Profile;
