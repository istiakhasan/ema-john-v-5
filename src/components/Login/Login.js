import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const location=useLocation()
  const from = location.state?.from?.pathname || '/';
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleEmailBlur=(e)=>{
    setEmail(e.target.value)
  }
  const handlePasswordBlur=(e)=>{
    setPassword(e.target.value)
  }
  
  if (user) {
    navigate(from, {replace: true});
}
  const handleUserSignIn=(e)=>{
  e.preventDefault()
  signInWithEmailAndPassword(email,password)
  }
  return (
    <div className="from-container">
      <div>
        <h2 className="from-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} required type="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} required type="password" name="pasword" />
          </div>
          <input type="submit" value="Login" className="from-submit" />
        </form>
        <p>New to Ema-John?<Link className="from-link" to="/signup">Create an account</Link></p>
      </div>
    </div>
  );
};

export default Login;
