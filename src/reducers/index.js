import todoReducer from "./todoReducers";

import {combineReducers } from "redux"

const rootReducer = combineReducers( {
    todo : todoReducer 
} )

export default rootReducer