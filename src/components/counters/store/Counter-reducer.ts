import {CounterStateType} from "../counter/CounterApp";
import {ChangeMaxValueInSettingsAT, ChangeStartValueInSettingsAT} from "./Settings-counter-reducer";

const initializationState:CounterStateType = {
    startValue : 0,
    maxValue: 5,
    data: 0,
    enabledSettingsMod: false,
    appError: false
}
type CounterParamsChangeAT = ReturnType<typeof  counterParamsChangeAC>
type CounterChangeAT = ReturnType<typeof  counterChangeAC>
type CounterResetAT = ReturnType<typeof  counterResetAC>

type ActionType = CounterParamsChangeAT | CounterChangeAT | CounterResetAT | ChangeStartValueInSettingsAT | ChangeMaxValueInSettingsAT

export const CounterReducer = (state: CounterStateType = initializationState, action: ActionType) => {
    debugger
    switch (action.type) {
        case 'COUNTER-PARAMS-CHANGE': {
            const {startValue, maxValue} = action.payload
            return {...state, startValue, maxValue, data:startValue, enabledSettingsMod: false}
        }
        case 'COUNTER-CHANGE': {
            return {...state, data: state.data + 1}
        }
        case 'COUNTER-RESET': {
            return {...state, data: state.startValue}
        }
        case 'CHANGE-START-VALUE-IN-SETTINGS':{
            const appError = action.payload.error
            const enabledSettingsMod = action.payload.settingsMod
            return {...state, appError, enabledSettingsMod}
        }
        case 'CHANGE-MAX-VALUE-IN-SETTINGS': {
            const appError = action.payload.error
            const enabledSettingsMod = action.payload.settingsMod
            return {...state, appError, enabledSettingsMod}
        }

    }
    return state
}

export const counterParamsChangeAC = (startValue: number, maxValue: number) => ({
    type: 'COUNTER-PARAMS-CHANGE',
    payload: {
        startValue,
        maxValue
    }
}) as const

export const counterChangeAC = () => ({
    type: 'COUNTER-CHANGE',
    payload: {}
})as const

export const counterResetAC = () => ({
    type: 'COUNTER-RESET',
    payload: {}
})as const





