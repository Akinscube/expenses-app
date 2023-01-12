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
      <div>
        <label htmlFor="title">Title*</label>
        <input type="text" required name="title" onChange={handleInputChange} />
      </div>
      <div>
        <DatePicker name={"date"} onChange={handleInputChange}/>
      </div>
      <div>
        <label htmlFor="amount">Amount*</label>
        <input type="text" name="amount" required onChange={handleInputChange} />
      </div>
      
    </div>
  );
};

export default ExpenseForm
