import {
  setDoc,
  collection,
  doc,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { updateExpensesSuccess, updateExpensesFailed } from "../../duck/expenses";
import { db } from "..";

const transaction = async (myCollection, uid) => {
    const trx = query(collection(db, myCollection), where("uid", "==", uid))
    const querySnapshot = await getDocs(trx)
    let userExpenses = {}
    querySnapshot.forEach(doc => {
        userExpenses = { ...doc.data(), id: doc.id }
    })
    return userExpenses
}

export const saveExpense = dispatch => async (e,  title, date, amount, uid, setInput) => {
    // e.preventDefault()
    console.log(date, title)
    let numDate
    if(!date) {
        numDate = new Date().getTime()
    }else {
    numDate = date.getTime();
    }

    const numAmount = amount.replace(/,/g, "")

    try {

        // console.log(numDate)
        const newExpenseRef = doc(collection(db, "Users-Expenses"))

    await setDoc(newExpenseRef, {
        title,
        uid,
        date: numDate,
        amount: numAmount,
        description: " ",
        category: " ",
        expenseId: newExpenseRef.id
    })

    
        const trx = query(collection(db, "Users-Expenses"), where("uid", "==", uid))
        const querySnapshot = await getDocs(trx)
        console.log(querySnapshot)
        let userExpenses = []
        querySnapshot.forEach(doc => {
            userExpenses.push({ ...doc.data() })
        })
        console.log(userExpenses)
    dispatch(updateExpensesSuccess(userExpenses))

    } catch (error) {
        dispatch(updateExpensesFailed(error))
    }
    setInput({})
}

export const updatedExpense = dispatch => async (uid, expenseId) => {

}

export const deleteExpense = dispatch => async (uid, expenseId) => {
    
}