
import { useDispatch, useSelector } from "react-redux";
import "../../assets/styles/components/expenses-sidebar.css"
import { useNavigate } from "react-router-dom"
import { useInputChange } from "../../custom-hook/useform";
import { handleSignOut } from "../../helper/firebase/transactions/auth";
import ExpensesNavbar from "../navbar/expenses-navbar";



const ExpensesSidebar = (props) => {
    const { isSidebar, showBudget, showExpenses, showReport, handleBudget, handleReport, handleExpenses, smScreen } = props
    const [input, handleInputChange, setInput] = useInputChange();

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const customSignOutHook = handleSignOut(dispatch, navigate)
    const userStatus = useSelector(state => state.auth.userStatus)
    
    console.log(userStatus.userNameInput)
    return (
        <div className={isSidebar? "expenses-sidebar2 show" : smScreen? "expenses-sidebar2" : "expenses-sidebar"}>
            <div className="expenses-sidebar-inner-wrapper">
                <div className="name-section">
                    {(userStatus.userType === "individual") ? (<h3>Hi, {userStatus.userNameInput}</h3>) : (userStatus.userType === "familyGroup")? (<h3>{userStatus.userNameInput.toUpperCase()}s</h3>) : (<h3>{userStatus.userNameInput}</h3>)}
                </div>

                <div className="expenses-sidebar-actions">
                    <div className="expenses-inner-action-wrapper">
                        
                        <ExpensesNavbar handleBudget={handleBudget} showBudget={showBudget} showExpenses={showExpenses} showReport={showReport} handleExpenses={handleExpenses} handleReport={handleReport} />
                    </div>
                    
                </div>
                
    
                <div className="expenses-sidebar-footer">
                    <div onClick={() => customSignOutHook()} className="logout-btn">
    
                        <span className="logout">LOGOUT</span>
                    </div>
                    <svg version="1.0" onClick={() => customSignOutHook()}  className="logout-btn-small" xmlns="http://www.w3.org/2000/svg" width="40.000000pt" height="40.000000pt" viewBox="0 0 40.000000 40.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,40.000000) scale(0.003906,-0.003906)"  stroke="none">
                            <path d="M2320 8890 c-746 -134 -1307 -716 -1406 -1460 -20 -156 -20 -4464 0
                            -4620 100 -748 667 -1333 1417 -1461 112 -19 156 -20 1125 -16 999 3 1010 3
                            1106 25 460 105 823 351 1079 730 154 229 250 497 278 781 14 137 14 516 0
                            583 -28 129 -114 240 -234 299 -59 29 -80 34 -140 34 -58 0 -81 -6 -136 -32
                            -81 -40 -169 -130 -206 -210 -27 -58 -27 -59 -34 -383 -6 -282 -9 -337 -28
                            -413 -79 -330 -341 -581 -671 -643 -64 -12 -243 -14 -1096 -12 l-1019 3 -85
                            29 c-153 51 -257 114 -359 217 -111 112 -188 250 -228 405 -17 65 -18 204 -18
                            2374 0 2170 1 2309 18 2374 78 306 293 530 603 629 69 21 72 22 1079 25 738 2
                            1030 0 1085 -8 335 -53 610 -310 691 -647 19 -76 22 -131 28 -413 7 -324 7
                            -325 34 -383 37 -80 125 -170 206 -210 55 -26 78 -32 136 -32 60 0 81 5 140
                            34 120 59 206 170 234 299 14 67 14 446 0 583 -28 283 -124 550 -278 781 -252
                            376 -619 625 -1079 730 -96 22 -105 22 -1117 24 -961 3 -1026 2 -1125 -16z"/>
                            <path d="M7189 7191 c-192 -48 -342 -253 -304 -416 27 -118 38 -131 571 -665
                            l504 -505 0 -53 0 -52 -2492 0 c-2661 0 -2536 2 -2634 -48 -123 -63 -219 -208
                            -219 -332 0 -124 96 -269 219 -332 98 -50 -27 -48 2634 -48 l2492 0 0 -52 0
                            -53 -504 -505 c-533 -534 -544 -547 -571 -665 -38 -163 112 -368 304 -416 54
                            -14 73 -14 115 -4 125 29 105 11 1044 948 510 510 899 906 921 939 21 31 46
                            86 56 122 17 63 17 69 0 132 -10 36 -35 91 -56 122 -22 33 -411 429 -921 939
                            -939 937 -919 919 -1044 948 -42 10 -61 10 -115 -4z"/>
                        </g>
                    </svg>
                    <div className="expenses-logo-wrapper">
                        <img className="logo-icon-small" src={require("../../assets/images/logo-2.png")} alt="expense logo" />
                        <img className="expenses-logo" src={require("../../assets/images/full-logo-white-2.png")} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}


export default ExpensesSidebar;