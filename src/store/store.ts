import {configureStore} from "@reduxjs/toolkit";
import {counterReducer, counterSlice} from "./counter-slice";
import { localStorageMiddleware, loadStateFromLocalStorage } from './localStorageMiddleware';

const preloadedState = {
    counter: loadStateFromLocalStorage()
};

export const store = configureStore({
    reducer: {
        [counterSlice.name] : counterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
    preloadedState,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store

