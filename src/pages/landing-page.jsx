import Sidebar from "../components/sidebar";
import "../assets/styles/pages/landing-page.css"



const LandingPage = () => {
    
    return (
        <div className="landing-page">
            <Sidebar />
            <div className="hero-section">
                <div className="hero-inner-wrapper" >
                    <h1>Organize your spending data and take control of your finances</h1>
                    <img className="hero-image" src={require("../assets/images/hero-art.png")} alt="" />
                </div>
            </div>
        </div>
    )
}


export default LandingPage;