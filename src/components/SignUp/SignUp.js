import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'

import auth from '../../firebase.init'


const SignUp = () => {
  const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [error,setError]=useState('');

  const navigate=useNavigate()
  

//on blur for get the input value

  const hadleEmailBlur=e=>{
    setEmail(e.target.value)
  }
  const hadlePasswordBlur=e=>{
    setPassword(e.target.value)
  }
  const hadleConfirmPasswordBlur=e=>{
    setConfirmPassword(e.target.value)
  }





  if(user){
  navigate('/shop')
  }

//sign up
const handleCreateUser=e=>{
  e.preventDefault();
  if(password !== confirmPassword){
    setError("Password Didn't match")
    return;
  }
  if(password.length <6){
    setError("password must be 6 charachters or longer")
  }

  createUserWithEmailAndPassword(email,password)
 

}



    return (
        <div className="from-container">
        <div>
          <h2 className="from-title">Signup</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={hadleEmailBlur} required type="email" name="email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input onBlur={hadlePasswordBlur} required type="password" name="pasword" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Confirm Password</label>
              <input onBlur={hadleConfirmPasswordBlur} required type="password" name="confirm-pasword" />
            </div>
            <p style={{color:"red"}}>{error}</p>
            <input  type="submit" value="Signup" className="from-submit" />
          </form>
          <p>Already Have An account?<Link className="from-link" to="/login">Login</Link></p>
        </div>
      </div>
    );
};

export default SignUp;