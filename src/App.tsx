import React, {useRef, useState} from 'react';
import './App.css';
import {CounterTwo} from "./components/counters/counterTwo/CounterTwo";
import CounterApp from "./components/counters/counter/CounterApp";

function App() {

    const [counterTwo, setCounterTwo] = useState<number>(0)
    const maxValue = useRef(5)


    const changeCounterTwo = () => {
        let newCount = counterTwo + 1
        setCounterTwo(newCount)
    }
    const resetCounterTwo = () => {
        setCounterTwo(0)
        maxValue.current = Math.ceil(Math.random() * (10 - 1) + 1)
    }

    return (
        <>
            <CounterApp/>
            {/*<div className={'wrapperTwo'}>*/}
            {/*    <CounterTwo  counter={counterTwo} maxValue={maxValue.current} setCounter={changeCounterTwo} resetCounter={resetCounterTwo}/>*/}
            {/*</div>*/}
        </>
    );
}

export default App;
