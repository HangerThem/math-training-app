import React, { useState } from 'react'
import ProblemModule from '../ProblemModule'
import TimeBar from '../TimeBar'
import { GameLayout } from '../../styles/styled'

export default function Game({ selectedNumber, selectedMode, scoreSet }) {
    const [time, setTime] = useState(0)

    const addTime = () => {
        if (time - 2 < 0) {
            setTime(0)
        } else {
            setTime(time - 2)
        }
    }

    const removeTime = () => {
        setTime(time + 2)
    }

    return (
        <GameLayout>
            <ProblemModule
                scoreSet={scoreSet}
                selectedNumber={selectedNumber}
                selectedMode={selectedMode}
                addTime={addTime}
                removeTime={removeTime}
                time={time}
            />
            <TimeBar selectedMode={selectedMode} time={time} setTime={setTime} />
        </GameLayout>
    )
}
