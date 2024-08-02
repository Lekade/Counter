import React, {ChangeEvent, useEffect, useState} from 'react';
import {BtnWrap, Display, DisplayRow, StyledCounter} from "./Counter.Styled";
import {Button} from "../../button/Button";


type SettingsType = {
    startValue: number
    maxValue: number
    changeSettings: (maxValue: number, startValue: number) => void
    enabledSettingsMod: boolean
    appError: boolean
    onOffSettings: (enabledSettingsMod: boolean) => void
    appErrorHandler: (appErrorHandler: boolean) => void
}
type SettingType = 'startValue' | 'maxValue'

const Settings = ({startValue, maxValue, changeSettings, enabledSettingsMod, appError, onOffSettings, appErrorHandler}: SettingsType) => {
    const [settings, setSettings] = useState({
        startValue,
        maxValue,
        errorStartValue: false,
        errorMaxValue: false
    })

    const changeValueHandler = (e: ChangeEvent<HTMLInputElement>, setting:SettingType) => {
        const newValue = +e.currentTarget.value
        setSettings(prevState =>  ({...prevState, [setting]: newValue}))
        if(setting === 'startValue'){
            const errorStartValue = newValue < 0 || newValue >= settings.maxValue
            appErrorHandler(errorStartValue)
            setSettings(prevState =>  ({...prevState, errorStartValue: errorStartValue, errorMaxValue: !(maxValue > newValue)}))
            onOffSettings(newValue !== startValue && newValue !== settings.startValue && !appError)
            //x(newValue, startValue, 'errorStartValue', errorStartValue)
        }
        if(setting === 'maxValue'){
            const errorMaxValue = newValue < 1 || newValue <= settings.startValue
            appErrorHandler(errorMaxValue)
            setSettings(prevState =>  ({...prevState, errorMaxValue: errorMaxValue, errorStartValue: !(startValue < newValue)}))
            debugger
            onOffSettings(newValue !== maxValue && newValue !== settings.maxValue && !appError)
        }
    }



    const changeCountSettingsHandler = () => {
        if(!appError){
            changeSettings(settings.maxValue, settings.startValue)
            onOffSettings(false)
        }
    }
    useEffect(()=> {

    })

    useEffect(()=>{
        setSettings({...settings, startValue: startValue, maxValue: maxValue})
    }, [startValue, maxValue])

    const disableSet:boolean = !enabledSettingsMod || enabledSettingsMod && appError

    return (
        <StyledCounter>
            <Display>
                <DisplayRow error={settings.errorMaxValue}>
                    <span>max value</span>
                    <input onChange={e => changeValueHandler(e, 'maxValue')} value={settings.maxValue} type='number'/>
                </DisplayRow>
                <DisplayRow error={settings.errorStartValue}>
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