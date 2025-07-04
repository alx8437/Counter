import {AppStateType} from "./store";

export  const selectCounter = (state: AppStateType) => state.counter;