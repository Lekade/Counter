import React, {useEffect, useState} from 'react';
import {Counter} from "./Counter";
import Settings from "./Settings";
import {Wrapper} from "./Counter.Styled";

type DataType = {
    startValue : number
    maxValue: number
    data: number
    enableChangingSettings: boolean
    errorChangingSettings: boolean
}

const CounterApp = () => {
    const counterData = {
        startValue : 0,
        maxValue: 5,
        data: 0,
        enableChangingSettings: false,
        errorChangingSettings: false
    }
    const [counter, setCounter] = useState<DataType>(counterData)

    useEffect(()=>{
        const localStorageStartValue = localStorage.getItem('startValue')
        const localStorageMaxValue = localStorage.getItem('maxValue')
        if(localStorageStartValue && localStorageMaxValue){
            const newStartValue = JSON.parse(localStorageStartValue)
            const newMaxValue = JSON.parse(localStorageMaxValue)
            setCounter(prevState => ({...prevState, startValue: newStartValue, maxValue: newMaxValue, data: newStartValue}))
        }
    }, [])

    const changeCounter = () => {
        let newData = {...counter, data: ++counter.data}
        setCounter(newData)
    }
    const resetCounter = () => {
        let newData = {...counter, data: counter.startValue}
        setCounter(newData)
    }
    const changeSettings = (maxValue: number, startValue: number) => {
        setCounter( prevState => ({...prevState, maxValue, startValue, data: startValue }))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    const onOffSettings = (onOff: boolean, params: string) => {
        setCounter(prevState =>({...prevState, [params] : onOff}))
    }
    return (
        <Wrapper>
            <Settings
                startValue={counter.startValue}
                maxValue={counter.maxValue}
                changeSettings={changeSettings}
                enableChangingSettings={counter.enableChangingSettings}
                errorChangingSettings={counter.errorChangingSettings}
                onOffSettings={onOffSettings}
            />
            <Counter
                counter={counter.data}
                startValue={counter.startValue}
                maxValue={counter.maxValue}
                setCounter={changeCounter}
                resetCounter={resetCounter}
                enableChangingSettings={counter.enableChangingSettings}
                errorChangingSettings={counter.errorChangingSettings}
            />
        </Wrapper>
    );
};

export default CounterApp;