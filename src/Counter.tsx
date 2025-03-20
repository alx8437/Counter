import React, {FC} from 'react';

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

    const valueClassName = `counter__value ${userValue === endValue ? 'error' : ''}`

    return (
        <div className='counter'>
            {hasError ? <p className="error">{errorMessage}</p> : <strong className={valueClassName}>{userValue}</strong>}
            <div>
                <button disabled={userValue === endValue || hasError} onClick={increment} className='counter__button'>inc</button>
                <button disabled={userValue === startValue} onClick={resetInitialValue} className='counter__button'>reset</button>
            </div>
        </div>
    );
};

export default Counter;