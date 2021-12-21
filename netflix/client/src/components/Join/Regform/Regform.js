import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "./Regform.css";
import Signupheader from "../Signupheader";
import Button_100 from "../../Atom/Button_100";
import Input_100 from "../../Atom/Input_100";
import useInput from "../../api/useInput";
import axios from "axios";
const validator = (data) => {
    return EmailVlidator(data?.Email)&&data?.password&&data?.checkPrivacy==='true'&&data?.checkAlram==='true'?true:false
};

const EmailVlidator=(Email)=>{
    let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regEmail.test(Email)
}

function Regform() {
    const {inputs,setInputs,onChange,onSubmit}=useInput('/api/signup/regform',validator)


    useEffect(() => {
        axios.get('/api').then(res=>setInputs({...inputs,...res.data}))
        
    }, [])

    return (
        <div className="regform">
            <Signupheader></Signupheader>
            <main className="regform-main">
                <div className="regform-container">
                    <p className="small normal">2/3단계</p>
                    <p className="xxlarge normal">비밀번호를 설정해 멤버십을 시작하세요.</p>
                    <p className="large thin">몇 단계만 더 거치면 넷플릭스 가입 완료!</p>
                    <p className="large thin">복잡한 단계는 모두 없앴습니다.</p>
                    <Input_100 attr={{id:'signup_email', name:'Email'}} onChange={onChange} inputs={inputs} label={'이메일 주소'} inputStyle={{fontSize:'1.8rem',border:'1px solid #8c8c8c',height:'6rem', margin:'0.5rem 0'}}></Input_100>
                    <Input_100 attr={{id:'signup_pw', name:'password'}}  onChange={onChange} inputs={inputs} label={'비밀번호를 추가하세요'} inputStyle={{fontSize:'1.8rem',border:'1px solid #8c8c8c',height:'6rem', margin:'0.5rem 0'}}></Input_100>
                    <div class='checkbox-container'>
                        <input type="checkbox" name='checkPrivacy' value={inputs?.checkPrivacy==='true'?false:true} onChange={onChange} style={{width:'2.5rem',height:'2.5rem'}}></input>
                        <span className="medium greycolor">예, 저는 <Link to='/'>개인정보 처리방침</Link>에 따른 개인정보 수집 및 활용에 동의합니다.</span>{" "}
                    </div>
                    <div class='checkbox-container'>
                        <input type="checkbox" name="checkAlram" value={inputs?.checkAlram==='true'?false:true}  onChange={onChange} style={{width:'2.5rem',height:'2.5rem'}}></input>
                        <span className="medium greycolor">예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택 사항)</span>{" "}
                    </div>
                    <Button_100 content={"동의하고 계속"} onSubmit={onSubmit} to={"/signup/regform"} style={{fontSize:'2.4rem'}}></Button_100>
                </div>
            </main>
        </div>
    );
}

export default Regform;
