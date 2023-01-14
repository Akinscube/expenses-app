import { Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import './App.css';
import LandingPage from './pages/landing-page';
import ExpensesPage from './pages/expenses-page';
import { ProtectPage } from "./components/protect-page";
import { useSelector } from "react-redux";

function App() {

  const navigate = useNavigate()
  const userStatus = useSelector(state => state.auth.userStatus)

  return (
    <div className="App">
      {/* <LandingPage /> */}
      

      <Routes>
        <Route path="/" element={<LandingPage />} ></Route>
        <Route path="/ndashboard" element={<ExpensesPage />} ></Route>
        <Route path="/dashboard" element={
          <ProtectPage>
            <ExpensesPage />
          </ProtectPage>
        }></Route>
      </Routes>


      
    </div>
  );
}

export default App;
