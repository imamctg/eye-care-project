import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { handleGoogleLogin, handleEmailChange, handlePasswordChange, handleUserLogin, error } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './';

    const signInUsingGoogle = () => {
        handleGoogleLogin()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    const signInUsingEmailPassword = () => {
        handleUserLogin()
            .then(result => {
                console.log(result.user)
                history.push(redirect_uri)
            })
    }
    return (
        <div>
            <div className="div d-flex justify-content-center align-items-center">


                <div className="container">
                    <h3>Please Login</h3>
                    <form action="">

                        <br />
                        <input required onBlur={handleEmailChange} type="email" placeholder="email" />
                        <br />
                        <br />
                        <input required onBlur={handlePasswordChange} type="password" placeholder="password" />
                        <br />
                        <p className="text-danger">{error}</p>

                        <br />
                        <input className="submit btn btn-primary" type="submit" value="Login" />
                        <br />
                        <p style={{ color: 'green' }}>You are new here please press Register Button</p>

                        <Link to="/register"><input className="submit btn btn-primary" type="submit" value="register" /></Link>
                    </form>
                    <button onClick={signInUsingGoogle} className="btn btn-success m-2">google sign in</button>

                </div>
            </div>



        </div>
    );
};

export default Login;