import Expenses from "../components/expenses/expenses"
import Sidebar from "../components/sidebar"
import "../assets/styles/pages/expenses-page.css"


const ExpensesPage = ()  => {

    return (
        <div className="expenses-page">
            <Sidebar />
            <Expenses />
            
        </div>
    )
}

export default ExpensesPage