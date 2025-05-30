import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import {Settings} from "./Settings/Settings";

function App() {
    const [startValue, setStartValue] = useState<number>(0);
    const [endValue, setEndValue] = useState<number>(5);
    const [userValue, setUserValue] = useState<number>(startValue);
    const [errorMessage, setErrorMessage] = useState<string>('')

    const setNewValues = (minValue: number, maxValue: number) => {
        setStartValue(minValue)
        setUserValue(minValue)
        setEndValue(maxValue)
    }

    const setValue = (newValue: number) => {
        setUserValue(newValue);
    }

    return (
        <div className="container">
            <Counter setValue={setValue} startValue={startValue} endValue={endValue} userValue={userValue} errorMessage={errorMessage}/>
            <Settings setErrorMessage={setErrorMessage} setNewValues={setNewValues} startValue={startValue} endValue={endValue} errorMessage={errorMessage} />
        </div>
    );
}

export default App;
