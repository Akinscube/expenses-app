import { useEffect, useState } from "react";
import "../../assets/styles/components/expenses.css"

import Modal from "../modal";
import Expense from "./expense";
import ExpenseForm from "./expense-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { updateExpensesSuccess } from "../../helper/duck/expenses";
import { useInputChange } from "../../custom-hook/useform";



const Expenses = () => {

    const [input, handleInputChange, setInput] = useInputChange();
    const [isDisabled, setIsDisabled] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    

    const expensesStatus = useSelector(state => state.expenses.expensesStatus)
    const expenses = expensesStatus.expenses

    const budgetStatus = useSelector(state => state.budget.budgetStatus)
    
    let budget 
    let budgetMonth

    if(Object.keys(budgetStatus.budget).length !== 0) {
     budget = budgetStatus?.budget?.currentBudget[(budgetStatus.budget.currentBudget).length -1]?.budget 
     budgetMonth = budgetStatus?.budget?.currentBudget[budgetStatus.budget.currentBudget.length -1]?.date
    }
    // console.log(expenses)

    const dispatch = useDispatch()

    

  

    const toggleModal = () => setIsOpen(!isOpen);


    const sortedExpenses = expenses.slice().sort((a, b) => {
        if(a.date < b.date) return -1;
        if(a.date > b.date) return 1;
        return 0;
    }) 


    const currentMonthExpenses = sortedExpenses.filter(expense => new Date(expense.date).getMonth() +1 === new Date().getMonth() +1 ) 
    
    const expensesArray = currentMonthExpenses.map(expense => +expense.amount)
    let totalMonthExpenses = 0
    let i=0;
    while(i <= (expensesArray.length - 1)){
        totalMonthExpenses = totalMonthExpenses + expensesArray[i] ;
        console.log(expensesArray[i])
        i++;
    }

    const budget70 = (((totalMonthExpenses / budget)*100) >= 70)
    const overBudget = (totalMonthExpenses > budget)

    console.log(budget70, overBudget)



    return (
        <div className="expenses">
            <div className="expenses-header">
                <h1 className="expenses-heading">Expenses</h1>
                <Modal isDisabled={isDisabled} isOpen={isOpen} setInput={setInput} toggleModal={toggleModal} input={input}>
                    <form id="form-id">
                        <ExpenseForm input={input} setIsDisabled={setIsDisabled} handleInputChange={handleInputChange} />
                    </form>
                </Modal>
                
            </div>
            <div className="expense-header-data">
                    <div className="header-date">DATE</div>
                    <div className="header-title">TITLE</div>
                    <div className="header-amount">AMOUNT</div>
                    <div className="expense-actions"></div>
                </div>
            <div id="expenses-content" className="expenses-content">
            
                {currentMonthExpenses.map(expense => (
                    <Expense toggleModal={toggleModal} key={expense.expenseId} id={expense.expenseId} date={expense.date} title={expense.title} amount={expense.amount} />
                ))}
                {Object.keys(sortedExpenses).length === 0 ? (<p className="empty-content">You have no expenses yet for {new Date().toLocaleString("en-us", {month: "long"} )}.</p>) : null}
            </div>

            <div className="expenses-footer">
            <div className="total-expenses-text">
                    <h5 >Total {new Date().toLocaleString("en-us", {month: "long"} )} Expenses: <span className={overBudget? "red-expenses" : budget70? "yellow-expenses" : null}> ₦{totalMonthExpenses.toLocaleString("en")}</span></h5>
                </div>
                <img className="expenses-footer-logo" src={require("../../assets/images/full-logo.png")} alt="" />
            </div>  
               
        </div>
    )
}

export default Expenses;