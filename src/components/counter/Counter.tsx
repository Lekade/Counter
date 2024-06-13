import React from 'react';
import './Counter.css'
import {Button} from "../button/Button";

type CounterPropsType = {
    counter: number
    setCounter: () => void
    resetCounter: () => void
}
export const Counter = (props: CounterPropsType) => {
    const redCounter = props.counter > 4 ?  'red' : ''
    return (
        <div className={'counterWrap'}>
            <div style={{color: redCounter}} className={'counterTableau'}>{props.counter}</div>
            <div className={'btnWrap'}>
                <Button disabled={props.counter > 4} onClickHandler={props.setCounter} styles={'btn'}>{'inc'}</Button>
                <Button disabled={props.counter === 0} onClickHandler={props.resetCounter} styles={'btn'}>{'reset'}</Button>
            </div>
        </div>
    );
};
