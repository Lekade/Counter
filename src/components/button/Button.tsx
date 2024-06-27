import React, {ReactNode} from 'react';
import '../counters/counterTwo/Counter.css'
import styled from "styled-components";

type ButtonType = {
    onClickHandler: () => void
    disabled?: boolean
    styles?: string
    children?: ReactNode
}
export const Button = (props:ButtonType ) => {
    return (
        <StyledButton onClick={props.onClickHandler} className={props.styles} disabled={props.disabled}>{props.children}</StyledButton>
    );
};


const StyledButton = styled.button`
  padding: 5px 10px;
  background-color: #63DBFD;
  color: #292C35;
  font-size: 50px;
  font-weight: bold;
  border: #63DBFD solid 1px;
  outline: #63DBFD;
  border-radius: 10px;
  cursor: pointer;
  :disabled{
    opacity: 50%;
    cursor: none;
  }
`