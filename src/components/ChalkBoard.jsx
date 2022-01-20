import React from 'react'
import { BlackChalkBoard, Name } from '../styles/styled_board'

export default function ChalkBoard({
    selectedNumber,
    selectedMode,
    challangeView,
    operatorView
}) {
    if (challangeView) {
        return (
            <BlackChalkBoard>
                <Name>{selectedMode.mode}</Name>
                {selectedMode.description}
            </BlackChalkBoard>
        )
    } else if (operatorView) {
        return (
            <BlackChalkBoard>
                <Name>{selectedNumber}</Name>
                Choosen {selectedMode.description} {selectedNumber}.
            </BlackChalkBoard>
        )
    } else {
        return (
            <BlackChalkBoard />
        )
    }
}