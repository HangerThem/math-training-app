import React from 'react'
import { StrtButton } from '../styles/styled'

export default function StartButton({ startable }) {
    let link = '/'

    return (
        startable ? link = '/game' : link,
        <>
            <StrtButton
                to={link}
                startable={startable}
            >
                START
            </StrtButton>
        </>
    )
}
