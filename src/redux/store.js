import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import combineReducer from "./combine-reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import ReduxPromise from "redux-promise"
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";


const persistConfig = {
    key: "root",
    storage
}


const persistedReducer = persistReducer(persistConfig, combineReducer)

const Store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
}, composeWithDevTools(applyMiddleware(ReduxPromise)));

export const persistor = persistStore(Store)
export default Store