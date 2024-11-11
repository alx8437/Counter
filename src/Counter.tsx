import React, {useState} from 'react';

export const Counter = () => {
    const minValue = 0;
    const maxValue = 5;
    const [value, setValue] = useState<number>(minValue);

    const increment = () => {
        const newValue = value + 1
        setValue(newValue);
    }

    const resetInitialValue = () => {
        setValue(minValue)
    }

    const inputClassName = `counter__input ${value === maxValue ? 'error' : ''}`

    return (
        <div className='counter'>
            <input value={value} className={inputClassName} type="text"/>
            <div>
                <button disabled={value === maxValue} onClick={increment} className='counter__button'>inc</button>
                <button disabled={value === minValue} onClick={resetInitialValue} className='counter__button'>reset</button>
            </div>
        </div>
    );
};

export default Counter;