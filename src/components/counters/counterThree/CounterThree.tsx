import React from 'react';
import '../counterTwo/Counter.css'
import {Button} from "../../button/Button";
import {
    BtnWrap,
    ColorType,
    CounterValue,
    Display,
    StyledCounter
} from "../counter/Counter.Styled";
import {Theme} from "../../../assets/styles/Theme";

type CounterPropsType = {
    counter: number
    startValue: number
    maxValue: number
    setCounter: () => void
    resetCounter: () => void
    onOffSettings:(onOff: boolean, params: string) => void
}

export const CounterThree = ({
                                 counter,
                                 setCounter,
                                 resetCounter,
                                 startValue,
                                 maxValue,
                                 onOffSettings
                             }: CounterPropsType) => {
    const color: ColorType = counter < maxValue ? Theme.colors.primary : Theme.colors.error
    const disabledInc = counter > maxValue - 1
    const disabledReset = counter === startValue
    const onOffSettingsHandler = () => {
        onOffSettings(true, 'enableChangingSettings')
    }

    return (
        <StyledCounter>
            <Display>
                <CounterValue color={color}>
                    {counter}
                </CounterValue>
            </Display>
            <BtnWrap>
                <Button disabled={disabledInc} onClickHandler={setCounter} styles={'btn'}>{'inc'}</Button>
                <Button disabled={disabledReset} onClickHandler={resetCounter} styles={'btn'}>{'reset'}</Button>
                <Button  onClickHandler={onOffSettingsHandler} styles={'btn'}>{'set'}</Button>
            </BtnWrap>
        </StyledCounter>
    );
};





