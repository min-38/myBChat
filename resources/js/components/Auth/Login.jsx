import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '/resources/css/Auth.css'

const Login = () => {
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 col-md-7 intro-section">
                    <div class="intro-content-wrapper">
                        <h1 class="intro-title">Welcome to myBChat!</h1>
                        <p class="intro-text">
                            Find fun on this site. I'm sure it's a choice you won't regret.
                        </p>
                        <a href="#!" class="btn btn-read-more">Read more</a>
                    </div>
                    <div class="intro-section-footer">
                        <na class="footer-nav">
                        <a href="#!">Facebook</a>
                        <a href="#!">Twitter</a>
                        <a href="#!">Gmail</a>
                        </na>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5 form-section">
                <div class="login-wrapper">
                    <h2 class="login-title">Sign in</h2>
                    <form action="#!">
                    <div class="form-group">
                        <label for="email" class="sr-only">Email</label>
                        <input placeholder='ID' className='form-control AuthInput' type="text" onChange={(event) => setID(event.target.value)} />
                    </div>
                    <div class="form-group mb-3">
                        <label for="password" class="sr-only">Password</label>
                        <input placeholder="Password" type="password" name="password" id="password" class="form-control"  onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-5">
                        <Link onClick={event => (!id || !password) ? event.preventDefault() : null} to={`/chat?name=${id}&room=${password}`}>
                            <input name="login" id="login" class="btn login-btn" type="button" value="Login"></input>
                        </Link>
                        <a href="#!" class="forgot-password-link">Password?</a>
                    </div>
                    </form>           
                    <p class="login-wrapper-footer-text">Need an account? <a href="#!" class="text-reset">Signup here</a></p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login