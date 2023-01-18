import { useSelector } from "react-redux"
import { useState } from "react"
import Expense from "../expenses/expense"
import "../../assets/styles/components/report.css"



const Report = () => {


    const [showMore, setShowMore] = useState(false)


    const expensesStatus = useSelector(state => state.expenses.expensesStatus)
    const expenses = expensesStatus.expenses


    const sortedExpenses = expenses.slice().sort((a, b) => {
        if(a.date < b.date) return -1;
        if(a.date > b.date) return 1;
        return 0;
    }) 


    const firstMonth = sortedExpenses.filter(expense => (
        (new Date(expense.date).getMonth() +1) === (new Date().getMonth() - 4)
    ))

    const secondMonth = sortedExpenses.filter(expense => (
        new Date(expense.date).getMonth() +1 === new Date().getMonth() - 3
    ))

    const thirdMonth = sortedExpenses.filter(expense => (
        new Date(expense.date).getMonth() +1 === new Date().getMonth() - 2
    ))

    const fourthMonth = sortedExpenses.filter(expense => (
        new Date(expense.date).getMonth() +1 === new Date().getMonth() - 1
    ))

    const fifthMonth = sortedExpenses.filter(expense => (
        new Date(expense.date).getMonth() +1 === new Date().getMonth()
    ))

    


    const firstExpensesArray = firstMonth.map(expense => +expense.amount)
    let firstTotalExpenses = 0
    let first=0;
    while(first <= (firstExpensesArray.length - 1)){
        firstTotalExpenses = firstTotalExpenses + firstExpensesArray[first] ;
        // console.log(expensesArray[i])
        first++;
    }

    const secondExpensesArray = secondMonth.map(expense => +expense.amount)
    let secondTotalExpenses = 0
    let second=0;
    while(second <= (secondExpensesArray.length - 1)){
        secondTotalExpenses = secondTotalExpenses + secondExpensesArray[second] ;
        // console.log(expensesArray[i])
        second++;
    }

    const thirdExpensesArray = thirdMonth.map(expense => +expense.amount)
    let thirdTotalExpenses = 0
    let third=0;
    while(third <= (thirdExpensesArray.length - 1)){
        thirdTotalExpenses = thirdTotalExpenses + thirdExpensesArray[third] ;
        // console.log(expensesArray[i])
        third++;
    }

    const fourthExpensesArray = fourthMonth.map(expense => +expense.amount)
    let fourthTotalExpenses = 0
    let fourth=0;
    while(fourth <= (fourthExpensesArray.length - 1)){
        fourthTotalExpenses = fourthTotalExpenses + fourthExpensesArray[fourth] ;
        // console.log(expensesArray[i])
        fourth++;
    }

    const fifthExpensesArray = fifthMonth.map(expense => +expense.amount)
    let fifthTotalExpenses = 0
    let fifth=0;
    while(fifth <= (fifthExpensesArray.length - 1)){
        fifthTotalExpenses = fifthTotalExpenses + fifthExpensesArray[fifth] ;
        // console.log(expensesArray[i])
        fifth++;
    }

    const isLastFiveMonths = sortedExpenses.filter(expense => (new Date(expense.date).getMonth() +1 > new Date().getMonth() - 3)  && (new Date(expense.date).getMonth() +1 < new Date().getMonth() +1))
    console.log(isLastFiveMonths)


    return (
        <div className="report">
            <div className="report-header">
                <h1 className="report-heading">Report</h1>
            </div>
            <div className="report-content">
                    {firstMonth.length === 0 ? null : (
                        <div className="month-expenses">
                        <div>{new Date(firstMonth[0].date).toLocaleString("en-us", {month: "long"})}</div>
                        {firstMonth.map(expense => (
                            <Expense key={expense.expenseId} id={expense.expenseId} date={expense.date} title={expense.title} amount={expense.amount} />
                        ))}
                    <div className="total-month-expenses">Total Expenses: ₦{firstTotalExpenses.toLocaleString("en")}</div>
                    </div>
                    )}
                    {secondMonth.length === 0 ? null : (
                        <div className="month-expenses">
                        <div>{new Date(secondMonth[0].date).toLocaleString("en-us", {month: "long"})}</div>
                        {secondMonth.map(expense => (
                            <Expense key={expense.expenseId} id={expense.expenseId} date={expense.date} title={expense.title} amount={expense.amount} />
                        ))}
                    <div className="total-month-expenses">Total Expenses: ₦{secondTotalExpenses.toLocaleString("en")}</div>
                    </div>
                    )}
                    {thirdMonth.length === 0 ? null : (
                        <div className="month-expenses">
                        <div>{new Date(thirdMonth[0].date).toLocaleString("en-us", {month: "long"})}</div>
                        {thirdMonth?.map(expense => (
                            <Expense key={expense.expenseId} id={expense.expenseId} date={expense.date} title={expense.title} amount={expense.amount} />
                        ))}
                    <div className="total-month-expenses">Total Expenses: ₦{thirdTotalExpenses.toLocaleString("en")}</div>
                    </div>
                    )}
                    {fourthMonth.length === 0 ? null : (
                        <div className="month-expenses">
                        <div>{new Date(fourthMonth[0].date).toLocaleString("en-us", {month: "long"})}</div>
                        {fourthMonth?.map(expense => (
                            <Expense key={expense.expenseId} id={expense.expenseId} date={expense.date} title={expense.title} amount={expense.amount} />
                        ))}
                    <div className="total-month-expenses">Total Expenses: ₦{fourthTotalExpenses.toLocaleString("en")}</div>
                    </div>
                    )}
                    {fifthMonth.length === 0 ? null : (
                        <div className="month-expenses">
                        <div>{new Date(fifthMonth[0].date).toLocaleString("en-us", {month: "long"})}</div>
                        {fifthMonth?.map(expense => (
                            <Expense key={expense.expenseId} id={expense.expenseId} date={expense.date} title={expense.title} amount={expense.amount} />
                        ))}
                    <div className="total-month-expenses">Total Expenses: ₦{fifthTotalExpenses.toLocaleString("en")}</div>
                    </div>
                    )}
                    
                    {isLastFiveMonths.length === 0 ? (<p className="empty-report">You have no previous month expenses report yet.</p>) : null}
            </div>


            <div className="report-footer">
                <img className="report-footer-logo" src={require("../../assets/images/full-logo.png")} alt="" />
            </div>  
            
        </div>
    )
}


export default Report;