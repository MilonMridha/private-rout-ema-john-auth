import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const [user] = useAuthState(auth);

   

    const handleName = event => {
        setName(event.target.value);
    }
    const handleAddress = event => {
        setAddress(event.target.value);
    }
    const handlePhoneNum = event => {
        setPhone(event.target.value);}
        

        const handleCreateUser = event => {
            event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
        }
    return (
        <div className='login-container'>
        <div>
            <h2 className='form-tittle'>Shipping</h2>
            <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                    <label htmlFor="name">Name</label>
                    <input onBlur={handleName} type="text" name="email" id="" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddress} type="text" name="address" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="Phone Number"> Phone</label>
                    <input onBlur={handlePhoneNum} type="text" name="Phone" id="" required />
                </div>
                    <p style={{color:'red'}}>{error}</p>
        
                <input className='submit-btn' type="submit" value="Ad Shipping" />
            </form>
        </div>
    </div>
    );
};

export default Shipment;