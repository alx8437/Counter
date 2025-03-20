import React, {FC} from 'react';
import styles from './Counter.module.scss'
import {Button} from "../ui/Button";

type CounterPropsType = {
    startValue: number
    endValue: number
    userValue: number
    setValue: (newValue: number) => void
    errorMessage: string
}

export const Counter:FC<CounterPropsType> = ({startValue, endValue, userValue, setValue, errorMessage}) => {
    const hasError = !!errorMessage

    const increment = () => {
        const newValue = userValue + 1
        setValue(newValue);
    }

    const resetInitialValue = () =>  setValue(startValue)

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