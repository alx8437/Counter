import React, {FC, useState} from 'react';

type CounterPropsType = {
    startValue: number
    endValue: number
}

export const Counter:FC<CounterPropsType> = ({startValue, endValue}) => {
    const [value, setValue] = useState<number>(startValue);

    const increment = () => {
        const newValue = value + 1
        setValue(newValue);
    }

    const resetInitialValue = () => {
        setValue(startValue)
    }

    const inputClassName = `counter__input ${value === endValue ? 'error' : ''}`

    return (
        <div className='counter'>
            <input value={value} className={inputClassName} type="text"/>
            <div>
                <button disabled={value === endValue} onClick={increment} className='counter__button'>inc</button>
                <button disabled={value === startValue} onClick={resetInitialValue} className='counter__button'>reset</button>
            </div>
        </div>
    );
};

export default Counter;