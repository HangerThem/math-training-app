import React, { useState } from 'react';
import ModeButton from './ModeButton'
import { ButtonsContainerM } from '../styles/styled_m_button'

export default function ModesModule({ selectMode }) {
  const modes= [
    {mode: 'Survival', description: 'You live as long as you count.', isOperator: false, time: 60, problems: Infinity, key: 'mode0'},
    {mode: '×', description: 'multiplication of', isOperator: true, time: 60, problems: 20, key: 'mode1'},
    {mode: '100 challange', description: '100 seconds - 100 problems', isOperator: false, time: 100, problems: 100, key: 'mode2'},
    {mode: 'Random', description: 'Random numbers and operators.', isOperator: false, time: 60, problems: 20, key: 'mode3'},
    {mode: '÷', description: 'division by', isOperator: true, time: 60, problems: 20, key: 'mode4'},
    {mode: 'Limitless', description: 'Until you make mistake.', isOperator: false, time: Infinity, problems: Infinity, key: 'mode5'}
  ]

  return (
    <ButtonsContainerM>
      {modes.map(mode => {
        return (
          <ModeButton
            mode={mode}
            selectMode={selectMode}
            key={mode.key}
            id={`id:${mode.key}`}
          />
        )
      })}
    </ButtonsContainerM>
  )
}
