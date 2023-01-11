import React, { useState } from "react";
import "../../assets/styles/components/navbar.css";

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
  const [styleX, setstyleX] = useState({
    display: "block",
    fill: "none",
    height: 16 + "px",
    width: 16 + "px",
    stroke: "currentColor",
    strokeWidth: 4,
    overflow: "visible",
    transform: "rotate(270deg)",
  });

  const toggleLogin = () => {
    setIsLogin(!isLogin)
  }

  const toggleRegister = () => {
    setIsRegister(!isRegister)
  }

  return (
    <>
      <nav className="navbar">
        { !isRegister && !isLogin? ( <div>
            <a  href="#">
          <div onClick={toggleLogin} className="login-btn">
            <span>Login</span>
            <svg
              fill="none"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={styleX}
            >
              <g fill="none">
                <path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path>
              </g>
            </svg>
          </div>
        </a>
        <a href="#">
          <div onClick={toggleRegister} className="register-btn">
            <span>Register</span>
            <svg
              fill="none"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={styleX}
            >
              <g fill="none">
                <path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path>
              </g>
            </svg>
          </div>
        </a> 
        </div>
        ) : isLogin ? (
        <div className="login-form">
            <input type="email" className="email-input" name="email" required placeholder="Email"/>
            <input type="password" placeholder="Password" className="password-input" name="password" required />
            
            <div className="login-register-actions">
                <button onClick={toggleLogin}className="cancel-btn" type="submit">Cancel</button>
                <button className="next-btn" type="submit">Next</button>
            </div>
        </div>
        ) : isRegister ? (
        <div className="register-form">
            <input type="email" className="email-input" name="email" required placeholder="Email"/>
            <input type="password" className="password-input" name="password" placeholder="Password" required />
            <input type="tel" placeholder="Phone Number (optional)" className="phone-input" name="phoneNumber" />

            <div className="login-register-actions">
                <button onClick={toggleRegister} className="cancel-btn" type="submit">Cancel</button>
                <button className="next-btn" type="submit">Next</button>
            </div>
        </div>
        ) : null}
        

        

        
      </nav>
    </>
  );
};

export default Navbar;
