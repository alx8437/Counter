import {createAction, createReducer} from "@reduxjs/toolkit";

export type CounterReducerStateType = {
    startValue: number;
    endValue: number;
    userValue: number;
    errorMessage: string;
}

export const changeStartValueAC = createAction<{newValue: number}>('counter/changeStartValue');

export const changeEndValueAC = createAction<{newValue: number}>('counter/changeEndValue');

export const changeUserValueAC = createAction<{newValue: number}>('counter/changeUserValue');

export const setErrorMessageAC = createAction<{message: string}>('counter/setErrorMessage');

const initialState: CounterReducerStateType = {
    startValue: 1,
    endValue: 6,
    userValue: 1,
    errorMessage: ''
}

export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeStartValueAC, (state, action) => {
            state.startValue = action.payload.newValue
        })
        .addCase(changeEndValueAC, (state, action) => {
            state.endValue = action.payload.newValue
        })
        .addCase(changeUserValueAC, (state, action) => {
            state.userValue = action.payload.newValue
        })
        .addCase(setErrorMessageAC, (state, action) => {
            state.errorMessage = action.payload.message
        })
})

