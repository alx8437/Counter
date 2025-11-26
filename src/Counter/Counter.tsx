import React from 'react';
import styles from './Counter.module.scss'
import {Button} from "../ui/Button";
import {useDispatch, useSelector} from "react-redux";
import {selectCounter} from "../store/selectors";
import {changeUserValueAC} from "../store/counter-slice";


export const Counter = () => {
    const {errorMessage, userValue, endValue, startValue} = useSelector(selectCounter);
    const dispatch = useDispatch();

    const hasError = !!errorMessage

    const increment = () => {
        const newValue = userValue + 1;
        dispatch(changeUserValueAC({newValue: newValue}));
    }

    const resetInitialValue = () => {
        dispatch(changeUserValueAC({newValue: startValue}));
    }

    const valueClassName = `${styles.counter__value} ${userValue === endValue ? styles.counter__error : ''}`

    return (
        <div className={styles.counter}>
            {hasError ? <p className={styles.counter__error}>{errorMessage}</p> : <strong className={valueClassName}>{userValue}</strong>}
            <div>
                <Button disabled={userValue === endValue || hasError} onClick={increment} className={styles.counter__button}>inc</Button>
                <Button disabled={userValue === startValue} onClick={resetInitialValue} className={styles.counter__button}>reset</Button>
            </div>
        </div>
    );
};

export default Counter;