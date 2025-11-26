import { createSlice } from "@reduxjs/toolkit";

export type CounterInitialStateType = {
    startValue: number;
    endValue: number;
    userValue: number;
    errorMessage: string;
}

// export const changeStartValueAC = createAction<{newValue: number}>('counter/changeStartValue');
//
// export const changeEndValueAC = createAction<{newValue: number}>('counter/changeEndValue');
//
// export const changeUserValueAC = createAction<{newValue: number}>('counter/changeUserValue');
//
// export const setErrorMessageAC = createAction<{message: string}>('counter/setErrorMessage');

const initialState: CounterInitialStateType = {
    startValue: 1,
    endValue: 6,
    userValue: 1,
    errorMessage: ''
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        startValue: 1,
        endValue: 6,
        userValue: 1,
        errorMessage: ''
    } as CounterInitialStateType,
    reducers: create => ({
        changeStartValueAC: create.reducer<{newValue: number}>((state, action) => {
            state.startValue = action.payload.newValue
        }),
        changeEndValueAC: create.reducer<{newValue: number}>((state, action) => {
            state.endValue = action.payload.newValue
        }),
        changeUserValueAC: create.reducer<{newValue: number}>((state, action) => {
            state.userValue = action.payload.newValue
        }),
        setErrorMessageAC: create.reducer<{message: string}>((state, action) => {
            state.errorMessage = action.payload.message
        })
    })
})

export const {changeEndValueAC, changeStartValueAC,changeUserValueAC,setErrorMessageAC} = counterSlice.actions
export const counterReducer = counterSlice.reducer
