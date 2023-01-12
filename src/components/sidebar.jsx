import Navbar from "./navbar/navbar";
import "../assets/styles/components/sidebar.css"
import logo from "../assets/images/logo-2.png"
import { useInputChange } from "../custom-hook/useform";





const Sidebar = () => {
    const [input, handleInputChange, setInput] = useInputChange();

    return (
        <div className="sidebar">
            <div className="sidebar-inner-wrapper">
                <div className="sidebar-actions">
                    <div className="inner-action-wrapper">
                        <div className="logo-icon-wrapper">
                            <img className="logo-icon" src={logo} alt="expense logo" />
                            <p>Welcome to ExpensePro!</p>
                        </div>
                        <Navbar setInput={setInput} input={input} handleInputChange={handleInputChange}/>
                    </div>
                    
                </div>
                
    
                <div className="sidebar-footer">
                    <div className="logo-wrapper">
                        <img className="logo" src={require("../assets/images/full-logo-white-2.png")} alt="" />
                    </div>
                    <p className="sidebar-agreement">By logging in, you agree to our <span> terms of service</span> and <span> privacy policy</span>.</p>
                </div>
            </div>

        </div>
    )
}


export default Sidebar;