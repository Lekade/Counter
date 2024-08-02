import React from 'react';
import '../counterTwo/Counter.css'
import {Button} from "../../button/Button";
import {BtnWrap, ColorType, CounterValue, Display, ErrorInfo, SettingsInfo, StyledCounter} from "./Counter.Styled";
import {Theme} from "../../../assets/styles/Theme";

type CounterPropsType = {
    counter: number
    startValue: number
    maxValue: number
    setCounter: () => void
    resetCounter: () => void
    enabledSettingsMod: boolean
    appError: boolean
}

export const Counter = ({
                            counter,
                            setCounter,
                            resetCounter,
                            startValue,
                            maxValue,
                            enabledSettingsMod,
                            appError
                        }: CounterPropsType) => {
    const color: ColorType = counter < maxValue ? Theme.colors.primary : Theme.colors.error
    const disabledInc = counter > maxValue - 1 || enabledSettingsMod
    const disabledReset = counter === startValue || enabledSettingsMod

    return (
        <StyledCounter>
            <Display>
                {
                    enabledSettingsMod
                        ? <SettingsInfo>
                            {appError
                                ? <ErrorInfo>Incorrect value!</ErrorInfo>
                                : <span>enter values and press 'set'</span>
                            }
                        </SettingsInfo>
                        : <CounterValue color={color}>
                            {counter}
                        </CounterValue>
                }
            </Display>
            <BtnWrap>
                <Button disabled={disabledInc} onClickHandler={setCounter} styles={'btn'}>{'inc'}</Button>
                <Button disabled={disabledReset} onClickHandler={resetCounter} styles={'btn'}>{'reset'}</Button>
            </BtnWrap>
        </StyledCounter>
    );
};





