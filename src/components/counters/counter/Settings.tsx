import React, {ChangeEvent, useEffect, useState} from 'react';
import {BtnWrap, Display, DisplayRow, StyledCounter} from "./Counter.Styled";
import {Button} from "../../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/Store";
import {changeMaxValueInSettingsAC, changeStartValueInSettingsAC} from "../store/Settings-counter-reducer";
import {counterParamsChangeAC} from "../store/Counter-reducer";


type SettingsPropsType = {
    startValue: number
    maxValue: number
    enabledSettingsMod: boolean
    appError: boolean
}
export type SettingsType = {
    startValueInSettings: number
    maxValueInSettings: number
    startValueError: boolean
    maxValueError: boolean
}

const Settings = ({startValue, maxValue, enabledSettingsMod, appError}: SettingsPropsType) => {

    const settings = useSelector<AppRootStateType, SettingsType>(state => state.settings)
    const dispatch = useDispatch()

    const {startValueInSettings, maxValueInSettings, startValueError, maxValueError} = settings

    const maxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue: number = +e.currentTarget.value
        const maxValueError: boolean = newMaxValue < 1 || newMaxValue <= startValueInSettings
        const settingsMod: boolean = newMaxValue !== maxValue || startValueInSettings !== startValue
        dispatch(changeMaxValueInSettingsAC(newMaxValue, maxValueError, settingsMod))
    }
    const startValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue: number = +e.currentTarget.value
        const startValueError: boolean = (newStartValue < 0) || (newStartValue >= maxValueInSettings)
        const settingsMod: boolean = (newStartValue !== startValue) || (maxValueInSettings !== maxValue)
        dispatch(changeStartValueInSettingsAC(newStartValue, startValueError, settingsMod))
    }

    const changeCountSettingsHandler = () => {
        if(!appError){
            dispatch(counterParamsChangeAC(startValueInSettings, maxValueInSettings))
        }
    }

    // useEffect(()=>{
    //     dispatch(changeStartValueInSettingsAC(startValue, false))
    //     dispatch(changeStartValueInSettingsAC(maxValue, false))
    // }, [startValue, maxValue])

    const disableSet:boolean = !enabledSettingsMod || (enabledSettingsMod && appError)

    return (
        <StyledCounter>
            <Display>
                <DisplayRow error={maxValueError}>
                    <span>max value</span>
                    <input onChange={e => maxValueChangeHandler(e)} value={maxValueInSettings} type='number'/>
                </DisplayRow>
                <DisplayRow error={startValueError}>
                    <span>start value</span>
                    <input onChange={e => startValueChangeHandler(e)} value={startValueInSettings}
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