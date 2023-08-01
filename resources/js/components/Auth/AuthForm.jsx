import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '/resources/css/Auth.css'
import Login from "./Login";
import SignUp from "./SignUp";

const AuthForm = ({type}) => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 col-md-7 intro-section">
                    <div className="intro-content-wrapper">
                        <h1 className="intro-title">Welcome to myBChat!</h1>
                        <p className="intro-text">
                            Find fun on this site.<br />I'm sure it's a choice you won't regret.
                        </p>
                        <a href="#!" className="btn btn-read-more">Read more</a>
                    </div>
                    {/* <div className="intro-section-footer">
                        <na className="footer-nav">
                        <a href="#!">Facebook</a>
                        <a href="#!">Twitter</a>
                        <a href="#!">Gmail</a>
                        </na>
                    </div> */}
                </div>
                <div className="col-sm-6 col-md-5 form-section">
                    {type === 'signup' ? <SignUp /> : <Login />}
                </div>
            </div>
        </div>
        // <div>
        //     <div>
        //         <h3>
        
        //         </h3>
                
        //     </div>
        //     <div className='inputList'>
        //         <input value={user.email} onChange={onChange} name='email' type="eamil" placeholder='이메일'></input>
        //         <input value={user.password} onChange={onChange} name='password' type="password" placeholder='비밀번호'></input>
        //         {type === 'signup' && 
        //             <input value={user.passwordCheck} onChange={onChange} name='passwordCheck' type="password" placeholder='비밀번호 확인'></input>
        //         }
        //         {!isPassword && <span>비밀번호를 다시 입력해주세요</span>}
                
        //         <button onClick={onClick} disabled={!(user.email && user.password && isPassword)}>가입하기</button>
        //     </div>
        // </div>
    );
};

export default AuthForm;