import React from 'react'
import NumberButton from './NumberButton'
import { ButtonsContainer } from '../styles/styled'

export default function NumbersModule({ number, selectNumber }) {
  const n = number
  const nBtn= [n, n+1, n+2, n+3, n+4]

  return (
    <ButtonsContainer>
      {nBtn.map(btnNumber => {
        return (
          <NumberButton
            btnNumber={btnNumber}
            selectNumber={selectNumber}
            key={`key:${btnNumber}`}
            id={`id:${btnNumber}`}
          />
        )
      })}
    </ButtonsContainer>
  )
}
