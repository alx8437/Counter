import React, { ChangeEvent, useState, useEffect } from 'react';
import styles from './Settings.module.scss';
import {Button} from "../ui/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    changeEndValueAC,
    changeStartValueAC,
    changeUserValueAC,
    selectCounter,
    setErrorMessageAC
} from "../store/counter-slice";


export const Settings = () => {
    const { endValue, startValue} = useSelector(selectCounter);
    const dispatch = useDispatch();

    const [minValue, setMinValue] = useState(startValue);
    const [maxValue, setMaxValue] = useState(endValue);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (minValue < 0 || maxValue < 0 || maxValue <= minValue) {
            setError(true);
            dispatch(setErrorMessageAC({message: 'Incorrect value'}));
        } else {
            setError(false);
            dispatch(setErrorMessageAC({message: ''}));
        }
    }, [minValue, maxValue, dispatch]);

    const handleChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        setter(value);
    };

    const setNewValues = () => {
        dispatch(changeStartValueAC({newValue: minValue}));
        dispatch(changeUserValueAC({newValue: minValue}));
        dispatch(changeEndValueAC({newValue: maxValue}));
    }

    return (
        <div className={styles.settings}>
            <div className={styles.inputContainer}>
                <span className={styles.inputLabel}>MinValue</span>
                <input className={error ? styles.error__input : ''} type="number" value={minValue} onChange={handleChange(setMinValue)} />
            </div>
            <div className={styles.inputContainer}>
                <span className={styles.inputLabel}>MaxValue</span>
                <input className={error ? styles.error__input : ''} type="number" value={maxValue} onChange={handleChange(setMaxValue)} />
            </div>
            <Button className={styles.button} disabled={error} onClick={setNewValues}>Set</Button>
        </div>
    );
};
