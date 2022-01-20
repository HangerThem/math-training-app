 import React from 'react'
import useSound from 'use-sound'
import dingSound from '../sound/ding_sound.mp3'
import { ButtonContainerM, ButtonSelectM, ButtonSpanM } from '../styles/styled_m_button'

export default function ModeButton({ mode, selectMode ,id }) {
    const [ding] = useSound(
        dingSound
    )

    return (
        <ButtonContainerM htmlFor={id} onMouseDown={ding} onClick={() => selectMode(mode)}>
            <ButtonSpanM>{mode.mode}</ButtonSpanM>
            <ButtonSelectM id={id} name="modeButton" type="radio"  />
        </ButtonContainerM>
    )
}
