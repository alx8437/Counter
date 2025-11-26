import {
    changeEndValueAC,
    changeStartValueAC,
    changeUserValueAC,
    counterReducer,
    CounterInitialStateType, setErrorMessageAC
} from "./counter-slice";


describe('counterReducer', () => {
    const initialState: CounterInitialStateType = {
        startValue: 0,
        endValue: 5,
        userValue: 0,
        errorMessage: '',
    };

    it('should handle CHANGE_START_VALUE', () => {
        const newStartValue = 2;
        const action = changeStartValueAC({newValue: newStartValue});
        const expectedState = {
            ...initialState,
            startValue: newStartValue,
        };

        expect(counterReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle CHANGE_END_VALUE', () => {
        const newEndValue = 10;
        const action = changeEndValueAC({newValue: newEndValue});
        const expectedState = {
            ...initialState,
            endValue: newEndValue,
        };

        expect(counterReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle CHANGE_USER_VALUE', () => {
        const newUserValue = 3;
        const action = changeUserValueAC({newValue: newUserValue});
        const expectedState = {
            ...initialState,
            userValue: newUserValue,
        };

        expect(counterReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_ERROR_MESSAGE', () => {
        const errorMessage = 'Invalid range';
        const action = setErrorMessageAC({message: errorMessage});
        const expectedState = {
            ...initialState,
            errorMessage,
        };

        expect(counterReducer(initialState, action)).toEqual(expectedState);
    });

    it('should return current state for unknown action', () => {
        const action = { type: 'UNKNOWN_ACTION' } as any;
        expect(counterReducer(initialState, action)).toEqual(initialState);
    });

    // Дополнительные тесты для проверки нескольких действий
    it('should handle multiple actions correctly', () => {
        let state = initialState;

        state = counterReducer(state, changeStartValueAC({newValue: 1}));
        expect(state.startValue).toBe(1);

        state = counterReducer(state, changeEndValueAC({newValue: 10}));
        expect(state.endValue).toBe(10);

        state = counterReducer(state, changeUserValueAC({newValue: 5}));
        expect(state.userValue).toBe(5);

        state = counterReducer(state, setErrorMessageAC({message: 'Error occurred'}));
        expect(state.errorMessage).toBe('Error occurred');
    });
});