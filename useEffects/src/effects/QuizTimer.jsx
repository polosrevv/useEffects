import { useState, useEffect } from 'react'
import '../styles/styles.css'

function QuizTimer() {
  const [seconds, setSeconds] = useState(30)
  const [running, setRunning] = useState(false)
 
  useEffect(() => {
    if (!running)return
 
    const id = setInterval(() => {
      setSeconds((s) => s - 1)
    }, 1000)
 
    return () => clearInterval(id)   // cleanup: stop this timer
  }, [running])

  useEffect(() => {
    if (seconds <= 0) {
      setRunning(false)
    }
  }, [seconds])

  const resetTimer = () => {
    setSeconds(30)
    setRunning(false)
  }
  const isFinished = seconds <= 0
  const isUrgent = seconds <= 5 && seconds > 0

  return (
    <div className="quiz-timer">
      <h3 className={isUrgent ? 'urgent' : ''}>{isFinished ? 'Times up!' : `${seconds}s`}</h3>
      <button onClick={() => setRunning(!running)}>
        {running ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}
 
export default QuizTimer
