import React, {ChangeEvent, useEffect, useState} from 'react';
import {BtnWrap, Display, DisplayRow, StyledCounter} from "../counter/Counter.Styled";
import {Button} from "../../button/Button";


type SettingsType = {
    startValue: number
    maxValue: number
    changeSettings: (maxValue: number, startValue: number) => void
    onOffSettingsMod: (enabledSettingsMod: boolean) => void
}

const SettingsThree = ({startValue, maxValue, changeSettings, onOffSettingsMod}: SettingsType) => {
    const [settings, setSettings] = useState({
        startValue,
        maxValue,
        errorStartValue: false,
        errorMaxValue: false
    })
    const error = settings.errorMaxValue && settings.errorStartValue
    const maxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue: number = +e.currentTarget.value
        const errorMaxValue: boolean = newMaxValue < 1 || newMaxValue <= settings.startValue
        setSettings(prevState =>
            ({...prevState, maxValue: newMaxValue,
                errorMaxValue: errorMaxValue,
                errorStartValue:  errorMaxValue ? prevState.errorStartValue : errorMaxValue})
        )
    }
    const startValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue: number = +e.currentTarget.value
        const errorStartValue: boolean = newStartValue < 0 || newStartValue >= settings.maxValue
        setSettings(prevState =>
            ({...prevState, startValue: newStartValue,
                errorStartValue: errorStartValue,
                errorMaxValue: errorStartValue ? prevState.errorMaxValue : errorStartValue})
        )
    }

    const changeCountSettingsHandler = () => {
        if(!error){
            changeSettings(settings.maxValue, settings.startValue)
            onOffSettingsMod(false)
        }
    }

    useEffect(()=>{
        setSettings({...settings, startValue: startValue, maxValue: maxValue})
    }, [startValue, maxValue])


    return (
        <StyledCounter>
            <Display>
                <DisplayRow error={settings.errorMaxValue}>
                    <span>max value</span>
                    <input onChange={maxValueChangeHandler} value={settings.maxValue} type='number'/>
                </DisplayRow>
                <DisplayRow error={settings.errorStartValue}>
                    <span>start value</span>
                    <input onChange={startValueChangeHandler} value={settings.startValue}
                           type="number"/>
                </DisplayRow>
            </Display>
            <BtnWrap>
                <Button disabled={error} onClickHandler={changeCountSettingsHandler}
                        styles={'btn'}>{'set'}</Button>
            </BtnWrap>
        </StyledCounter>
    );
};

export default SettingsThree;