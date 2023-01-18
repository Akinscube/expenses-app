import "../../assets/styles/components/budget.css"
import RadioButton from "../radio-input";
import { useInputChange } from "../../custom-hook/useform"
import { handleSaveBudget } from "../../helper/firebase/transactions/budget";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const Budget = () => {
    const [input, handleInputChange, setInput] = useInputChange()

    const dispatch = useDispatch()
    const userStatus = useSelector(state => state.auth.userStatus)
    const budgetStatus = useSelector(state => state.budget.budgetStatus)

    const budgetType = budgetStatus?.budget?.budgetType
    const budget = budgetStatus?.budget?.currentBudget[budgetStatus.budget.currentBudget.length -1]?.budget
    const budgetMonth = budgetStatus?.budget?.currentBudget[budgetStatus.budget.currentBudget.length -1]?.date
    const activeUser = userStatus.user

    

    const customBudgetHook = handleSaveBudget(dispatch)

    const currentMonth = new Date().toLocaleString("en", {month:"short", year:"numeric"})
    
    if(currentMonth === budgetMonth) input.budgetType = budgetType
    
    


    return (
        <div className="budget">
            <div className="budget-header">
                <h1 className="budget-heading">Budget</h1>
            </div>
            <div className="budget-content">
            <h3 className="choose-budget">Choose a budget type for {new Date().toLocaleString("en", {month:"long"})}.</h3>
            <p className="sub-text">Note: You won't be able to change your selection until a new month</p>
            <div className="budget-form">
               
        <RadioButton
          name="budgetType"
          value="flexible"
          checked={input.budgetType === "flexible"}
          onChange={handleInputChange}
        >
          Flexible
        </RadioButton>
        <RadioButton
          name="budgetType"
          value="fixed"
          checked={input.budgetType === "fixed"}
          onChange={handleInputChange}
        >
          Fixed
        </RadioButton>
      </div>

      {input.budgetType === "flexible"? (
        <div className="budget-form-input">
        <input
          className= "budget-input"
          type="text"
          name="budget"
          placeholder="Enter your Budget"
          onChange={handleInputChange}
          required
        />
        <button className="budget-input-btn" onClick={() => customBudgetHook(activeUser.uid, input.budget, input.budgetType)} type="submit">save</button>
      </div>
      ) : budgetType === "fixed" ? null :  input.budgetType === "fixed" ? (
        <div className="budget-form-input">
        <input
          className= "budget-input"
          type="text"
          name="budget"
          placeholder="Enter your Budget"
          onChange={handleInputChange}
          required
        />
        <button className="budget-input-btn" onClick={() => customBudgetHook(activeUser.uid, input.budget, input.budgetType)} type="submit">save</button>
      </div>
      ) : null}

      {budgetMonth === currentMonth ? budget? (
        <div className="current-budget">
            <h5>Your Budget for {new Date().toLocaleString("en", {month:"long"})} is: ₦{parseFloat(budget).toLocaleString('en')} </h5>
            <p className="current-budget-subtext">Your total expenses for {new Date().toLocaleString("en", {month:"long"})} will turn <span className="yellow-text"> yellow </span> when it reaches 70% of your Budget and <span className="red-text">red</span> when has gone over your budget  </p>
        </div>
      ) : null : null}
            </div>


            <div className="budget-footer">
                <img className="budget-footer-logo" src={require("../../assets/images/full-logo.png")} alt="" />
            </div>  
        </div>
    )
}

export default Budget;