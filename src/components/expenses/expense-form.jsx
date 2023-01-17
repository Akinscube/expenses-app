import { useEffect } from "react";
import "../../assets/styles/components/expense-form.css"
import DatePicker from "../date-picker";

const ExpenseForm = (props) => {
    const {setIsDisabled, input, handleInputChange} = props
    
    const isIncomplete = !input.title || !input.amount || isNaN(input.amount.replace(/,/g, ""))
   
    useEffect(() => {
        setIsDisabled(isIncomplete)
      }, [isIncomplete])


  return (
    <div className="expense-form">
      <div className="expense-input">
        <label className="form-label" htmlFor="title">Title*</label>
        <input className="form-input" type="text" required name="title" onChange={handleInputChange} />
      </div>
      <div className="expense-input">
        <DatePicker name={"date"} onChange={handleInputChange}/>
      </div>
      <div className="expense-input">
        <label className="form-label" htmlFor="amount">Amount*</label>
        <input className="form-input" type="text" name="amount" required onChange={handleInputChange} />
      </div>
      
    </div>
  );
};

export default ExpenseForm
