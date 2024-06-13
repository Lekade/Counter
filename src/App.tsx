import React, {useRef, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {CounterTwo} from "./components/counter/CounterTwo";

function App() {
    const[counter, setCounter] = useState<number>(0)
    const[counterTwo, setCounterTwo] = useState<number>(0)
    const maxValue = useRef(5)
    // const[maxValue, setMaxValue] = useState<number>(5)


    const changeCounter = () => {
        let newCount = counter + 1
        setCounter(newCount)
    }
    const changeCounterTwo = () => {
        let newCount = counterTwo + 1
        setCounterTwo(newCount)
    }
    const resetCounter = () => {
        setCounter(0)
    }
    const resetCounterTwo = () => {
        setCounterTwo(0)
        maxValue.current = Math.ceil(Math.random() * (10 - 1) + 1)
    }

  return (
      <>
          <div className={'wrapperOne'}>
              <Counter  counter={counter} setCounter={changeCounter} resetCounter={resetCounter}/>
          </div>
          <div className={'wrapperTwo'}>
              <CounterTwo  counter={counterTwo} maxValue={maxValue.current} setCounter={changeCounterTwo} resetCounter={resetCounterTwo}/>
          </div>
      </>
  );
}

export default App;
