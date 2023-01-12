import { createSlice } from "@reduxjs/toolkit";

const initialState = { expensesStatus: { expenses: [], code: "" } };

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    updateExpensesSuccess: (state, action) => {
      state.expensesStatus.expenses = action.payload;
      state.expensesStatus.code = "";
    },
    updateExpensesFailed: (state, action) => {
      state.expensesStatus.expenses = action.payload;
      state.expensesStatus.code = action.payload;
    },
  },
});

export const { updateExpensesSuccess, updateExpensesFailed } =
  expensesSlice.actions;

export const expensesAction = expensesSlice.actions;

export default expensesSlice;
