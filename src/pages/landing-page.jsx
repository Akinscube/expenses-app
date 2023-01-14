import Sidebar from "../components/sidebar";
import "../assets/styles/pages/landing-page.css"



const LandingPage = () => {
    
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
        </div>
    )
}


export default LandingPage;