import React, { useState } from 'react'
import { Zap } from 'lucide-react'
import './GameStyle.css'
import './DateSpinner.css'

const dateIdeas = [
  '🍕 Order pizza and binge a show together',
  '🎮 Play video games together',
  '🎬 Movie night - pick each other\'s favorite movies',
  '🧘 Virtual yoga or meditation session',
  '📚 Read a book together and discuss',
  '🎨 Paint or draw together',
  '🍷 Wine/drink tasting at home',
  '💃 Have a dance party',
  '🎵 Karaoke night',
  '🧩 Do a puzzle together',
  '📖 Tell each other your favorite memories',
  '🎭 Watch a comedy special',
  '🍰 Bake something together',
  '🌙 Stargazing (if possible)',
  '📞 Have a long video call',
  '✍️ Write each other love letters',
  '🎪 Virtual concert or live stream event',
  '🤝 Play board games',
  '🗣️ Have a deep conversation',
  '🎁 Exchange small gifts',
  '👗 Fashion show of your favorite clothes',
  '🍽️ Cook a meal together',
  '📺 React to something funny online',
  '💌 Create a scrapbook of memories',
  '🎯 Play 20 questions',
  '🌺 Virtual picnic with snacks',
  '📸 Take cute photos together',
  '🎪 Tell stories about your day',
  '💝 Write a bucket list together',
  '🎉 Celebrate something with champagne',
]

function DateSpinner() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [selectedIdea, setSelectedIdea] = useState(null)
  const [rotation, setRotation] = useState(0)
  const [history, setHistory] = useState([])

  const spin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    const randomIndex = Math.floor(Math.random() * dateIdeas.length)
    const randomRotation = Math.random() * 360 + 720

    setRotation(rotation + randomRotation)

    setTimeout(() => {
      setSelectedIdea(dateIdeas[randomIndex])
      setHistory([dateIdeas[randomIndex], ...history.slice(0, 4)])
      setIsSpinning(false)
    }, 1000)
  }

  return (
    <div className="game-container">
      <h2 className="game-title">Date Night Spinner 🎡</h2>

      <p className="game-description">
        Spin the wheel and get a random date idea for tonight!
      </p>

      <div className="spinner-section">
        <div className="spinner-wrapper">
          <div
            className="spinner-wheel"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {dateIdeas.map((idea, index) => (
              <div
                key={index}
                className="spinner-segment"
                style={{
                  transform: `rotate(${(index * 360) / dateIdeas.length}deg)`,
                }}
              >
                <div className="segment-text">
                  {idea.substring(0, 15)}...
                </div>
              </div>
            ))}
          </div>
          <div className="spinner-pointer"></div>
        </div>

        <button
          className={`spin-button ${isSpinning ? 'spinning' : ''}`}
          onClick={spin}
          disabled={isSpinning}
        >
          <Zap size={24} />
          {isSpinning ? 'Spinning...' : 'SPIN!'}
        </button>
      </div>

      {selectedIdea && (
        <div className="result-section">
          <div className="selected-idea-box">
            <p className="idea-text">{selectedIdea}</p>
          </div>
          <p className="suggestion-text">
            How does this sound for tonight? 💕
          </p>
        </div>
      )}

      {history.length > 0 && (
        <div className="history-section">
          <h3 className="history-title">Previous Spins</h3>
          <div className="history-list">
            {history.map((idea, index) => (
              <div key={index} className="history-item">
                {idea}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DateSpinner
