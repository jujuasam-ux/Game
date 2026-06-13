import React, { useState } from 'react'
import { ChevronRight, Award } from 'lucide-react'
import './GameStyle.css'

const triviaQuestions = [
  {
    question: 'What color are my eyes?',
    options: ['Brown', 'Blue', 'Green', 'Hazel'],
    answer: 0,
  },
  {
    question: 'What\'s my favorite food?',
    options: ['Pizza', 'Sushi', 'Tacos', 'Pasta'],
    answer: 2,
  },
  {
    question: 'What\'s my favorite movie genre?',
    options: ['Comedy', 'Action', 'Romance', 'Horror'],
    answer: 2,
  },
  {
    question: 'What\'s my favorite season?',
    options: ['Spring', 'Summer', 'Fall', 'Winter'],
    answer: 1,
  },
  {
    question: 'What\'s my biggest pet peeve?',
    options: ['Loud chewing', 'Being late', 'Dishonesty', 'Messiness'],
    answer: 1,
  },
  {
    question: 'What\'s my dream vacation?',
    options: ['Beach', 'Mountains', 'City', 'Countryside'],
    answer: 0,
  },
  {
    question: 'What\'s my favorite hobby?',
    options: ['Reading', 'Gaming', 'Sports', 'Cooking'],
    answer: 2,
  },
  {
    question: 'What\'s my favorite music genre?',
    options: ['Pop', 'Rock', 'Hip-hop', 'Classical'],
    answer: 0,
  },
  {
    question: 'What\'s my biggest achievement?',
    options: ['Work', 'Education', 'Relationship', 'Personal growth'],
    answer: 3,
  },
  {
    question: 'What\'s my favorite drink?',
    options: ['Coffee', 'Tea', 'Soda', 'Juice'],
    answer: 0,
  },
]

function CouplesTriviaGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [stevenScore, setStevenScore] = useState(0)
  const [juliaScore, setJuliaScore] = useState(0)
  const [stevenAnswers, setStevenAnswers] = useState({})
  const [juliaAnswers, setJuliaAnswers] = useState({})
  const [gameOver, setGameOver] = useState(false)

  const current = triviaQuestions[currentQuestion]

  const handleAnswer = (person, answerIndex) => {
    const isCorrect = answerIndex === current.answer

    if (person === 'steven') {
      setStevenAnswers({ ...stevenAnswers, [currentQuestion]: answerIndex })
      if (isCorrect) setStevenScore(stevenScore + 1)
    } else {
      setJuliaAnswers({ ...juliaAnswers, [currentQuestion]: answerIndex })
      if (isCorrect) setJuliaScore(juliaScore + 1)
    }

    if (currentQuestion === triviaQuestions.length - 1) {
      setTimeout(() => setGameOver(true), 500)
    } else {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 500)
    }
  }

  if (gameOver) {
    const winner = stevenScore > juliaScore ? 'Steven' : juliaScore > stevenScore ? 'Julia' : 'Tie'
    return (
      <div className="game-container">
        <h2 className="game-title">Game Over! 🎉</h2>

        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
            <Award size={60} style={{ margin: '0 auto', color: '#FFD700' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
            <div style={{ padding: '20px', background: '#667eea15', borderRadius: '12px' }}>
              <p style={{ fontSize: '1.1rem', color: '#667eea', fontWeight: '600' }}>Steven</p>
              <p style={{ fontSize: '2.5rem', color: '#333', fontWeight: '700' }}>
                {stevenScore}/{triviaQuestions.length}
              </p>
            </div>
            <div style={{ padding: '20px', background: '#FF6B6B15', borderRadius: '12px' }}>
              <p style={{ fontSize: '1.1rem', color: '#FF6B6B', fontWeight: '600' }}>Julia</p>
              <p style={{ fontSize: '2.5rem', color: '#333', fontWeight: '700' }}>
                {juliaScore}/{triviaQuestions.length}
              </p>
            </div>
          </div>

          <div style={{ padding: '20px', background: 'linear-gradient(135deg, #FFE66D15, #FF6B6B15)', borderRadius: '12px', marginBottom: '20px' }}>
            <p style={{ fontSize: '1.2rem', color: '#333', fontWeight: '600' }}>
              {winner === 'Tie' ? "It's a Tie! 🤝" : `${winner} Wins! 🏆`}
            </p>
          </div>

          <button
            className="nav-btn"
            onClick={() => {
              setCurrentQuestion(0)
              setStevenScore(0)
              setJuliaScore(0)
              setStevenAnswers({})
              setJuliaAnswers({})
              setGameOver(false)
            }}
            style={{ margin: '0 auto' }}
          >
            Play Again
          </button>
        </div>
      </div>
    )
  }

  const progress = ((currentQuestion + 1) / triviaQuestions.length) * 100

  return (
    <div className="game-container">
      <h2 className="game-title">Couples Trivia 🧠</h2>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="progress-text">
        Question {currentQuestion + 1} of {triviaQuestions.length}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
        <div style={{ textAlign: 'center', padding: '15px', background: '#667eea15', borderRadius: '12px' }}>
          <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '5px' }}>Steven</p>
          <p style={{ fontSize: '1.8rem', color: '#667eea', fontWeight: '700' }}>{stevenScore}</p>
        </div>
        <div style={{ textAlign: 'center', padding: '15px', background: '#FF6B6B15', borderRadius: '12px' }}>
          <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '5px' }}>Julia</p>
          <p style={{ fontSize: '1.8rem', color: '#FF6B6B', fontWeight: '700' }}>{juliaScore}</p>
        </div>
      </div>

      <div className="question-box">
        <p className="big-question">{current.question}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
        <div>
          <p style={{ fontSize: '0.9rem', color: '#667eea', fontWeight: '600', marginBottom: '12px' }}>Steven's Answer</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {current.options.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => handleAnswer('steven', index)}
                disabled={stevenAnswers[currentQuestion] !== undefined}
                style={{
                  opacity: stevenAnswers[currentQuestion] !== undefined ? 0.6 : 1,
                  cursor: stevenAnswers[currentQuestion] !== undefined ? 'not-allowed' : 'pointer',
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontSize: '0.9rem', color: '#FF6B6B', fontWeight: '600', marginBottom: '12px' }}>Julia's Answer</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {current.options.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => handleAnswer('julia', index)}
                disabled={juliaAnswers[currentQuestion] !== undefined}
                style={{
                  opacity: juliaAnswers[currentQuestion] !== undefined ? 0.6 : 1,
                  cursor: juliaAnswers[currentQuestion] !== undefined ? 'not-allowed' : 'pointer',
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {stevenAnswers[currentQuestion] !== undefined && juliaAnswers[currentQuestion] !== undefined && (
        <div
          style={{
            padding: '15px',
            background: stevenAnswers[currentQuestion] === juliaAnswers[currentQuestion]
              ? 'linear-gradient(135deg, #84fab0, #8fd3f4)'
              : 'linear-gradient(135deg, #fa709a, #fee140)',
            borderRadius: '12px',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          <p style={{ fontSize: '1rem', fontWeight: '600', color: 'white' }}>
            {stevenAnswers[currentQuestion] === current.answer && juliaAnswers[currentQuestion] === current.answer
              ? '✅ You both got it right!'
              : stevenAnswers[currentQuestion] === current.answer
              ? '✅ Steven got it right!'
              : juliaAnswers[currentQuestion] === current.answer
              ? '✅ Julia got it right!'
              : '❌ Both incorrect, the answer was: ' + current.options[current.answer]}
          </p>
        </div>
      )}
    </div>
  )
}

export default CouplesTriviaGame
