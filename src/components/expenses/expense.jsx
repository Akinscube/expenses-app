import "../../assets/styles/components/expense.css"


const Expense = (props) => {

    const {date, title, total} = props

    const expenseDate = date.toLocaleString("en-us", {
        month: "short",
        day: "numeric"
    })

    return (
        <div className="expense">
            <div className="expense-inner-wrapper">
                <div className="expense-date">
    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <h5>{expenseDate}</h5></div>
                <div className="expense-title">{title}</div>
                <div className="expense-total">₦ {parseFloat(total).toLocaleString("en")}</div>
                <div className="expense-actions">
                    <button className="expense-edit">edit</button>
                    <button className="expense-delete">delete</button>
                </div>
            </div>
            
        </div>
    )
}


export default Expense