import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

const Auth = () => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, type, ...inputProps } = props;

    const onHandleFocus = (e) => {
        setFocused(true);
    };

    const setValidErrorView = (t, m) => {  //t: target, m: message
        const target = document.getElementById(t).querySelector(".valid_msg");
        target.classList.add("active");
        target.intterText = m;
    }

    const loginValidate = (input) => {    
        const {userid,password} = input
        const errors = {}
    
        if(userid === ''){
            errors.userid="이메일이 입력되지 않았습니다."
        } else if(!/^[a-z0-9%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(userid)){
            errors.userid = "입력된 이메일이 유효하지 않습니다."
        }
    
        if(!password){
            errors.password="비밀번호가 입력되지 않았습니다."
        } else if(password.length < 8){
            errors.password = "8자 이상의 패스워드를 사용해야 합니다."
        }
    
        return errors 
    }

    const signUpValidate = (input) => {    
        const {userid,password} = input
        const errors = {}
    
        if(userid === ''){
            errors.userid="이메일이 입력되지 않았습니다."
        } else if(!/^[a-z0-9%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(userid)){
            errors.userid = "입력된 이메일이 유효하지 않습니다."
        }
    
        if(!password){
            errors.password="비밀번호가 입력되지 않았습니다."
        } else if(password.length < 8){
            errors.password = "8자 이상의 패스워드를 사용해야 합니다."
        }
    
        return errors 
    }
}

export default Auth;