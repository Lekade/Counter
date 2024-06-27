import React, {useEffect, useState} from 'react';
import {CounterThree} from "./CounterThree";
import SettingsThree from "./SettingsThree";
import {Wrapper} from "../counter/Counter.Styled";

type DataType = {
    startValue: number
    maxValue: number
    data: number
    enableChangingSettings: boolean
    errorChangingSettings: boolean
}

const CounterAppThree = () => {
    const counterThreeData = {
        startValue: 0,
        maxValue: 5,
        data: 0,
        enableChangingSettings: false,
        errorChangingSettings: false,

    }
    const [counter, setCounter] = useState<DataType>(counterThreeData)

    useEffect(() => {
        const localStorageStartValue = localStorage.getItem('startValue3')
        const localStorageMaxValue = localStorage.getItem('maxValue3')
        if (localStorageStartValue && localStorageMaxValue) {
            const newStartValue = JSON.parse(localStorageStartValue)
            const newMaxValue = JSON.parse(localStorageMaxValue)
            setCounter(prevState => ({
                ...prevState,
                startValue: newStartValue,
                maxValue: newMaxValue,
                data: newStartValue
            }))
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
        setCounter(prevState => ({...prevState, maxValue, startValue, data: startValue}))
        localStorage.setItem('startValue3', JSON.stringify(startValue))
        localStorage.setItem('maxValue3', JSON.stringify(maxValue))
    }
    const onOffSettings = (onOff: boolean, params: string) => {
        setCounter(prevState => ({...prevState, [params]: onOff}))
    }
    return (
        <Wrapper>
            {
                counter.enableChangingSettings
                    ? <SettingsThree
                        startValue={counter.startValue}
                        maxValue={counter.maxValue}
                        changeSettings={changeSettings}
                        enableChangingSettings={counter.enableChangingSettings}
                        errorChangingSettings={counter.errorChangingSettings}
                        onOffSettings={onOffSettings}
                    />
                    : <CounterThree
                        counter={counter.data}
                        startValue={counter.startValue}
                        maxValue={counter.maxValue}
                        setCounter={changeCounter}
                        resetCounter={resetCounter}
                        onOffSettings={onOffSettings}
                    />
            }
        </Wrapper>
    );
};

export default CounterAppThree;