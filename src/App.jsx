import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Game from './components/pages/Game'
import Index from './components/pages/Index'
import Result from './components/pages/ScoreScreen'

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [score, setScore] = useState(null)
  const [selectedMode, setSelectedMode] = useState({})
  
  const selectNumber = (n) => {
    setSelectedNumber(n)
  }
  
  const selectMode = (m) => {
    setSelectedMode(m)
  }

  const scoreSet = (s) => {
    setScore(s)
  }
  
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={
          <Index
            selectedNumber={selectedNumber}
            selectNumber={selectNumber}
            selectedMode={selectedMode}
            selectMode={selectMode}
          />
        } />
        <Route path="/game" element={
          <Game
            selectedNumber={selectedNumber}
            selectedMode={selectedMode}
            scoreSet={scoreSet}
          />
        } />
        <Route path="/result" element={
          <Result
            score={score}
          />
        } />
      </Routes>
    </Router>
  )
}