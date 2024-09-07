import {AppRootStateType} from "./Store";

export const loadState = () => {
    const localStorageStartValue = localStorage.getItem('startValue')
    const localStorageMaxValue = localStorage.getItem('maxValue')
    const localStorageCounter = localStorage.getItem('counter')
    if (localStorageStartValue && localStorageMaxValue && localStorageCounter) {
        const startValue = JSON.parse(localStorageStartValue)
        const maxValue = JSON.parse(localStorageMaxValue)
        const counter = JSON.parse(localStorageCounter)

        const state: AppRootStateType = {
            counter: {
                startValue,
                maxValue,
                counter: counter,
                enabledSettingsMod: false,
                appError: false
            },
            settings: {
                startValueInSettings: startValue,
                maxValueInSettings: maxValue,
                startValueError: false,
                maxValueError: false,
            }
        }

        return state
    }
    return undefined
};


export const saveState = (state: saveLocalStorageDataType) => {
    try {
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('counter', JSON.stringify(state.counter))
    } catch {
        alert('Error localStorage')
    }
};

type saveLocalStorageDataType = {
    maxValue: number
    startValue: number
    counter: number
}
