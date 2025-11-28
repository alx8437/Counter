import {Middleware} from '@reduxjs/toolkit';
import {CounterInitialStateType, initialState} from './counter-slice';

const COUNTER_STORAGE_KEY = 'counter-state';

export const localStorageMiddleware: Middleware = (store) => (next) => (action: any) => {
    const result = next(action);

    // Сохраняем состояние после каждого действия, связанного со счетчиком
    if (action.type.startsWith('counter/')) {
        const state = store.getState();
        localStorage.setItem(COUNTER_STORAGE_KEY, JSON.stringify(state.counter));
    }

    return result;
};

// Функция для загрузки состояния из LocalStorage
export const loadStateFromLocalStorage = (): CounterInitialStateType => {
    try {
        const serializedState = localStorage.getItem(COUNTER_STORAGE_KEY);
        if (serializedState === null) {
            return initialState;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.warn('Could not load state from localStorage', err);
        return initialState;
    }
};