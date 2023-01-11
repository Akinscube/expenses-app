import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import combineReducer from "./combine-reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import ReduxPromise from "redux-promise"

const Store = configureStore({
    reducer: combineReducer,
}, composeWithDevTools(applyMiddleware(ReduxPromise)));


export default Store