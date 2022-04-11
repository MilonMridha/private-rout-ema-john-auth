import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


        const location = useLocation();
      const from = location?.state?.from?.pathname || '/';
      

      const navigate = useNavigate();
      if(user){
          navigate(from, {replace : true});
      }


    const handleSignInEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSignInPassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmitForm = e => {
        e.preventDefault();
        
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div className='login-container'>
            <div>
                <h2 className='form-tittle'>Login</h2>
                <form onSubmit={handleSubmitForm}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleSignInEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handleSignInPassword} type="password" name="password" id="" required />
                    </div>
                    <input className='submit-btn' type="submit" value="Login" />
                </form>
                <p style={{color:'red'}}>{error?.message}</p>
                {
                    loading && <p>loading...</p>
                }
                <p>New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;