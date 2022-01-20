import React from 'react'
import useSound from 'use-sound'
import dingSound from '../sound/ding_sound.mp3'
import { ButtonContainerN, ButtonSelectN, ButtonSpanN } from '../styles/styled_n_button'

export default function NumberButton({ btnNumber, selectNumber, id }) {
  const [ding] = useSound(
    dingSound
  )

  return (
    <ButtonContainerN htmlFor={id} onMouseDown={ding} onClick={() => selectNumber(btnNumber)}>
      <ButtonSpanN>{btnNumber}</ButtonSpanN>
      <ButtonSelectN id={id} name="btnNumber" type="radio"/>
    </ButtonContainerN>
  )
}