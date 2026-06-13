import React, { useState } from 'react'
import './GameStyle.css'

function TwentyQuestions() {
  const [gameStarted, setGameStarted] = useState(false)
  const [isGuesser, setIsGuesser] = useState(null)
  const [questionsAsked, setQuestionsAsked] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [questions, setQuestions] = useState([])
  const [gameLog, setGameLog] = useState([])

  const startGame = (guesser) => {
    setGameStarted(true)
    setIsGuesser(guesser)
    setGameLog([])
  }

  const handleAsk = () => {
    if (currentQuestion.trim() === '') return

    const newQuestion = {
      question: currentQuestion,
      answer: answer,
      number: questionsAsked + 1,
    }

    setQuestions([...questions, newQuestion])
    setGameLog([
      ...gameLog,
      { type: 'question', text: currentQuestion, person: isGuesser === 'steven' ? 'Steven' : 'Julia' },
      { type: 'answer', text: answer, person: isGuesser === 'steven' ? 'Julia' : 'Steven' },
    ])

    setCurrentQuestion('')
    setAnswer('')
    setShowAnswer(false)
    setQuestionsAsked(questionsAsked + 1)
  }

  const resetGame = () => {
    setGameStarted(false)
    setIsGuesser(null)
    setQuestionsAsked(0)
    setCurrentQuestion('')
    setAnswer('')
    setShowAnswer(false)
    setQuestions([])
    setGameLog([])
  }

  if (!gameStarted) {
    return (
      <div className="game-container">
        <h2 className="game-title">20 Questions 🔍</h2>

        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.05rem' }}>
            One person thinks of something (person, place, or thing), and the other has 20 questions to guess it!
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <button
              className="nav-btn"
              onClick={() => startGame('steven')}
              style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
              }}
            >
              Steven Guesses
            </button>
            <button
              className="nav-btn"
              onClick={() => startGame('julia')}
              style={{
                background: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
              }}
            >
              Julia Guesses
            </button>
          </div>
        </div>

        <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
          <p style={{ color: '#999', fontSize: '0.95rem' }}>
            💡 Tip: Make sure the guesser doesn't see what you're thinking of!
          </p>
        </div>
      </div>
    )
  }

  const guesser = isGuesser === 'steven' ? 'Steven' : 'Julia'
  const responder = isGuesser === 'steven' ? 'Julia' : 'Steven'
  const progress = (questionsAsked / 20) * 100
  const gameOver = questionsAsked >= 20

  return (
    <div className="game-container">
      <h2 className="game-title">20 Questions 🔍</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p style={{ fontSize: '1.05rem', color: '#667eea', fontWeight: '600' }}>
          {guesser} is guessing | {responder} knows the answer
        </p>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="progress-text">
        Questions: {questionsAsked} / 20
      </p>

      {!gameOver && (
        <div style={{ marginBottom: '30px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
              {guesser}'s Question:
            </label>
            <input
              type="text"
              value={currentQuestion}
              onChange={(e) => setCurrentQuestion(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
              placeholder="Ask a yes or no question..."
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
              {responder}'s Answer:
            </label>
            <select
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit',
              }}
            >
              <option value="">Select an answer...</option>
              <option value="Yes">Yes ✅</option>
              <option value="No">No ❌</option>
              <option value="Sort of">Sort of 🤔</option>
            </select>
          </div>

          <button
            className="nav-btn"
            onClick={handleAsk}
            disabled={currentQuestion.trim() === '' || answer === ''}
            style={{ width: '100%' }}
          >
            Ask Question
          </button>
        </div>
      )}

      {gameLog.length > 0 && (
        <div style={{ marginBottom: '25px', maxHeight: '300px', overflowY: 'auto' }}>
          <h3 style={{ fontSize: '1rem', color: '#667eea', marginBottom: '12px' }}>Q&A Log</h3>
          {gameLog.map((log, index) => (
            <div
              key={index}
              style={{
                padding: '10px',
                background: log.type === 'question' ? '#667eea10' : '#84fab010',
                borderLeft: `3px solid ${log.type === 'question' ? '#667eea' : '#56ab91'}`,
                borderRadius: '6px',
                marginBottom: '8px',
                fontSize: '0.9rem',
              }}
            >
              <strong style={{ color: '#667eea' }}>{log.person}:</strong> {log.text}
            </div>
          ))}
        </div>
      )}

      {gameOver && (
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <div style={{ padding: '20px', background: 'linear-gradient(135deg, #FFE66D15, #FF6B6B15)', borderRadius: '12px', marginBottom: '20px' }}>
            <p style={{ fontSize: '1.2rem', color: '#333', fontWeight: '600', marginBottom: '15px' }}>
              Did {guesser} guess it correctly?
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button
                className="nav-btn"
                onClick={resetGame}
                style={{
                  background: 'linear-gradient(135deg, #84fab0, #8fd3f4)',
                  gridColumn: '1 / -1',
                }}
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TwentyQuestions
