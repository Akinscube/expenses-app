import { useState } from "react";
import "../../assets/styles/components/expenses.css"
import { useInputChange } from "../../custom-hook/useform";
import Modal from "../layout/modal";
import Expense from "./expense";
import ExpenseForm from "./expense-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { updateExpensesSuccess } from "../../helper/duck/expenses";



const Expenses = () => {

    const expensesStatus = useSelector(state => state.expenses.expensesStatus)
    const expenses = expensesStatus.expenses

    // console.log(expenses)

    const dispatch = useDispatch()

    const [input, handleInputChange, setInput] = useInputChange();
    const [isDisabled, setIsDisabled] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
  

    const toggleModal = () => setIsOpen(!isOpen);


    const handleSave = () => {
        
        if(!input.date) {input.date = new Date()}
        dispatch(updateExpensesSuccess([...expenses, {id: uuidv4(), title:input.title, date:input.date.getTime(), amount:input.amount.replace(/,/g, "")} ]))
        setInput({})
    }



    
    
    const expensesArray = Array.from(expenses).map(expense => +expense.amount)
    let totalMonthExpenses = 0
    let i=0;
    while(i <= (expensesArray.length - 1)){
        totalMonthExpenses = totalMonthExpenses + expensesArray[i] ;
        console.log(expensesArray[i])
        i++;
    }

    const sortedExpenses = Array.from(expenses).slice().sort((a, b) => {
        if(a.date < b.date) return -1;
        if(a.date > b.date) return 1;
        return 0;
    }) 

    // console.log(sortedExpenses)
        

    // console.log(expenses)

    return (
        <div className="expenses">
            <div className="expenses-header">
                <h1>Expenses</h1>
                <Modal isDisabled={isDisabled} isOpen={isOpen} setInput={setInput} toggleModal={toggleModal} input={input}>
                    <form id="form-id">
                        <ExpenseForm input={input} setIsDisabled={setIsDisabled} handleInputChange={handleInputChange} />
                    </form>
                </Modal>
            </div>
            <div className="expenses-content">
                {/* <img style={{width:"700px"}} src={require("../../assets/images/hero-art.png")} alt="" /> */}
                {sortedExpenses.map(expense => (
                    <Expense toggleModal={toggleModal} key={expense.expenseId} date={expense.date} title={expense.title} amount={expense.amount} />
                ))}
                
            </div>

            <div className="expenses-footer">
            <div>
                    <h5>Total {new Date().toLocaleString("en-us", {month: "long"} )} Expenses: ₦{totalMonthExpenses.toLocaleString("en")}</h5>
                </div>
                <img className="expenses-footer-logo" src={require("../../assets/images/full-logo.png")} alt="" />
            </div>        
        </div>
    )
}

export default Expenses;