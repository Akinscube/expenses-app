import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import "../../assets/styles/components/navbar.css";
import { handleLogin, handleSignup } from "../../helper/firebase/transactions/auth";

const Navbar = (props) => {
  const { input, handleInputChange, setInput } = props

  const userStatus = useSelector(state => state.auth.userStatus)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const customSignupHook = handleSignup(dispatch, navigate)
  const customLoginHook = handleLogin(dispatch, navigate )


  const submitButtonRef = useRef(null);
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
    setInput({})
  }

  

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitButtonRef.current.click();
    }
  };

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
          <form onKeyDown={handleSubmit}>
            <input type="email" className="email-input" onChange={handleInputChange} name="email" required placeholder="Email"/>
            <input type="password" placeholder="Password" onChange={handleInputChange} className="password-input" name="password" required />
            
            <div className="login-register-actions">
                <button onClick={toggleLogin}className="cancel-btn" type="submit">Cancel</button>
                <button className="next-btn" ref={submitButtonRef} onClick={(e) => customLoginHook(e, input.email, input.password, userStatus)} type="submit">Login</button>
            </div>
          </form>
        </div>
        ) : isRegister ? (
        <div className="register-form">
          <form onKeyDown={handleSubmit}>
            <select name="userType" defaultValue={""} onChange={handleInputChange} className="type-input" required>
              <option disabled  className="faded-option" value="">Select User Type</option>
              <option  value="individual">Individual</option>
              <option value="familyGroup">Family / Group</option>
              <option value="company">Company</option>
            </select>
            {input.userType ? (
              <div>
                <input type="text" placeholder={(input.userType === "company") ? "Company Name" : (input.userType === "familyGroup") ? "Family / Group Name" : "Nickname"} onChange={handleInputChange} className="nickname-input" name="nameInput"  required/>
                <input type="email" className="email-input" onChange={handleInputChange} name="email" required placeholder="Email"/>
                <input type="password" className="password-input" onChange={handleInputChange} name="password" placeholder="Password" required />
                <input type="password" className={(input.password !== input.password2)? "password-input error-input" : "password-input"} onChange={handleInputChange} name="password2" placeholder="Password" required />
                {input.password !== input.password2 ? (<p className="error-text">password does not match</p>) :null}
              </div>
            ) : null}
                <div className="login-register-actions">
                  <button onClick={toggleRegister} className="cancel-btn" type="submit">Cancel</button>
                  {input.userType ? (<button className="next-btn"  ref={submitButtonRef} onClick={(e) => customSignupHook(e, input.email, input.password, input.nameInput, input.userType, userStatus, setIsRegister)} type="submit">Register</button>) : null}
                </div>
              

            

            
          </form>
        </div>
        ) : null}
        

        

        
      </nav>
    </>
  );
};

export default Navbar;
