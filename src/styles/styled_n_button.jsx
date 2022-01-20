import Styled from 'styled-components'

export const ButtonContainerN = Styled.label`
    position: relative;
    display: block;
    margin-top: 0.5vh;
    width: 25vw;
    height: 20%;
`
export const ButtonSpanN = Styled.span`
    display: flex;
    align-items:center;
    justify-content:center;
    height: 100%;
    width: 100%;
    font-size: 4.5vw;
    ::selection {
        background: none;
    }
`
export const ButtonSelectN = Styled.input`
    appearance: none;
    position: absolute;
    top: -3px;
    left: -5px;
    z-index: -1;
    border: 2px solid #a22;
    border-radius: 5px;
    display: block;
    background: #d55;

    height: 100%;
    width: 100%;

    transition: 0.05s all linear;
    :hover {
        background: #e55;
    }
    :checked {
        background: #c44;
    }
}
`