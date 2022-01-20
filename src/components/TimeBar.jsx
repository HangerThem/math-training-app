import React, { useEffect } from 'react'
import { Bar, TimeFluid } from '../styles/styled'
import useSound from 'use-sound'
import dingSound from '../sound/ding_sound.mp3'

export default function TimeBar({ selectedMode, time, setTime }) {
    const [ding] = useSound(
        dingSound,
        {volume: Number((time*1/selectedMode.time).toFixed(5)), playbackRate: .75}
    )

    useEffect(() => {
        if (time < selectedMode.time && time >= 0) {
            const interval = setInterval(() => {
                setTime(time + 1)
                ding()
            }, 1000)
            return () => clearInterval(interval)
        }
    })

    return (
        <Bar>
            <TimeFluid time={time} timeSpan={selectedMode.time} />
        </Bar>
    )
}
