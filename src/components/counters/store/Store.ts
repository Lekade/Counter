import {combineReducers, legacy_createStore} from 'redux'
import {CounterReducer} from "./Counter-reducer";
import {SettingsCounterReducer} from "./Settings-counter-reducer";
import {loadState, saveState} from "./localStorage";


const rootReducer = combineReducers({
    counter: CounterReducer,
    settings: SettingsCounterReducer
})

const persistedState = loadState();

export const store = legacy_createStore(rootReducer, persistedState)

export type AppRootStateType = ReturnType<typeof rootReducer>


store.subscribe(() => {
    const counter = store.getState().counter
    if(counter){
        saveState({
            maxValue: counter.maxValue,
            startValue: counter.startValue,
            counter: counter.counter,
        });
    }

});

