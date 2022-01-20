import React, { useState, useEffect } from 'react'
import { Navigate  } from 'react-router-dom';
import { Answer, Problem } from '../styles/styled'

export default function ProblemModule({
    scoreSet,
    selectedNumber,
    selectedMode,
    addTime,
    removeTime,
    time
}) {
    const [problem, setProblem] = useState({})
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [answers, setAnswers] = useState(0)
    const [answer, setAnswer] = useState('')
    const input = React.createRef();

    useEffect(() => input.current.focus(), [])

    const problemSetting = () => {
        const randNumber1 = Math.round((Math.random()+0.05)*10)
        const randNumber2 = Math.round((Math.random()+0.05)*10)
        if (selectedMode.mode === '×') {
            setProblem({ item: [randNumber1, '×', selectedNumber, '='], answer: (randNumber1 * selectedNumber)})
        } else if (selectedMode.mode === '÷') {
            setProblem({ item: [randNumber1 * selectedNumber, '÷', selectedNumber, '='], answer: randNumber1 })
        } else {
            const operator = Math.random() > 0.5 ? '÷' : '×'
            if (operator === '×') {
                setProblem({ item: [randNumber1, '×', randNumber2, '='], answer: (randNumber1 * randNumber2)})
            } else {
                setProblem({ item: [randNumber1 * randNumber2, '÷', randNumber2, '='], answer: randNumber1 })
            }
        }
        if (problem.answer == answer) setCorrectAnswers(correctAnswers + 1)
        if (problem.answer == answer && selectedMode.mode == 'Survival') {
            addTime()
        } else if (problem.answer != answer && selectedMode.mode == 'Survival') {
            removeTime()
        }
        scoreSet((correctAnswers/selectedMode.problems*100).toFixed())
    }
    
    const newProblem = (e) => {
        if (e.keyCode === 13 && time < selectedMode.time) {
            setAnswers(answers + 1)
            problemSetting()
            setAnswer('')
        }
    }
    
    const answerSet = (e) => {
        setAnswer(e.target.value)
    }

    document.onkeyup = newProblem

    useEffect(() => problemSetting(), [])
    
    if (answers === selectedMode.problems || time >= selectedMode.time) {
        return (
            <Navigate to="/result" />
        )
    }

    return (
        <Problem>
            {problem.item}
            <Answer type="text" onChange={answerSet} value={answer} ref={input} />
        </Problem>
    )
}
