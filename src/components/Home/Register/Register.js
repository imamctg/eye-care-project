import React from 'react';
import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';


const Register = () => {

    const { handleUserRegister, handleEmailChange, handlePasswordChange, error, user } = useFirebase()
    console.log(user)


    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit={handleUserRegister} action="">

                    <br />
                    <input required onBlur={handleEmailChange} type="email" placeholder="email" />
                    <br />
                    <input required onBlur={handlePasswordChange} type="password" placeholder="password" />
                    <br />
                    <p className="text-danger">{error}</p>

                    <br />
                    <input className="submit" type="submit" value="register" />
                </form>
                <div>................ Or ...................</div>
                <p>Already Have an account? Please <Link to='./login'><button className="btn btn-success ms-1">Sign In</button></Link> </p>
            </div >
        </div >
    );
};

export default Register;