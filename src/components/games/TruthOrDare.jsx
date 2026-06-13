import React, { useState } from 'react'
import { Shuffle } from 'lucide-react'
import './GameStyle.css'

const truths = [
  'When did you first realize you loved me?',
  'What\'s your favorite quality about me?',
  'What would you do if we could teleport anywhere?',
  'What\'s something about me that surprised you?',
  'If you could change one thing about yourself, what would it be?',
  'What\'s your biggest dream for us?',
  'What\'s something you\'ve never told me?',
  'When was the moment you knew we were meant to be?',
  'What\'s your favorite physical feature of mine?',
  'If we could spend one perfect day together, what would we do?',
  'What\'s something that made you laugh today?',
  'What quality do you think we share?',
  'What\'s your favorite memory with me?',
  'If you could give me any superpower, what would it be?',
  'What\'s something you admire about me?',
]

const dares = [
  'Send me a funny selfie right now',
  'Serenade me with your favorite love song',
  'Do a 30-second dance for me',
  'Give yourself a funny makeover and send a picture',
  'Compliment me for 30 seconds without stopping',
  'Sing the chorus of a song you love',
  'Do your best impression of a famous person',
  'Read a poem or quote to me in a dramatic voice',
  'Tell a terrible joke and laugh at your own joke',
  'Describe me in 5 words and explain each one',
  'Do 10 jumping jacks and tell me how you feel',
  'Call me and use only accents to have a conversation',
  'Send me a voice message saying something sweet',
  'Do your silliest walk and describe what you\'re doing',
  'Create a TikTok-style dance move and perform it',
]

function TruthOrDare() {
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [isShuffling, setIsShuffling] = useState(false)
  const [lastType, setLastType] = useState(null)
  const [history, setHistory] = useState([])

  const getRandomQuestion = (type) => {
    if (isShuffling) return

    setIsShuffling(true)
    setLastType(type)

    const list = type === 'truth' ? truths : dares
    const question = list[Math.floor(Math.random() * list.length)]

    setTimeout(() => {
      setCurrentQuestion(question)
      setHistory([{ type, question }, ...history.slice(0, 4)])
      setIsShuffling(false)
    }, 600)
  }

  return (
    <div className="game-container">
      <h2 className="game-title">Truth or Dare 🎯</h2>

      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Tap a button to get a random truth or dare question!
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
        <button
          className="nav-btn"
          onClick={() => getRandomQuestion('truth')}
          disabled={isShuffling}
          style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            fontSize: '1.1rem',
          }}
        >
          <Shuffle size={20} />
          Truth
        </button>
        <button
          className="nav-btn"
          onClick={() => getRandomQuestion('dare')}
          disabled={isShuffling}
          style={{
            background: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
            fontSize: '1.1rem',
          }}
        >
          <Shuffle size={20} />
          Dare
        </button>
      </div>

      {currentQuestion && (
        <div className="result-section">
          <div
            style={{
              padding: '25px',
              background: lastType === 'truth'
                ? 'linear-gradient(135deg, #667eea15, #764ba215)'
                : 'linear-gradient(135deg, #FF6B6B15, #FFE66D15)',
              border: lastType === 'truth' ? '2px solid #667eea' : '2px solid #FF6B6B',
              borderRadius: '15px',
              marginBottom: '20px',
            }}
          >
            <p style={{ fontSize: '0.95rem', color: '#999', marginBottom: '10px', fontWeight: '600' }}>
              {lastType === 'truth' ? '💭 Truth' : '🔥 Dare'}
            </p>
            <p style={{ fontSize: '1.3rem', color: '#333', fontWeight: '600', lineHeight: '1.5' }}>
              {currentQuestion}
            </p>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '2px solid #eee' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#667eea', marginBottom: '15px' }}>History</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {history.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '12px 15px',
                  background: '#f8f9fa',
                  borderLeft: `3px solid ${item.type === 'truth' ? '#667eea' : '#FF6B6B'}`,
                  borderRadius: '8px',
                  color: '#666',
                  fontSize: '0.9rem',
                }}
              >
                <span style={{ fontWeight: '600', marginRight: '8px' }}>
                  {item.type === 'truth' ? '💭' : '🔥'}
                </span>
                {item.question}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TruthOrDare
