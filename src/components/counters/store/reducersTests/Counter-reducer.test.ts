import {CounterStateType} from "../../counter/CounterApp";
import {counterChangeAC, counterParamsChangeAC, CounterReducer, counterResetAC} from "../Counter-reducer";
import {changeMaxValueInSettingsAC, changeStartValueInSettingsAC} from "../Settings-counter-reducer";


let counter :CounterStateType

beforeEach(()=>{
    counter = {
        startValue : 0,
        maxValue: 5,
        counter: 1,
        enabledSettingsMod: false,
        appError: false
    }
})


test('the counter will change', ()=>{

    const newState = CounterReducer(counter, counterChangeAC())

    expect(newState.counter).not.toBe(1)
    expect(newState.counter).toBe(2)
})

test('the counter params will change', ()=> {
    const newStartValue = 2
    const newMaxValue = 10
    const newState = CounterReducer(counter, counterParamsChangeAC(newStartValue, newMaxValue))

    expect(newState.startValue).not.toBe(0)
    expect(newState.startValue).toBe(2)
    expect(newState.maxValue).not.toBe(5)
    expect(newState.maxValue).toBe(10)

})

test('the counter will reset the data', () => {

    const newState = CounterReducer(counter, counterResetAC())

    expect(newState.counter).not.toBe(1)
    expect(newState.counter).toBe(0)
})

test('The settings mod will be enabled', ()=> {
    const newStartValueInSettings = 3
    const settingsMod = true
    const error = false
    // const newMaxValueInSettings = 10

    const newState = CounterReducer(counter, changeStartValueInSettingsAC(newStartValueInSettings, error, settingsMod))

    expect(newState.enabledSettingsMod).not.toBe(false)
    expect(newState.enabledSettingsMod).toBe(true)
})

test('The settings mod and appError will be enabled', ()=> {
    const newMaxValueInSettings = 10
    const settingsMod = true
    const error = true

    const newState = CounterReducer(counter, changeMaxValueInSettingsAC(newMaxValueInSettings, error, settingsMod))

    expect(newState.enabledSettingsMod).not.toBe(false)
    expect(newState.enabledSettingsMod).toBe(true)
    expect(newState.appError).not.toBe(false)
    expect(newState.appError).toBe(true)
})

