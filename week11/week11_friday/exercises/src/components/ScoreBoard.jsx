import { useState } from 'react'

function PlayerScore({ name, score, onIncrement, onDecrement }) {
  return (
    <div className="player">
      <h3>
        {name}: {score}
      </h3>
      <button type="button" className="button ghost" onClick={onDecrement}>
        -<span className="sr-only"> one point for {name}</span>
      </button>
      <button type="button" className="button ghost" onClick={onIncrement}>
        +<span className="sr-only"> one point for {name}</span>
      </button>
    </div>
  )
}

// Exercise 3: state is lifted into the parent, which shows the combined total.
export default function ScoreBoard() {
  const [p1, setP1] = useState(0)
  const [p2, setP2] = useState(0)

  return (
    <div>
      <PlayerScore
        name="Player 1"
        score={p1}
        onIncrement={() => setP1((p) => p + 1)}
        onDecrement={() => setP1((p) => p - 1)}
      />
      <PlayerScore
        name="Player 2"
        score={p2}
        onIncrement={() => setP2((p) => p + 1)}
        onDecrement={() => setP2((p) => p - 1)}
      />
      <h2 role="status">Total: {p1 + p2}</h2>
    </div>
  )
}
