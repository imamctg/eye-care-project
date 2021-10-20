import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Register = () => {

    const { handleUserRegister, handleNameChange, handleEmailChange, handlePasswordChange, error } = useAuth();


    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit={handleUserRegister} action="">
                    <input required onBlur={handleNameChange} type="name" placeholder="name" />
                    <br />
                    <input required onBlur={handleEmailChange} type="email" placeholder="email" />
                    <br />
                    <input required onBlur={handlePasswordChange} type="password" placeholder="password" />
                    <br />
                    <p className="text-success">{error}</p>

                    <br />
                    <input className="submit" type="submit" value="register" />
                </form>
                <div>................ Or ...................</div>
                <p>Already Have an account? Please <Link to='./login'><button className="btn btn-success ms-1">Log In</button></Link> </p>
            </div >
        </div >
    );
};

export default Register;