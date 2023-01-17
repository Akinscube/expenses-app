import Sidebar from "../components/sidebar";
import "../assets/styles/pages/landing-page.css"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";



const LandingPage = () => {

    const [notification, setNotification] = useState("")
    const [showNotification, setShowNotification] = useState(false);

    const userStatus = useSelector(state => state.auth.userStatus) 
    let message = userStatus.code

    if(message){
        message = message.split("/")[1].split("-").join(" ")
        
    }

    

    useEffect(() => {
        if (message) {
            setShowNotification(true);
            setTimeout(() => {
            setShowNotification(false);
            }, 5000);
            
        }
    }, [message])


    
    // if (notification) {
    //     setShowNotification(true);
    //     setTimeout(() => {
    //       setShowNotification(false);
    //     }, 5000);
    // }
    
    
    return (
        <div className="landing-page">
            <Sidebar />

            <div className="hero-section">
                <div className="hero-inner-wrapper" >
                    <div className="floating-circle"></div>
                    {/* <img className="landing-logo" src={require("../assets/images/logo.png")} alt="" /> */}
                    <h1 className="hero-text">Organize your expenses and take control of your finance.</h1>
                    <img className="hero-image" src={require("../assets/images/hero-art.png")} alt="" />
                    <div className="clear"></div>
                </div>
            </div>
            <div className={`notification ${!showNotification ? 'hide' : ''}`}>{message}</div>
        </div>
    )
}


export default LandingPage;