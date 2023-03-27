// Write your code here.
import './index.css'

const LOSS_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imgUrl = isWon ? WON_IMAGE : LOSS_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  return (
    <div className="win-or-loss-card">
      <div className="image-container">
        <img src={imgUrl} alt="win or lose" />
      </div>
      <div className="details-container">
        <h1 className="score-heading">{gameStatus}</h1>
        <p className="best-score">{scoreLabel}</p>
        <p className="total-score">{score}/12</p>
        <button
          onClick={onClickPlayAgain}
          className="play-again-button"
          type="button"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
