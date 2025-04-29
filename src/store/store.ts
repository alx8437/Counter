import {combineReducers, legacy_createStore as createStore} from "redux";

const rootReducer = combineReducers({})

export type AppStateType =ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)