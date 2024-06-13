import React, {ReactNode} from 'react';
import './../counter/Counter.css'

type ButtonType = {
    onClickHandler: () => void
    disabled?: boolean
    styles?: string
    children?: ReactNode
}
export const Button = (props:ButtonType ) => {
    return (
        <button onClick={props.onClickHandler} className={props.styles} disabled={props.disabled}>{props.children}</button>
    );
};
