import {SettingsType} from "../counter/Settings";

const initializationState: SettingsType = {
    startValueInSettings: 0,
    maxValueInSettings: 5,
    startValueError: false,
    maxValueError: false,
}

export type ChangeStartValueInSettingsAT = ReturnType<typeof changeStartValueInSettingsAC>
export type ChangeMaxValueInSettingsAT = ReturnType<typeof changeMaxValueInSettingsAC>

type ActionType = ChangeStartValueInSettingsAT | ChangeMaxValueInSettingsAT

export const SettingsCounterReducer = (state: SettingsType = initializationState, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE-START-VALUE-IN-SETTINGS': {
            const {startValueInSettings, error} = action.payload
            return {...state, startValueInSettings, startValueError: error,
                maxValueError: error ? state.maxValueError : error}
        }
        case 'CHANGE-MAX-VALUE-IN-SETTINGS': {
            const {maxValueInSettings, error} = action.payload
            return {...state, maxValueInSettings, maxValueError: error,
                startValueError:  error ? state.startValueError : error}
        }
    }
    return state
}

export const changeStartValueInSettingsAC = (startValueInSettings: number, startValueError: boolean, settingsMod: boolean) => ({
    type: 'CHANGE-START-VALUE-IN-SETTINGS',
    payload: {
        startValueInSettings,
        error: startValueError,
        settingsMod
    }
}) as const

export const changeMaxValueInSettingsAC = (maxValueInSettings: number, maxValueError: boolean, settingsMod: boolean) => ({
    type: 'CHANGE-MAX-VALUE-IN-SETTINGS',
    payload: {
        maxValueInSettings,
        error: maxValueError,
        settingsMod
    }
}) as const