import React, {ChangeEvent, useEffect, useState} from 'react';
import {BtnWrap, Display, DisplayRow, StyledCounter} from "./Counter.Styled";
import {Button} from "../../button/Button";


type SettingsType = {
    startValue: number
    maxValue: number
    changeSettings: (maxValue: number, startValue: number) => void
    enabledSettingsMod: boolean
    appError: boolean
    onOffSettingsMod: (enabledSettingsMod: boolean) => void
    appErrorHandler: (appErrorHandler: boolean) => void
}

const Settings = ({startValue, maxValue, changeSettings, enabledSettingsMod, appError, onOffSettingsMod, appErrorHandler}: SettingsType) => {
    const [settings, setSettings] = useState({
        startValue,
        maxValue,
        errorStartValue: false,
        errorMaxValue: false
    })

    const maxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue: number = +e.currentTarget.value
        const errorMaxValue: boolean = newMaxValue < 1 || newMaxValue <= settings.startValue
        const settingsMod: boolean = newMaxValue !== maxValue || settings.startValue !== startValue

        onOffSettingsMod(settingsMod)
        appErrorHandler(errorMaxValue)
        setSettings(prevState =>
            ({...prevState, maxValue: newMaxValue,
                errorMaxValue: errorMaxValue,
        errorStartValue:  errorMaxValue ? prevState.errorStartValue : errorMaxValue})
        )
    }
    const startValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue: number = +e.currentTarget.value
        const errorStartValue: boolean = newStartValue < 0 || newStartValue >= settings.maxValue
        const settingsMod: boolean = newStartValue !== startValue || settings.maxValue !== maxValue

        onOffSettingsMod(settingsMod)
        appErrorHandler(errorStartValue)
        setSettings(prevState =>
                ({...prevState, startValue: newStartValue,
                    errorStartValue: errorStartValue,
                errorMaxValue: errorStartValue ? prevState.errorMaxValue : errorStartValue})
            )
    }

    const changeCountSettingsHandler = () => {
        if(!appError){
            changeSettings(settings.maxValue, settings.startValue)
            onOffSettingsMod(false)
        }
    }

    useEffect(()=>{
        setSettings({...settings, startValue: startValue, maxValue: maxValue})
    }, [startValue, maxValue])

    const disableSet:boolean = !enabledSettingsMod || (enabledSettingsMod && appError)

    return (
        <StyledCounter>
            <Display>
                <DisplayRow error={settings.errorMaxValue}>
                    <span>max value</span>
                    <input onChange={e => maxValueChangeHandler(e)} value={settings.maxValue} type='number'/>
                </DisplayRow>
                <DisplayRow error={settings.errorStartValue}>
                    <span>start value</span>
                    <input onChange={e => startValueChangeHandler(e)} value={settings.startValue}
                           type="number"/>
                </DisplayRow>
            </Display>
            <BtnWrap>
                <Button disabled={disableSet} onClickHandler={changeCountSettingsHandler}
                        styles={'btn'}>{'set'}</Button>
            </BtnWrap>
        </StyledCounter>
    );
};

export default Settings;