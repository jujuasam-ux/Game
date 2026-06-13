import React from 'react'
import {
  Heart,
  Gamepad2,
  Sparkles,
  Dice6,
  Brain,
  Lightbulb,
} from 'lucide-react'
import './GameSelector.css'

function GameSelector({ onSelectGame }) {
  const games = [
    {
      id: 'would-you-rather',
      name: 'Would You Rather',
      description: 'Choose between two fun scenarios and debate your picks!',
      icon: <Sparkles size={32} />,
      color: '#FF6B6B',
    },
    {
      id: 'question-jar',
      name: 'Question Jar',
      description: 'Deep, fun, and romantic questions to get to know each other better.',
      icon: <Heart size={32} />,
      color: '#FF69B4',
    },
    {
      id: 'truth-or-dare',
      name: 'Truth or Dare',
      description: 'Classic game with a couples twist - fun and flirty!',
      icon: <Gamepad2 size={32} />,
      color: '#FF4757',
    },
    {
      id: 'date-spinner',
      name: 'Date Night Spinner',
      description: 'Spin the wheel and get random date ideas!',
      icon: <Dice6 size={32} />,
      color: '#FFA502',
    },
    {
      id: 'trivia',
      name: 'Couples Trivia',
      description: 'How well do you know each other? Test your knowledge!',
      icon: <Brain size={32} />,
      color: '#3498DB',
    },
    {
      id: 'twenty-questions',
      name: '20 Questions',
      description: 'One person thinks of something, the other has 20 questions!',
      icon: <Lightbulb size={32} />,
      color: '#9B59B6',
    },
  ]

  return (
    <div className="game-selector">
      <div className="header">
        <h1>💕 Steven & Julia 💕</h1>
        <p className="subtitle">Date Night Fun Time!</p>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <button
            key={game.id}
            className="game-card"
            onClick={() => onSelectGame(game.id)}
            style={{ borderColor: game.color, '--card-color': game.color }}
          >
            <div className="game-icon" style={{ color: game.color }}>
              {game.icon}
            </div>
            <h3>{game.name}</h3>
            <p>{game.description}</p>
          </button>
        ))}
      </div>

      <div className="footer-message">
        <p>✨ Have fun and enjoy your time together! ✨</p>
      </div>
    </div>
  )
}

export default GameSelector
