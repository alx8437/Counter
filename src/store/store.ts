import {configureStore} from "@reduxjs/toolkit";
import {counterReducer, counterSlice} from "./counter-slice";

export const store = configureStore({
    reducer: {
        [counterSlice.name] : counterReducer
    }
})

export type AppStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store

