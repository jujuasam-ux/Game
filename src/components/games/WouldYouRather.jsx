import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import './GameStyle.css'

const questions = [
  {
    id: 1,
    question: 'Have dinner at a fancy restaurant or cook a romantic meal together at home?',
    optionA: '🍽️ Fancy Restaurant',
    optionB: '👨‍🍳 Cook Together',
  },
  {
    id: 2,
    question: 'Travel to a beach or travel to the mountains?',
    optionA: '🏖️ Beach',
    optionB: '⛰️ Mountains',
  },
  {
    id: 3,
    question: 'Dance to your favorite song or sing karaoke together?',
    optionA: '💃 Dance Together',
    optionB: '🎤 Karaoke',
  },
  {
    id: 4,
    question: 'Spend a day at an amusement park or a relaxing spa day?',
    optionA: '🎢 Amusement Park',
    optionB: '🧖 Spa Day',
  },
  {
    id: 5,
    question: 'Watch the sunrise together or watch the sunset together?',
    optionA: '🌅 Sunrise',
    optionB: '🌇 Sunset',
  },
  {
    id: 6,
    question: 'Go on an adventure hike or take a scenic road trip?',
    optionA: '🥾 Adventure Hike',
    optionB: '🚗 Road Trip',
  },
  {
    id: 7,
    question: 'Attend a concert or go to a comedy show?',
    optionA: '🎵 Concert',
    optionB: '😂 Comedy Show',
  },
  {
    id: 8,
    question: 'Learn a new skill together or travel somewhere new?',
    optionA: '📚 Learn Together',
    optionB: '✈️ Travel',
  },
  {
    id: 9,
    question: 'Have a movie marathon night or game night?',
    optionA: '🎬 Movie Marathon',
    optionB: '🎲 Game Night',
  },
  {
    id: 10,
    question: 'Cuddle and talk all night or have a fun adventure?',
    optionA: '🤗 Cuddle & Talk',
    optionB: '🎉 Adventure',
  },
]

function WouldYouRather() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [stevenVotes, setStevenVotes] = useState({})
  const [juliaVotes, setJuliaVotes] = useState({})

  const current = questions[currentIndex]

  const handleVote = (voter, option) => {
    if (voter === 'steven') {
      setStevenVotes({ ...stevenVotes, [current.id]: option })
    } else {
      setJuliaVotes({ ...juliaVotes, [current.id]: option })
    }
  }

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const progress = ((currentIndex + 1) / questions.length) * 100

  return (
    <div className="game-container">
      <h2 className="game-title">Would You Rather 🤔</h2>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="progress-text">
        Question {currentIndex + 1} of {questions.length}
      </p>

      <div className="question-box">
        <p className="big-question">{current.question}</p>
      </div>

      <div className="options-container">
        <div className="voter-section">
          <h3 className="voter-name">Steven 👨</h3>
          <div className="option-buttons">
            <button
              className={`option-btn option-a ${
                stevenVotes[current.id] === 'a' ? 'selected' : ''
              }`}
              onClick={() => handleVote('steven', 'a')}
            >
              {current.optionA}
            </button>
            <button
              className={`option-btn option-b ${
                stevenVotes[current.id] === 'b' ? 'selected' : ''
              }`}
              onClick={() => handleVote('steven', 'b')}
            >
              {current.optionB}
            </button>
          </div>
        </div>

        <div className="vs-divider">VS</div>

        <div className="voter-section">
          <h3 className="voter-name">Julia 👩</h3>
          <div className="option-buttons">
            <button
              className={`option-btn option-a ${
                juliaVotes[current.id] === 'a' ? 'selected' : ''
              }`}
              onClick={() => handleVote('julia', 'a')}
            >
              {current.optionA}
            </button>
            <button
              className={`option-btn option-b ${
                juliaVotes[current.id] === 'b' ? 'selected' : ''
              }`}
              onClick={() => handleVote('julia', 'b')}
            >
              {current.optionB}
            </button>
          </div>
        </div>
      </div>

      {stevenVotes[current.id] && juliaVotes[current.id] && (
        <div
          className={`result-box ${
            stevenVotes[current.id] === juliaVotes[current.id]
              ? 'same'
              : 'different'
          }`}
        >
          {stevenVotes[current.id] === juliaVotes[current.id] ? (
            <p className="result-text">💕 You agree! That's awesome! 💕</p>
          ) : (
            <p className="result-text">
              😄 You disagree! Time for a fun debate! 😄
            </p>
          )}
        </div>
      )}

      <div className="nav-buttons">
        <button
          className="nav-btn"
          onClick={prevQuestion}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>
        <button
          className="nav-btn next-btn"
          onClick={nextQuestion}
          disabled={currentIndex === questions.length - 1}
        >
          Next <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default WouldYouRather
