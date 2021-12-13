import React, { useState } from "react";

import Logo from "../Atom/Logo";
import { Link } from "react-router-dom";
import './StartMain.css'

function Startmain() {
    const [tab, setTab] = useState();

    const buttonHandler = (i) => {
        if (tab === i) {
            setTab(-1);
        } else {
            setTab(i);
        }
    };

    return (
        <div>
            {" "}
            <header className="App-header">
                <nav className="nav-container">
                    <div className="nav-box">
                    <div className="logo-container" >
                            <Logo></Logo>
                        </div>
                        
                        <div className="start-menu-container">
                            <select></select>
                            <Link to='/login'>로그인</Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div className="start-back-img-box">
                    <img src="\KR-ko-20211129-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
                    <div></div>
                </div>
                <div className="start-title-box">
                    <div className="start">
                        <h1 className="xxxlarge bold">영화,TV 프로그램을 무제한으로.</h1>
                        <h2 className="xlarge thin">다양한 디바이스에서 시청하세요. 언제든 해지할실 수 있습니다.</h2>
                        <h3 className="large thin">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
                        <div className="email-input">
                            <div>
                                <input required="required"></input>
                                <label className="medium">이메일 주소</label>
                            </div>
                            <div>
                                <button className="xlarge thin"><Link to='/signup'>시작하기 ></Link ></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-container">
                    <div className="info-box">
                        <div className="info-text">
                            <div>
                                <h1 className="xxxlarge">TV로 즐기세요.</h1>
                                <h2 className="xlarge thin">스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</h2>
                            </div>
                        </div>
                        <div className="info-img">
                            <video className="info-video1" autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop">
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"></source>
                            </video>

                            <img src="\tv.png"></img>
                        </div>
                    </div>
                </div>
                <div className="info-container ">
                    <div className="info-box reverse">
                        <div className="info-img">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"></img>
                        </div>

                        <div className="info-text">
                            <div>
                                <h1 className="xxxlarge">즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.</h1>
                                <h2 className="xlarge thin">간편하게 저장하고 빈틈없이 즐겨보세요.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-container">
                    <div className="info-box">
                        <div className="info-text">
                            <div>
                                <h1 className="xxxlarge">다양한 디바이스에서 시청하세요.</h1>
                                <h2 className="xlarge thin">각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.</h2>
                            </div>
                        </div>
                        <div className="info-img">
                            <video className="info-video2" autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop">
                                <source src=" https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"></source>
                            </video>

                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"></img>
                        </div>
                    </div>
                </div>
                <div className="info-container ">
                    <div className="info-box reverse">
                        <div className="info-img">
                            <img src="https://occ-0-988-1361.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABTyynLTvOBU46RmBnCIPyjAryrXCZKImpoXdp7Mz54jVGKnBQ1X84bzR-3vtD-RA4uu2b1FjrDgfxE6KElG14WAXW19X.png?r=acf"></img>
                        </div>

                        <div className="info-text">
                            <div>
                                <h1 className="xxxlarge">어린이 전용 프로필을 만들어 보세요.</h1>
                                <h2 className="xlarge thin">자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-container QNA">
                    <div className="info-box QNA">
                        <div className="info-text QNA">
                            <div>
                                <h1 className="xxxlarge QNA">자주 묻는 질문</h1>
                            </div>
                        </div>
                        <ul className="QNA-box">
                            <li className="QNA-tab">
                                <button className="xlarge thin" onClick={() => buttonHandler(1)}>
                                    넷플릭스란 무엇인가요?
                                </button>
                                <div className={tab !== 1 ? "QNA-A xlarge thin close" : "QNA-A xlarge thin open"}>
                                    <span>
                                        넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는
                                        스트리밍 서비스입니다. <br />
                                        <br />
                                        저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 TV 프로그램과 영화가 제공됩니다.
                                    </span>
                                </div>
                            </li>
                            <li className="QNA-tab">
                                <button className="xlarge thin" onClick={() => buttonHandler(2)}>
                                    넷플릭스 요금은 얼마인가요?
                                </button>
                                <div className={tab !== 2 ? "QNA-A xlarge thin close" : "QNA-A xlarge thin open"}>
                                    <span>
                                        스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 9,500원부터
                                        17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.
                                    </span>
                                </div>
                            </li>
                            <li className="QNA-tab">
                                <button className="xlarge thin" onClick={() => buttonHandler(3)}>
                                    어디에서 시청할 수 있나요?
                                </button>
                                <div className={tab !== 3 ? "QNA-A xlarge thin close" : "QNA-A xlarge thin open"}>
                                    <span>
                                        언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는
                                        디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.
                                        <br />
                                        <br />
                                        iOS, Android, Windows 10용 앱에서는 좋아하는 프로그램을 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요.
                                        넷플릭스는 어디서든 함께니까요.
                                    </span>
                                </div>
                            </li>
                            <li className="QNA-tab">
                                <button className="xlarge thin" onClick={() => buttonHandler(4)}>
                                    멤버십을 해지하려면 어떻게 하나요?
                                </button>
                                <div className={tab !== 4 ? "QNA-A xlarge thin close" : "QNA-A xlarge thin open"}>
                                    <span>
                                        넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때
                                        언제든 계정을 시작하거나 종료하세요.
                                    </span>
                                </div>
                            </li>
                            <li className="QNA-tab">
                                <button className="xlarge thin" onClick={() => buttonHandler(5)}>
                                    넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?
                                </button>
                                <div className={tab !== 5 ? "QNA-A xlarge thin close" : "QNA-A xlarge thin open"}>
                                    <span>
                                        넷플릭스는 장편 영화, 다큐멘터리, TV 프로그램, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는
                                        시간에 원하는 만큼 시청하세요.
                                    </span>
                                </div>
                            </li>
                            <li className="QNA-tab">
                                <button className="xlarge thin" onClick={() => buttonHandler(6)}>
                                    아이들이 넷플릭스를 봐도 좋을까요?
                                </button>
                                <div className={tab !== 6 ? "QNA-A xlarge thin close" : "QNA-A xlarge thin open"}>
                                    <span>
                                        멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 TV 프로그램과 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.
                                        <br />
                                        <br />
                                        키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도
                                        있습니다.
                                    </span>
                                </div>

                            </li>
                        </ul>
                        <div className='end'>
                        <div className="email-input">
                            <div>
                                <input required="required"></input>
                                <label className="medium">이메일 주소</label>
                            </div>
                            <div>
                                <button className="xlarge thin">시작하기 ></button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Startmain;
