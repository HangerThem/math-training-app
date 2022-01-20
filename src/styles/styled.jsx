import Styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AppStyled = Styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Berlin Sans FB';
    justify-content: center;
`

export const ButtonsContainer = Styled.div`
    display: inline-block;
    width: fit-content;
    height: 50vh;
`

export const StrtButton = Styled(Link)`
    font-family: 'Berlin Sans FB';
    font-size: 35px;
    width: 20vw;
    height: 10vh;
    margin: 2vh;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content:center;
    color: #000;
    text-decoration: none;
    border: ${props => props.startable ? '#382' : '#c32'} 2px solid;
    background: ${props => props.startable ? '#5a4' : '#e54'};
    cursor: ${props => props.startable ? 'pointer' : 'default'};
    :hover {
        background: ${props => props.startable ? '#6b5' : '#e54'};
    }
    :active {
        background: ${props => props.startable ? '#493' : '#e54'};
    }
`

export const TimeFluid = Styled.div`
    z-index: -1;
    position: absolute;
    bottom: 0;
    width: 60px;
    top: ${props => (600/props.timeSpan)*props.time+'px'};
    background: linear-gradient(90deg, rgba(204,51,34,1) 0%, rgba(238,85,68,1) 100%);
`

export const Bar = Styled.div`
    height: 600px;
    width: 60px;
    position: relative;
    border: 5px solid #222;
    border-radius: 5px;
    ::before {
        position: absolute;
        display: block;
        content: '';
        top: 297.5px;
        left: 17.5px;
        border-radius: 5px;
        background: #222;
        width: 25px;
        height: 5px;
    }
`

export const GameLayout = Styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) ;
    font-family: 'Berlin Sans FB';
    font-size: 75px;
`

export const Answer = Styled.input`
    border: 5px solid #222;
    font-size: 75px;
    position: absolute;
    right: 25px;
    font-family: 'Berlin Sans FB';
    color: #222;
    width: 100px;
    text-align: center;
    border-radius: 5px;
    :focus-visible {
        outline: none;
    }
`

export const Problem = Styled.div`
position: relative;
    width: 355px;
`