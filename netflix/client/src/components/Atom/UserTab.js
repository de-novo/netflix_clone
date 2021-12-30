import React from "react";
import styled from "styled-components";

const UserContainer = styled.div`

    position: absolute;
    transform: translateY(10px);
    right:0;
    background-color:white;

    width:15rem;
`;

const ProfileBox = styled.div`
    position: absolute;
    transform: translateY(10px);
    right:0;
    background-color:white;
    height:15rem;
    width:100%
`;



const MenuBox = styled.div`

    
    bottom:0;
    background-color:blue;
    height:5rem;
    width:100%
`;


const Menu = styled.button`

    width:100%;
    height:2rem;
    margin: 0;
    background-color:red;
    outline: none;
    border: none;
`

function UserTab() {
    return <UserContainer>
        <MenuBox>
            <Menu></Menu>
            <Menu></Menu>
            <Menu></Menu>
            <Menu></Menu>
            <Menu></Menu>
            <Menu></Menu>
            <Menu></Menu>
            <Menu></Menu>
        </MenuBox>
    </UserContainer>;
}

export default UserTab;
