import {counterReducer} from "./counterReducer";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store

