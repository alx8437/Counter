import React, {ChangeEvent, FC, useState} from 'react';

type SettingPropsType = {
    startValue: number
    endValue: number
    setNewValues: (minValue: number, maxValue: number) => void
}

export const Settings:FC<SettingPropsType> = ({startValue, endValue, setNewValues}) => {
    const [minValue, setMinValue] = useState<number>(startValue)
    const [maxValue, setMaxValue] = useState<number>(endValue)

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget
        setMinValue(Number(value))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget
        setMaxValue(Number(value))
    }

    const setValues = () => {
        setNewValues(minValue, maxValue)
    }

    return (
        <div>
            <div>
                MinValue
                <input type="number" value={minValue} onChange={onChangeMinValue}/>
            </div>
            <div>
                MaxValue
                <input type="number" value={maxValue} onChange={onChangeMaxValue}/>
            </div>
            <button onClick={setValues}>Set</button>
        </div>
    );
};