import React, {FC} from 'react';

type CounterPropsType = {
    startValue: number
    endValue: number
    userValue: number
    setValue: (newValue: number) => void
}

export const Counter:FC<CounterPropsType> = ({startValue, endValue, userValue, setValue}) => {
    const increment = () => {
        const newValue = userValue + 1
        setValue(newValue);
    }

    const resetInitialValue = () => {
        setValue(startValue)
    }

    const inputClassName = `counter__input ${userValue === endValue ? 'error' : ''}`

    return (
        <div className='counter'>
            <input value={userValue} className={inputClassName} type="text"/>
            <div>
                <button disabled={userValue === endValue} onClick={increment} className='counter__button'>inc</button>
                <button disabled={userValue === startValue} onClick={resetInitialValue} className='counter__button'>reset</button>
            </div>
        </div>
    );
};

export default Counter;