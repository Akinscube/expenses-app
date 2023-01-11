import { createSlice } from "@reduxjs/toolkit";

const initialState = { expensesStatus: { expenses: [], code: "" } };

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    updateExpenseSuccess: (state, action) => {
      state.expensesStatus.expenses = action.payload;
      state.expensesStatus.code = "";
    },
    updateExpenseFailed: (state, action) => {
      state.expensesStatus.expenses = action.payload;
      state.expensesStatus.code = action.payload.code;
    },
  },
});

export const { updateExpenseSuccess, updateExpenseFailed } =
  expensesSlice.actions;


export default expensesSlice