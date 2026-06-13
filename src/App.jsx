import React, { useState } from 'react'
import './App.css'
import GameSelector from './components/GameSelector'
import WouldYouRather from './components/games/WouldYouRather'
import TwentyQuestions from './components/games/TwentyQuestions'
import DateSpinner from './components/games/DateSpinner'
import CouplesTriviaGame from './components/games/CouplesTriviaGame'
import TruthOrDare from './components/games/TruthOrDare'
import QuestionJar from './components/games/QuestionJar'

function App() {
  const [currentGame, setCurrentGame] = useState(null)

  const goHome = () => setCurrentGame(null)

  return (
    <div className="app">
      {!currentGame ? (
        <GameSelector onSelectGame={setCurrentGame} />
      ) : (
        <>
          <button className="back-button" onClick={goHome}>
            ← Back to Games
          </button>
          {currentGame === 'would-you-rather' && <WouldYouRather />}
          {currentGame === 'twenty-questions' && <TwentyQuestions />}
          {currentGame === 'date-spinner' && <DateSpinner />}
          {currentGame === 'trivia' && <CouplesTriviaGame />}
          {currentGame === 'truth-or-dare' && <TruthOrDare />}
          {currentGame === 'question-jar' && <QuestionJar />}
        </>
      )}
    </div>
  )
}

export default App
