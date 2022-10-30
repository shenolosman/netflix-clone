import React, { useState, useRef } from "react";
import "./Register.scss";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passRef = useRef();
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="" className="logo" />
          <button className="loginBtn">Sign up</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, Tv shows, and more</h1>
        <h2>Watch anywhere and any time.</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email" ref={emailRef} />
            <button className="registerBtn" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passRef} />
            <button className="registerBtn" onClick={handleFinish}>
              Start Membership
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
