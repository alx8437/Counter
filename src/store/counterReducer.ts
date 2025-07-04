type CounterReducerStateType = {
    startValue: number;
    endValue: number;
    userValue: number;
    errorMessage: string;
}

type ChangeStartValueActionType = {
    type: 'CHANGE_START_VALUE',
    newValue: number
}

type ChangeEndValueActionType = {
    type: 'CHANGE_END_VALUE',
    newValue: number
}

type ChangeUserValueActionType = {
    type: 'CHANGE_USER_VALUE',
    newValue: number
}

type SetErrorMessageActionType = {
    type: 'SET_ERROR_MESSAGE',
    message: string,
}

const changeStartValueAC = (newValue: number): ChangeStartValueActionType => {
    return {
        type: 'CHANGE_START_VALUE',
        newValue
    } as const
}

const changeEndValueAC = (newValue: number): ChangeEndValueActionType => {
    return {
        type: 'CHANGE_END_VALUE',
        newValue
    } as const
}

const changeUserValueAC = (newValue: number): ChangeUserValueActionType => {
    return {
        type: 'CHANGE_USER_VALUE',
        newValue
    } as const
}

const setErrorMessageAC = (message: string): SetErrorMessageActionType => {
    return {
        type: "SET_ERROR_MESSAGE",
        message
    }
}

type ActionTypes = ChangeStartValueActionType | ChangeEndValueActionType | ChangeUserValueActionType | SetErrorMessageActionType

export const counterReducer = (state: CounterReducerStateType, action: ActionTypes): CounterReducerStateType => {
    switch (action.type) {
        case "CHANGE_START_VALUE": {
            return {
                ...state,
                startValue: action.newValue
            }
        }

        case "CHANGE_END_VALUE": {
            return {
                ...state,
                endValue: action.newValue
            }
        }

        case "CHANGE_USER_VALUE": {
            return {
                ...state,
                userValue: action.newValue
            }
        }

        case "SET_ERROR_MESSAGE": {
            return {
                ...state,
                errorMessage: action.message
            }
        }

        default:
            return state;

    }
}