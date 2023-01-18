import { createSlice } from "@reduxjs/toolkit";

const initialState = { budgetStatus: { budget: {}, code: "" } };

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    updateBudgetSuccess: (state, action) => {
      state.budgetStatus.budget = action.payload;
      state.budgetStatus.code = "";
    },
    updateBudgetFailed: (state, action) => {
      state.budgetStatus.budget = action.payload;
      state.budgetStatus.code = action.payload;
    }
  },
});

export const { updateBudgetSuccess, updateBudgetFailed } =
  budgetSlice.actions;

export const budgetAction = budgetSlice.actions;

export default budgetSlice;
