import React, {useEffect} from 'react';
import {Counter} from "./Counter";
import Settings from "./Settings";
import {Wrapper} from "./Counter.Styled";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/Store";

export type CounterStateType = {
    startValue : number
    maxValue: number
    data: number
    enabledSettingsMod: boolean
    appError: boolean
}

const CounterApp = () => {

    const counter = useSelector<AppRootStateType, CounterStateType>(state => state.counter)
    const {startValue, maxValue, data, enabledSettingsMod, appError} = counter


    // useEffect(()=>{
    //     const localStorageStartValue = localStorage.getItem('startValue')
    //     const localStorageMaxValue = localStorage.getItem('maxValue')
    //     if(localStorageStartValue && localStorageMaxValue){
    //         const newStartValue = JSON.parse(localStorageStartValue)
    //         const newMaxValue = JSON.parse(localStorageMaxValue)
    //         setCounter(prevState => ({...prevState, startValue: newStartValue, maxValue: newMaxValue, data: newStartValue}))
    //     }
    // }, [])

    // const changeSettings = (maxValue: number, startValue: number) => {
    //     setCounter( prevState => ({...prevState, maxValue, startValue, data: startValue }))
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }
    return (
        <Wrapper>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                enabledSettingsMod={enabledSettingsMod}
                appError={appError}
            />
            <Counter
                counter={data}
                startValue={startValue}
                maxValue={maxValue}
                enabledSettingsMod={enabledSettingsMod}
                appError={appError}
            />
        </Wrapper>
    );
};

export default CounterApp;