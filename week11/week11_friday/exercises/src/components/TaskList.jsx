import { useState } from 'react'

// Exercise 2: items typed in the input are added to an array in state; each item has an "X" button to remove it.
export default function TaskList() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  function addTask(event) {
    event.preventDefault()
    if (!input.trim()) return
    setTasks((prev) => [...prev, { id: Date.now(), text: input.trim() }])
    setInput('')
  }

  function removeTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div>
      <form className="row" onSubmit={addTask}>
        <label className="sr-only" htmlFor="new-task">
          New task
        </label>
        <input id="new-task" value={input} onChange={(e) => setInput(e.target.value)} placeholder="New task" />
        <button type="submit" className="button">
          Add
        </button>
      </form>
      {tasks.length === 0 ? (
        <p className="muted">No tasks yet.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button type="button" className="x-btn" onClick={() => removeTask(task.id)}>
                <span aria-hidden="true">✕</span>
                <span className="sr-only">Remove {task.text}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
