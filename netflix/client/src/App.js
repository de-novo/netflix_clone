import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="nav-container">
                    <div className="nav-box">
                        <div className="logo-box">
                            <svg viewBox="0 0 1024 277" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M140.803 258.904C125.399 261.609 109.724 262.42 93.509 264.58L44.051 119.724V270.797C28.647 272.418 14.594 274.58 0 276.742V0H41.08L97.292 157.021V0H140.803V258.904ZM225.934 101.346C242.691 101.346 268.365 100.535 283.769 100.535V143.775C264.58 143.775 242.15 143.775 225.934 144.586V208.908C251.339 207.287 276.743 205.123 302.416 204.312V245.929L182.692 255.39V0H302.416V43.241H225.934V101.346ZM463.218 43.242H418.356V242.15C403.762 242.15 389.168 242.15 375.117 242.689V43.242H330.255V0H463.22L463.218 43.242ZM533.484 98.374H592.671V141.614H533.484V239.718H491.051V0H611.859V43.241H533.484V98.374ZM682.125 201.881C706.719 202.42 731.581 204.315 755.635 205.664V248.365C716.989 245.931 678.342 243.502 638.885 242.689V0H682.125V201.881ZM792.119 251.338C805.902 252.15 820.496 252.961 834.549 254.58V0H792.119V251.338ZM1024 0L969.137 131.615L1024 276.742C1007.78 274.58 991.568 271.607 975.352 268.904L944.274 188.91L912.657 262.42C896.979 259.715 881.845 258.904 866.173 256.742L921.845 129.992L871.576 0H918.058L946.435 72.699L976.705 0H1024Z"
                                    fill="#D81F26"
                                />
                            </svg>
                        </div>
                        <div className="menu-container">
                            <select></select>
                            <a>로그인</a>
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
                        <h1 className="xxxlarge bold">
                            영화,TV 프로그램을 <br />
                            무제한으로.
                        </h1>
                        <h2 className="xlarge thin">다양한 디바이스에서 시청하세요. 언제든 해지할실 수 있습니다.</h2>
                        <h3 className="large thin">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
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
                <div className="info-container">
                    <div className="info-box">
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
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"></source>
                            </video>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"></img>
                        </div>
                    </div>
                </div>
                <div className="info-container">
                    <div className="info-box">
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
            </main>
        </div>
    );
}

export default App;
