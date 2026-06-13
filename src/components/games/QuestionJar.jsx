import React, { useState } from 'react'
import { Shuffle } from 'lucide-react'
import './GameStyle.css'

const questions = [
  // Deep & meaningful
  'What does love mean to you?',
  'When do you feel most safe with me?',
  'What\'s a fear you\'ve overcome?',
  'What makes you feel truly alive?',
  'When did you first feel like we were a team?',
  'What\'s something you want to experience with me?',
  'How do you want to be remembered?',
  'What brings you peace?',
  'What\'s your biggest strength and how does it help us?',
  'When have you felt most proud of me?',
  'What\'s a dream you haven\'t told anyone about?',
  'How do you show love?',
  'What childhood memory shaped who you are?',
  'What does forever look like to you?',
  'What moment made you believe in us?',
  'How can I support you better?',
  'What\'s something you\'re struggling with?',
  'What does a perfect day with me look like?',
  'When do you feel most connected to me?',
  'What\'s the best advice you\'ve ever received?',

  // Playful & fun
  'If you could be any animal, what would you be?',
  'What\'s your secret talent?',
  'What\'s the funniest thing that\'s happened to us?',
  'What movie/show should we watch next?',
  'If we won the lottery, what\'s first?',
  'What\'s a skill you\'d like to learn?',
  'What\'s your guilty pleasure?',
  'If you could have dinner with anyone, who?',
  'What\'s your weirdest habit?',
  'What\'s a song that makes you think of me?',
  'If you could travel anywhere, where?',
  'What\'s your favorite memory from childhood?',
  'What would be your superpower?',
  'What\'s something you\'re really good at?',
  'What\'s the best compliment you\'ve ever received?',
  'What\'s a hobby you\'d like to try together?',
  'What\'s your favorite way to spend a lazy day?',
  'If you could change one thing about the world, what?',
  'What\'s a book/movie that changed you?',
  'What time period would you visit?',

  // Romantic
  'What\'s the sweetest thing I\'ve done for you?',
  'When did you know you wanted to be with me?',
  'What\'s your favorite physical feature of mine?',
  'How do I make you laugh?',
  'What\'s the best feeling with me?',
  'When do you miss me most?',
  'What nickname would you give me and why?',
  'What\'s a moment you want to remember forever?',
  'How would you describe me in 3 words?',
  'What\'s something I do that makes you smile?',
  'What\'s a goal we can achieve together?',
  'How have I changed your life?',
  'What\'s the most romantic thing we\'ve done?',
  'If our love was a song, what would it be?',
  'What\'s something you love about our relationship?',
]

function QuestionJar() {
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [usedQuestions, setUsedQuestions] = useState([])
  const [isShuffling, setIsShuffling] = useState(false)
  const [showAnswered, setShowAnswered] = useState(false)

  const getRandomQuestion = () => {
    if (isShuffling) return
    if (usedQuestions.length === questions.length) {
      setCurrentQuestion(null)
      setUsedQuestions([])
      return
    }

    setIsShuffling(true)
    setShowAnswered(false)

    let randomQuestion
    do {
      randomQuestion = questions[Math.floor(Math.random() * questions.length)]
    } while (usedQuestions.includes(randomQuestion))

    setTimeout(() => {
      setCurrentQuestion(randomQuestion)
      setUsedQuestions([...usedQuestions, randomQuestion])
      setIsShuffling(false)
    }, 600)
  }

  const resetJar = () => {
    setCurrentQuestion(null)
    setUsedQuestions([])
    setShowAnswered(false)
  }

  const progress = (usedQuestions.length / questions.length) * 100

  return (
    <div className="game-container">
      <h2 className="game-title">Question Jar 💭</h2>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="progress-text">
        {usedQuestions.length} / {questions.length} questions asked
      </p>

      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Pull a question and share your honest answers. Get to know each other deeper! 💕
      </p>

      {usedQuestions.length < questions.length && (
        <button
          className="nav-btn"
          onClick={getRandomQuestion}
          disabled={isShuffling}
          style={{
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            fontSize: '1.1rem',
          }}
        >
          <Shuffle size={20} />
          {isShuffling ? 'Picking...' : 'Pick a Question'}
        </button>
      )}

      {currentQuestion && (
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          <div
            style={{
              padding: '30px 25px',
              background: 'linear-gradient(135deg, #667eea15, #764ba215)',
              border: '2px solid #667eea',
              borderRadius: '15px',
              textAlign: 'center',
              animation: 'slideDown 0.5s ease',
            }}
          >
            <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '15px', fontWeight: '600' }}>
              ✨ Question for You ✨
            </p>
            <p style={{ fontSize: '1.4rem', color: '#333', fontWeight: '600', lineHeight: '1.6' }}>
              {currentQuestion}
            </p>
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <button
              onClick={() => setShowAnswered(!showAnswered)}
              style={{
                padding: '10px 20px',
                background: 'transparent',
                border: '2px solid #667eea',
                color: '#667eea',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.9rem',
              }}
            >
              {showAnswered ? '🙈 Hide Answers' : '👂 Answered!'}
            </button>
          </div>

          {showAnswered && (
            <div style={{ marginTop: '20px', textAlign: 'center', animation: 'slideDown 0.4s ease' }}>
              <p style={{ color: '#999', fontStyle: 'italic' }}>
                Share your answers with each other and have a conversation! 💬
              </p>
            </div>
          )}

          <div style={{ marginTop: '25px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <button
              className="nav-btn"
              onClick={getRandomQuestion}
              disabled={usedQuestions.length === questions.length || isShuffling}
              style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
              }}
            >
              Next Question
            </button>
            {usedQuestions.length === questions.length && (
              <button
                className="nav-btn"
                onClick={resetJar}
                style={{
                  background: 'linear-gradient(135deg, #FFE66D, #FF6B6B)',
                }}
              >
                Reset Jar
              </button>
            )}
          </div>
        </div>
      )}

      {usedQuestions.length === questions.length && !currentQuestion && (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎉</div>
          <p style={{ fontSize: '1.1rem', color: '#333', fontWeight: '600', marginBottom: '20px' }}>
            You\'ve answered all the questions!
          </p>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Hope you learned something new about each other! 💕
          </p>
          <button
            className="nav-btn"
            onClick={resetJar}
            style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
            }}
          >
            Start Over
          </button>
        </div>
      )}

      {usedQuestions.length > 0 && currentQuestion && (
        <div style={{ marginTop: '30px', padding: '15px', background: '#f8f9fa', borderRadius: '12px' }}>
          <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '10px' }}>Recently asked:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '200px', overflowY: 'auto' }}>
            {usedQuestions.slice(0, 5).map((q, index) => (
              <div
                key={index}
                style={{
                  padding: '8px 12px',
                  background: 'white',
                  borderLeft: '3px solid #667eea',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  color: '#666',
                }}
              >
                {q}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default QuestionJar
