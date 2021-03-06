import React, { useContext } from "react";
import Logo from "./Logo";
import "./Nav.css";
import { Link } from "react-router-dom";
import UserTab from "./UserTab";
import { TokenContext } from "../api/TokenContext";
import EditProfile from "../EditProfile";

import styled from "styled-components";

const Container = styled.div`
    padding: 0 clamp(0px, 4%, 7rem);

    width: 100%;
    height: 6.8rem;
    background-color: black;
    display: flex;
    gap: 3rem;
    justify-content: space-between;

    @media screen and (max-width: 950px) {
        height: 4.1rem;
    }
`;

function Nav({ setEditProfile }) {
    return (
        <Container>
            <div className="header-left">
                <div className="header-logo">
                    <Logo to="/home"></Logo>
                </div>

                <div>
                    <ul className="menu-container small">
                        <li className="menu-btn-box">
                            <button className="menu-btn">메뉴</button>
                        </li>
                        <li className="menu-box">
                            <Link to="/home">홈</Link>
                        </li>
                        <li className="menu-box">
                            <Link to="/home">시리즈</Link>
                        </li>
                        <li className="menu-box">
                            <Link to="/home">영화</Link>
                        </li>
                        <li className="menu-box">
                            <Link to="/home">NEW! 요즘 대세 콘텐츠</Link>
                        </li>
                        <li className="menu-box">
                            <Link to="/home">내가 찜한 콘텐츠</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header-right">
                <div>
                    <svg width="15.5" height="22.5" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M80.7566 75.1778L54.4621 48.8833C58.5425 43.6082 60.7497 37.1586 60.7497 30.3749C60.7497 22.2547 57.5806 14.6407 51.8499 8.89984C46.1192 3.15899 38.485 0 30.3749 0C22.2648 0 14.6306 3.16911 8.89984 8.89984C3.15899 14.6306 0 22.2547 0 30.3749C0 38.485 3.16911 46.1192 8.89984 51.8499C14.6306 57.5907 22.2547 60.7497 30.3749 60.7497C37.1586 60.7497 43.5981 58.5425 48.8732 54.4723L75.1677 80.7566C75.2448 80.8338 75.3363 80.895 75.4371 80.9368C75.5379 80.9785 75.6459 81 75.7549 81C75.864 81 75.972 80.9785 76.0728 80.9368C76.1735 80.895 76.2651 80.8338 76.3422 80.7566L80.7566 76.3523C80.8338 76.2752 80.895 76.1836 80.9368 76.0829C80.9785 75.9821 81 75.8741 81 75.765C81 75.656 80.9785 75.548 80.9368 75.4472C80.895 75.3464 80.8338 75.2549 80.7566 75.1778V75.1778ZM46.4128 46.4128C42.1198 50.6957 36.4296 53.0548 30.3749 53.0548C24.3201 53.0548 18.6299 50.6957 14.3369 46.4128C10.0541 42.1198 7.69497 36.4296 7.69497 30.3749C7.69497 24.3201 10.0541 18.6198 14.3369 14.3369C18.6299 10.0541 24.3201 7.69497 30.3749 7.69497C36.4296 7.69497 42.1299 10.044 46.4128 14.3369C50.6957 18.6299 53.0548 24.3201 53.0548 30.3749C53.0548 36.4296 50.6957 42.1299 46.4128 46.4128Z"
                            fill="white"
                        />
                    </svg>
                </div>

                <div>
                    <Link to="/home">키즈</Link>
                </div>
                <div>
                    <svg width="18.25" height="25.8" viewBox="0 0 73 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M36.5 81C39.0116 81.0031 41.4618 80.2248 43.51 78.7731C45.5582 77.3215 47.1026 75.2687 47.9286 72.9H25.0714C25.8974 75.2687 27.4418 77.3215 29.49 78.7731C31.5382 80.2248 33.9884 81.0031 36.5 81ZM64.8889 50.9733V32.4C64.8889 19.3711 56.0275 8.39565 44.0231 5.0949C42.8348 2.106 39.931 0 36.5 0C33.069 0 30.1652 2.106 28.9769 5.0949C16.9725 8.3997 8.11111 19.3711 8.11111 32.4V50.9733L1.18828 57.8866C0.810943 58.2621 0.511692 58.7084 0.307757 59.1998C0.103823 59.6912 -0.000768321 60.2181 4.2489e-06 60.75V64.8C4.2489e-06 65.8741 0.427285 66.9043 1.18785 67.6638C1.94841 68.4233 2.97996 68.85 4.05556 68.85H68.9445C70.0201 68.85 71.0516 68.4233 71.8122 67.6638C72.5727 66.9043 73 65.8741 73 64.8V60.75C73.0008 60.2181 72.8962 59.6912 72.6923 59.1998C72.4883 58.7084 72.1891 58.2621 71.8117 57.8866L64.8889 50.9733Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="asdf">
                    <div className="header-user">
                        <div className="user"></div>
                        <div className="user-arrow">
                            <svg width="6.6" height="5" viewBox="0 0 107 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M49.0947 78.6672C49.5855 79.3866 50.2423 79.9749 51.0085 80.3813C51.7747 80.7877 52.6272 81 53.4927 81C54.3583 81 55.2108 80.7877 55.977 80.3813C56.7432 79.9749 57.3999 79.3866 57.8908 78.6672L106.045 8.47202C106.602 7.66238 106.929 6.71407 106.99 5.73012C107.05 4.74617 106.843 3.76421 106.39 2.89093C105.936 2.01765 105.254 1.28645 104.418 0.776781C103.582 0.267109 102.623 -0.00154615 101.647 6.69367e-06H5.33898C4.36436 0.00406942 3.40928 0.276179 2.57645 0.787072C1.74362 1.29797 1.06454 2.02831 0.61225 2.89957C0.159957 3.77083 -0.0484382 4.75003 0.00947451 5.73188C0.0673872 6.71373 0.389417 7.66107 0.940932 8.47202L49.0947 78.6672Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <UserTab setEditProfile={setEditProfile}></UserTab>
                </div>
            </div>
        </Container>
    );
}

export default Nav;
