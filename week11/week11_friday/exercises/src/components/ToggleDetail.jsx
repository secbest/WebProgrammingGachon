import { useState } from 'react'

// Exercise 1: toggle the visibility of a paragraph with boolean state.
export default function ToggleDetail() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <button type="button" className="button" aria-expanded={isVisible} onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? 'Hide details' : 'Show details'}
      </button>
      {isVisible && <p>React state enables dynamic UIs without page reloads.</p>}
    </div>
  )
}
