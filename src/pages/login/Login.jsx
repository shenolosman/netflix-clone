import React from "react";
import "./Login.scss";
export default function Register() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="" className="logo" />
          <button className="loginBtn">Sign up</button>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginBtn">Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google Captcha to ensure you"re not a bot.<b> Learn More</b>
          </small>
        </form>
      </div>
    </div>
  );
}
