import React, { useState, useEffect } from 'react'
import NumbersModule from '../NumbersModule'
import ChalkBoard from '../ChalkBoard'
import ModesModule from '../ModesMolude'
import StartButton from '../StartButton'
import { AppStyled } from '../../styles/styled'

export default function Index({ 
  selectedNumber,
  selectNumber,
  selectedMode,
  selectMode
}) {
  const [startable, setStartable] = useState()
  const challangeView = !selectedMode.isOperator && selectedMode.mode
  const operatorView = selectedNumber && selectedMode.mode && selectedMode.isOperator

  useEffect(() => {
    if (challangeView || operatorView) setStartable(true)
    else setStartable(false)
  })
  
  return (
    <AppStyled>
      <NumbersModule
        selectNumber={selectNumber}
        number={1}
      />

      <ChalkBoard
        selectedNumber={selectedNumber}
        selectedMode={selectedMode}
        challangeView={challangeView ? 1 : 0}
        operatorView={operatorView ? 1 : 0}
      />

      <NumbersModule
        selectNumber={selectNumber}
        number={6}
      />

      <StartButton startable={startable ? 1 : 0} />
      <ModesModule selectMode={selectMode}/>
    </AppStyled>
  )
}