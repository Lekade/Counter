import React, {ChangeEvent, useEffect, useState} from 'react';
import {BtnWrap, Display, DisplayRow, StyledCounter} from "./Counter.Styled";
import {Button} from "../../button/Button";


type SettingsType = {
    startValue: number
    maxValue: number
    changeSettings: (maxValue: number, startValue: number) => void
    enableChangingSettings: boolean
    errorChangingSettings: boolean
    onOffSettings: (onOff: boolean, params: string) => void
}
type SettingType = 'startValue' | 'maxValue'

const Settings = ({startValue, maxValue, changeSettings, enableChangingSettings, errorChangingSettings, onOffSettings}: SettingsType) => {

    const [settings, setSettings] = useState({
        startValue,
        maxValue
    })
    const changeValueHandler = (e: ChangeEvent<HTMLInputElement>, setting:SettingType) => {
        const newValue = +e.currentTarget.value
        setSettings( prevState =>  ({...prevState, [setting]: newValue}))
    }
    const changeCountSettingsHandler = () => {
        if(!errorChangingSettings){
            changeSettings(settings.maxValue, settings.startValue)
            onOffSettings(false, 'enableChangingSettings')
        }
    }

    let enableSettings = startValue !== settings.startValue  || maxValue !== settings.maxValue && !enableChangingSettings
    let disableSetting = startValue === settings.startValue && maxValue === settings.maxValue && enableChangingSettings

    let errorStartValue = settings.startValue < 0 ||  settings.startValue >= settings.maxValue
    let errorMaxValue = settings.maxValue < 1 ||settings.maxValue <= settings.startValue

    let enableErrorMod = errorStartValue || errorMaxValue  && !errorChangingSettings
    let disableErrorMod = !errorStartValue && !errorMaxValue && enableChangingSettings

    useEffect(() => {
        if(enableSettings){
            onOffSettings(true, 'enableChangingSettings')
        }
        if(disableSetting){
            onOffSettings(false, 'enableChangingSettings')
        }
        if(enableErrorMod){
            onOffSettings(true, 'errorChangingSettings')
        }
        if(disableErrorMod){
            onOffSettings(false, 'errorChangingSettings')
        }
    }, [settings])
    useEffect(()=>{
        setSettings({...settings, startValue: startValue, maxValue: maxValue})
    }, [startValue, maxValue])

    const disableSet :boolean = !enableChangingSettings || enableChangingSettings && errorChangingSettings

    return (
        <StyledCounter>
            <Display>
                <DisplayRow error={errorMaxValue}>
                    <span>max value</span>
                    <input onChange={e => changeValueHandler(e, 'maxValue')} value={settings.maxValue} type='number'/>
                </DisplayRow>
                <DisplayRow error={errorStartValue}>
                    <span>start value</span>
                    <input onChange={e => changeValueHandler(e, 'startValue')} value={settings.startValue}
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