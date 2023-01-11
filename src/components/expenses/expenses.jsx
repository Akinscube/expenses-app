import { useState } from "react";
import "../../assets/styles/components/expenses.css"
import { useInputChange } from "../../custom-hook/useform";
import Modal from "../layout/modal";
import Expense from "./expense";
import ExpenseForm from "./expense-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { updateExpenseSuccess } from "../../helper/duck/expenses";



const Expenses = () => {

    const expensesStatus = useSelector(state => state.expenses.expensesStatus)
    const expenses = expensesStatus.expenses

    const dispatch = useDispatch()

    const [input, handleInputChange, setInput] = useInputChange();
    const [isDisabled, setIsDisabled] = useState(true);


    const handleSave = () => {
        
        if(!input.date) {input.date = new Date()}
        
        dispatch(updateExpenseSuccess([...expenses, {id: uuidv4(), title:input.title, date:input.date, total:input.total} ]))

        setInput({})
        // console.log(input)
    }

    
        const expensesArray = expenses.map(expense => +expense.total)
        let totalMonthExpenses = 0
        let i=0;
        while(i <= (expensesArray.length - 1)){
             totalMonthExpenses = totalMonthExpenses + expensesArray[i] ;
             console.log(expensesArray[i])
             i++;
        }
        

    // console.log(expenses)

    return (
        <div className="expenses">
            <div className="expenses-header">
                <h1>Expenses</h1>
                <Modal isDisabled={isDisabled} handleSave={handleSave}>
                    <form id="form-id">
                        <ExpenseForm input={input} setIsDisabled={setIsDisabled} handleInputChange={handleInputChange} />
                    </form>
                </Modal>
            </div>
            <div className="expenses-content">
                {/* <img style={{width:"700px"}} src={require("../../assets/images/hero-art.png")} alt="" /> */}
                {expenses.map(expense => (
                    <Expense key={expense.id} date={expense.date} title={expense.title} total={expense.total} />
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