import {combineReducers, legacy_createStore} from 'redux'
import {CounterReducer} from "./Counter-reducer";
import {SettingsCounterReducer} from "./Settings-counter-reducer";


const rootReducer = combineReducers({
    counter: CounterReducer,
    settings: SettingsCounterReducer
})

export const store = legacy_createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

