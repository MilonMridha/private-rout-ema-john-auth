import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword,user,hookError] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if(user){
        navigate('/login');
    }
const handleEmailBlur = event => {
    setEmail(event.target.value);
}
const handlePassBlur = event => {
    setPass(event.target.value);
}
const handleConfirmPass = event => {
    setConfirmPass(event.target.value);
}
const handleCreateUser = event => {
    event.preventDefault();
    if(pass !== confirmPass){
        setError('Your password did not match');
        return;
    }
    if(pass.length < 6){
        setError('Password must be 6 character');
        return;
    }

    createUserWithEmailAndPassword(email,pass);
}

    return (
        <div className='login-container'>
        <div>
            <h2 className='form-tittle'>SignUp</h2>
            <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassBlur} type="password" name="password" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password"> Confirm Password</label>
                    <input onBlur={handleConfirmPass} type="password" name="confirm password" id="" required />
                </div>
                    <p style={{color:'red'}}>{error}</p>
                    <p style={{color:'red'}}>{hookError?.message}</p>
                <input className='submit-btn' type="submit" value="SignUp" />
            </form>
            <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
        </div>
    </div>
    );
};

export default SignUp;