import Styled from 'styled-components';

export const ButtonsContainerM = Styled.div`
    display: grid;
    grid-template-areas:
    'a b c'
    'd e f';
`

export const ButtonContainerM = Styled.label`
    position: relative;
    display: block;
    margin-bottom: .5vh;
    margin-inline: .5vw;
    width: 32vw;
    height: 10vh;
`
export const ButtonSpanM = Styled.span`
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
export const ButtonSelectM = Styled.input`
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