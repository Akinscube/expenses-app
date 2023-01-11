import { combineReducers } from "redux";
import userSlice from "../helper/duck/auth";
import expensesSlice from "../helper/duck/expenses";

const auth = userSlice.reducer
const expenses = expensesSlice.reducer

const combineReducer = combineReducers({ auth, expenses })

export default combineReducer