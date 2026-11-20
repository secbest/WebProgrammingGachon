import ToggleDetail from './components/ToggleDetail.jsx'
import TaskList from './components/TaskList.jsx'
import ScoreBoard from './components/ScoreBoard.jsx'

export default function App() {
  return (
    <main className="page">
      <h1>React State: Practice Exercises</h1>
      <p className="muted">Week 11 (Friday), K0126002 Web Programming.</p>

      <section className="card" aria-labelledby="ex1">
        <h2 id="ex1">Exercise 1: Toggle visibility</h2>
        <ToggleDetail />
      </section>

      <section className="card" aria-labelledby="ex2">
        <h2 id="ex2">Exercise 2: Add &amp; remove items from a list</h2>
        <TaskList />
      </section>

      <section className="card" aria-labelledby="ex3">
        <h2 id="ex3">Exercise 3: Lift state between two counters</h2>
        <ScoreBoard />
      </section>
    </main>
  )
}
