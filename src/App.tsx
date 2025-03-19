import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import {Settings} from "./Settings";

function App() {
    const [startValue, setStartValue] = useState<number>(0);
    const [endValue, setEndValue] = useState<number>(5);

    const setNewValues = (minValue: number, maxValue: number) => {
        setStartValue(minValue)
        setEndValue(maxValue)
    }

    return (
        <div className="container">
            <Counter startValue={startValue} endValue={endValue}/>
            <Settings setNewValues={setNewValues} startValue={startValue} endValue={endValue} />
        </div>
    );
}

export default App;
