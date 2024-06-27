import React from 'react';
import './Counter.css'
import {Button} from "../../button/Button";

type CounterPropsType = {
    counter: number
    setCounter: () => void
    resetCounter: () => void
    maxValue: number
}


export const CounterTwo = (props: CounterPropsType) => {
    let widthProgressLine = props.counter && props.counter * 100 / props.maxValue

    const isIncressButtonDisabeled = props.counter === props.maxValue
    return (
        <div className={'counterWrapTwo'}>
            <div className={'maxValue'}><span>Max value:{props.maxValue}</span></div>
            <div className={'counterTableauTwo'}>{props.counter}</div>
            <div className={'progressBar'}><div style={{width: `${widthProgressLine}%`}} className={'progressLine'}>yo</div></div>
            <div className={'btnWrapTwo'}>
                <Button  disabled={isIncressButtonDisabeled} onClickHandler={props.setCounter } styles={'btnTwo'}>{'Увеличить'}</Button>
                <Button  disabled={!(props.counter === props.maxValue)} onClickHandler={props.resetCounter} styles={'btnTwo'}>{'Сбросить'}</Button>
            </div>
        </div>
    );
};