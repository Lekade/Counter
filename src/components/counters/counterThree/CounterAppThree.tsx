import React, {useEffect, useState} from 'react';
import {CounterThree} from "./CounterThree";
import SettingsThree from "./SettingsThree";
import {Wrapper} from "../counter/Counter.Styled";

type DataType = {
    startValue: number
    maxValue: number
    data: number
    enabledSettingsMod: boolean
}

const CounterAppThree = () => {
    const counterThreeData = {
        startValue: 0,
        maxValue: 5,
        data: 0,
        enabledSettingsMod: false
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
    const onOffSettingsMod = (enabledSettingsMod: boolean) => {
        setCounter(prevState =>({...prevState, enabledSettingsMod}))
    }
    return (
        <Wrapper>
            {
                counter.enabledSettingsMod
                    ? <SettingsThree
                        startValue={counter.startValue}
                        maxValue={counter.maxValue}
                        changeSettings={changeSettings}
                        onOffSettingsMod={onOffSettingsMod}
                    />
                    : <CounterThree
                        counter={counter.data}
                        startValue={counter.startValue}
                        maxValue={counter.maxValue}
                        setCounter={changeCounter}
                        resetCounter={resetCounter}
                        onOffSettingsMod={onOffSettingsMod}
                    />
            }
        </Wrapper>
    );
};

export default CounterAppThree;