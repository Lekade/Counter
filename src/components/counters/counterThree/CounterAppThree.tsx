import React, {useEffect, useState} from 'react';
import {CounterThree} from "./CounterThree";
import SettingsThree from "./SettingsThree";
import {Wrapper} from "../counter/Counter.Styled";

type DataType = {
    startValue: number
    maxValue: number
    counter: number
    enabledSettingsMod: boolean
}

const CounterAppThree = () => {
    const counterThreeData = {
        startValue: 0,
        maxValue: 5,
        counter: 0,
        enabledSettingsMod: false
    }
    const [counterApp, setCounter] = useState<DataType>(counterThreeData)

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
                counter: newStartValue
            }))
        }
    }, [])
    const changeCounter = () => {
        let newData = {...counterApp, counter: ++counterApp.counter}
        setCounter(newData)
    }
    const resetCounter = () => {
        let newData = {...counterApp, counter: counterApp.startValue}
        setCounter(newData)
    }
    const changeSettings = (maxValue: number, startValue: number) => {
        setCounter(prevState => ({...prevState, maxValue, startValue, counter: startValue}))
        localStorage.setItem('startValue3', JSON.stringify(startValue))
        localStorage.setItem('maxValue3', JSON.stringify(maxValue))
    }
    const onOffSettingsMod = (enabledSettingsMod: boolean) => {
        setCounter(prevState =>({...prevState, enabledSettingsMod}))
    }
    return (
        <Wrapper>
            {
                counterApp.enabledSettingsMod
                    ? <SettingsThree
                        startValue={counterApp.startValue}
                        maxValue={counterApp.maxValue}
                        changeSettings={changeSettings}
                        onOffSettingsMod={onOffSettingsMod}
                    />
                    : <CounterThree
                        counter={counterApp.counter}
                        startValue={counterApp.startValue}
                        maxValue={counterApp.maxValue}
                        setCounter={changeCounter}
                        resetCounter={resetCounter}
                        onOffSettingsMod={onOffSettingsMod}
                    />
            }
        </Wrapper>
    );
};

export default CounterAppThree;