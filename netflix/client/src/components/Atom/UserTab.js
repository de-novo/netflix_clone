import axios from "axios";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../api/UserContext";
import EditProfile from "../EditProfile";
//원래는 프로필 박스 컴포넌트 만들어서 대입해야함 하지만 귀찮음.
// 페이크로 화살표 div 박스 넣어서 margin 같이 넣어줘야함
const UserContainer = styled.div`
    transition: display 0s, opacity 0.2s;

    > div {
        display: none;
    }
    opacity: 0;
    position: absolute;
    height: 0;
    right: 0;
    background-color: #111;

    z-index: 5;
    width: 15rem;
`;

const ProfileBox = styled.div`
    text-align: left;
    right: 0;

    width: 100%;
`;

const Profile = styled.div`
    position: relative;

    > div {
        border-radius: 5px;
        display: inline-block;
        width: 3rem;
        height: 3rem;
        background-color: black;
        margin-right: 0.8rem;
    }
    > span {
        display: inline-block;
        top: 50%;
        transform: translateY(-50%);
    }
    &:hover {
        border: 1px solid white;
    }
    font-size: 1.6rem;

    padding: 0.8rem;
`;

const MenuBox = styled.div`
    width: 100%;
`;

const Menu = styled.button`
    font-size: 1.2rem;
    width: 100%;
    color: white;
    margin: 0 0;
    padding: 0.4rem;
    background-color: #111;
    outline: 0;
    text-align: left;
    border: 0;
    cursor: pointer;
`;

function UserTab({setEditProfile}) {
    const { user,setNowUser } = useContext(UserContext)
    const navigate = useNavigate();
    const onLogout = (e) => {
        e.preventDefault();
        navigate("/logout");
    };
    return (
        <>
    
            <UserContainer className="userMenu-Container">
                <ProfileBox>
                    {user?.map((item,index)=>{
                        return  <Profile key={index} onClick={()=>setNowUser(item)}>
                        <div></div>
                        <span>{item.name}</span>
                    </Profile>
                    })}
                   
                    
                    <Menu onClick={()=>{setEditProfile(true)}}>프로필관리</Menu>
                </ProfileBox>
                <MenuBox>
                    <Menu>계정</Menu>
                    <Menu>고객센터</Menu>
                    <Menu onClick={onLogout}>넷플릭스에서 로그아웃</Menu>
                </MenuBox>
            </UserContainer>
        </>
    );
}

export default UserTab;
