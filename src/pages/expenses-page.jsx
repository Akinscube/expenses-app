import Expenses from "../components/expenses/expenses"
import Sidebar from "../components/sidebar"
import "../assets/styles/pages/expenses-page.css"
import ExpensesSidebar from "../components/expenses/expenses-sidebar"


const ExpensesPage = ()  => {

    return (
        <div className="expenses-page">
            <ExpensesSidebar />
            <Expenses />
            
        </div>
    )
}

export default ExpensesPage