import {SettingsType} from "../../counter/Settings";
import {
     changeMaxValueInSettingsAC,
    changeStartValueInSettingsAC,
    SettingsCounterReducer
} from "../Settings-counter-reducer";

let settings: SettingsType
beforeEach(()=> {
    settings = {
        startValueInSettings: 0,
        maxValueInSettings: 5,
        startValueError: false,
        maxValueError: false,
    }
})

test('the starting value has changed and there is no error in it', ()=> {
    const newStartValue = 1
    const newStartValueError = false
    const newState = SettingsCounterReducer(settings, changeStartValueInSettingsAC(newStartValue, newStartValueError, false))

    expect(newState.startValueInSettings).not.toBe(0)
    expect(newState.startValueInSettings).toBe(1)
    expect(newState.maxValueInSettings).toBe(5)
    expect(newState.startValueError).toBe(false)
})

test('the starting value has changed, and it is wrong', ()=> {
    const newStartValue = 1
    const newStartValueError = true

    const newState = SettingsCounterReducer(settings, changeStartValueInSettingsAC(newStartValue, newStartValueError, false))

    expect(newState.startValueInSettings).not.toBe(0)
    expect(newState.startValueInSettings).toBe(1)
    expect(newState.maxValueInSettings).toBe(5)
    expect(newState.startValueError).toBe(true)
    expect(newState.maxValueError).toBe(false)
})

test('the max value has changed and there is no error in it', () => {
    const newMaxValue = 6
    const newMaxValueError = false

    const newState = SettingsCounterReducer(settings, changeMaxValueInSettingsAC(newMaxValue, newMaxValueError, false))

    expect(newState.maxValueInSettings).not.toBe(5)
    expect(newState.maxValueInSettings).toBe(6)
    expect(newState.startValueInSettings).toBe(0)
})

test('the max value has changed, and it is wrong', () => {
    const newMaxValue = 6
    const newMaxValueError = true

    const newState = SettingsCounterReducer(settings, changeMaxValueInSettingsAC(newMaxValue, newMaxValueError, false))

    expect(newState.maxValueInSettings).not.toBe(5)
    expect(newState.maxValueInSettings).toBe(6)
    expect(newState.startValueInSettings).toBe(0)
    expect(newState.maxValueError).toBe(true)
    expect(newState.startValueError).toBe(false)
})

