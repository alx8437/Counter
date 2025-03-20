import React, { ChangeEvent, FC, useState, useEffect } from 'react';

type SettingPropsType = {
    startValue: number;
    endValue: number;
    setNewValues: (minValue: number, maxValue: number) => void;
    errorMessage: string;
    setErrorMessage: (error: string) => void;
};

export const Settings: FC<SettingPropsType> = ({ startValue, endValue, setNewValues, setErrorMessage }) => {
    const [minValue, setMinValue] = useState(startValue);
    const [maxValue, setMaxValue] = useState(endValue);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (minValue < 0 || maxValue < 0 || maxValue <= minValue) {
            setError(true);
            setErrorMessage('Incorrect value');
        } else {
            setError(false);
            setErrorMessage('');
        }
    }, [minValue, maxValue, setErrorMessage]);

    const handleChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: ChangeEvent<HTMLInputElement>) => {
        setter(Number(e.target.value));
    };

    return (
        <div>
            <div>
                MinValue
                <input className={error ? 'input__error' : ''} type="number" value={minValue} onChange={handleChange(setMinValue)} />
            </div>
            <div>
                MaxValue
                <input className={error ? 'input__error' : ''} type="number" value={maxValue} onChange={handleChange(setMaxValue)} />
            </div>
            <button disabled={error} onClick={() => setNewValues(minValue, maxValue)}>Set</button>
        </div>
    );
};
