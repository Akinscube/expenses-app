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
    },
    emptyBudgetSuccess: state => {
        state.budgetStatus.budget = {};
        state.budgetStatus.code = "";
      },
  },
});

export const { updateBudgetSuccess, updateBudgetFailed, emptyBudgetSuccess } =
  budgetSlice.actions;

export const budgetAction = budgetSlice.actions;

export default budgetSlice;
