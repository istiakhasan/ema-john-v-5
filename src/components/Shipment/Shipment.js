import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
  const [user]=useAuthState(auth) 

  const [name,setName]=useState('');
  const [address,setAddress]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState(user.email);
 
  const [error,setError]=useState('');


  

//on blur for get the input value

 

  const handleNameBlur=e=>{
      setName(e.target.value)
  }
  const handleAddressBlur=e=>{
      setAddress(e.target.value)
  }
  const handlePhoneBlur=e=>{
      setPhone(e.target.value)
  }
 






//sign up
const handleCreateUser=e=>{
  e.preventDefault();
  const shipping={name,email,address,phone}
}

    return (
        <div className="from-container">
        <div>
          <h2 className="from-title">Shipping Information</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input value={user.email} readOnly required type="email" name="email" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Name</label>
              <input onBlur={handleNameBlur}  required type="text" name="name" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Address</label>
              <input onBlur={handleAddressBlur} required type="text" name="address" />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input onBlur={handlePhoneBlur} required type="tel" name="phone" />
            </div>
            <p style={{color:"red"}}>{error}</p>
            <input style={{marginBottom:"20px"}}  type="submit" value="Submit" className="from-submit" />
          </form>
        
        </div>
      </div>
    );
};

export default Shipment;