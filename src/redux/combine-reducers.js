import { combineReducers } from "redux";
import userSlice from "../helper/duck/auth";
import expensesSlice from "../helper/duck/expenses";
import budgetSlice from "../helper/duck/budget";

const auth = userSlice.reducer
const expenses = expensesSlice.reducer
const budget = budgetSlice.reducer

const combineReducer = combineReducers({ auth, expenses, budget })

export default combineReducer