import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');

    const onSignUpHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    return (
        <div class="auth-wrapper login-wrapper">
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
                    <a href="#!" class="forgot-password-link">Find Password?</a>
                </div>
            </form>
            <p class="login-wrapper-footer-text">Need an account? <Link to="/signup" class="text-reset">Signup here</Link></p>
        </div>
    )
}

export default Login