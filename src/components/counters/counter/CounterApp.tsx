import React from 'react';
import {Counter} from "./Counter";
import Settings from "./Settings";
import {Wrapper} from "./Counter.Styled";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/Store";

export type CounterStateType = {
    startValue : number
    maxValue: number
    counter: number
    enabledSettingsMod: boolean
    appError: boolean
}

const CounterApp = () => {

    const {startValue, maxValue, counter, enabledSettingsMod, appError} = useSelector<AppRootStateType, CounterStateType>(state => state.counter)

    return (
        <Wrapper>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                enabledSettingsMod={enabledSettingsMod}
                appError={appError}
            />
            <Counter
                counter={counter}
                startValue={startValue}
                maxValue={maxValue}
                enabledSettingsMod={enabledSettingsMod}
                appError={appError}
            />
        </Wrapper>
    );
};

export default CounterApp;