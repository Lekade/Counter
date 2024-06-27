import styled from "styled-components";
import {Theme} from "../../../assets/styles/Theme";

export type ColorType = '#63DBFD' | '#EF1648'
export type CounterValueType = {
    color?: ColorType
}
type DisplayRowType = {
    error:boolean
}
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 925px){
    flex-wrap: wrap;
  }
  background-color: ${Theme.colors.bg};
`
export const StyledCounter = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 20px;
  margin: 30px 15px;
  border: ${Theme.colors.primary} solid 5px;
  border-radius: 7px;
`
export const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 300px;
  background-color: transparent;
  border: ${Theme.colors.primary} solid 5px;
  margin-bottom: 20px;
`
export const DisplayRow = styled.div<DisplayRowType>`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  @media screen and  (max-width: 1300px){
    justify-content: center;
  } 
  span{
    font-size: 45px;
    font-weight: bold;
    color: ${Theme.colors.primary};
  }
  input{
    display: flex;
    max-width: 250px;
    width: 100%;
    border: ${props => props.error ?Theme.colors.error : Theme.colors.primary} solid 5px;
    background-color: ${props => props.error ? '#EF9CAC' : '#fff'};
    font-size: 23px;
    font-weight: bold;
    color: #000;
    text-align: center;
  }
`
export const CounterValue = styled.div<CounterValueType>`
  display: flex;
  width: 100%;
  min-height: 300px;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.color || Theme.colors.primary};
`
export const SettingsInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  color: ${Theme.colors.primary};
`
export const ErrorInfo = styled.span`
  color: ${Theme.colors.error};
`
export const BtnWrap = styled.div`
  display: flex;
  padding: 50px 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: ${Theme.colors.primary} solid 5px;
  gap: 50px;
`