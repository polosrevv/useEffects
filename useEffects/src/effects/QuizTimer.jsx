
// Steven Gonell
// 11/3/2026
// This component implements a simple quiz timer that counts down from 30 seconds.
// It allows the user to start, pause, and reset the timer.
import { useState, useEffect } from 'react'
import '../styles/styles.css'

function QuizTimer() {
  // State to store the remaining seconds and whether the timer is running
  const [seconds, setSeconds] = useState(30)
  const [running, setRunning] = useState(false)
 
  useEffect(() => {
    if (!running)return
 
    // Effect to update the seconds state every second when the timer is running
    const id = setInterval(() => {
      setSeconds((s) => s - 1)
    }, 1000)
 
    return () => clearInterval(id)   // cleanup: stop this timer
  }, [running])
  // Effect to stop the timer when it reaches zero
  useEffect(() => {
    if (seconds <= 0) {
      setRunning(false)
    }
  }, [seconds])

  // Function to reset the timer to its initial state
  // This sets the seconds back to 30 and stops the timer from running.
  const resetTimer = () => {
    setSeconds(30)
    setRunning(false)
  }
  // Determine if the timer has finished or if it is in the urgent phase (last 5 seconds)
  const isFinished = seconds <= 0
  const isUrgent = seconds <= 5 && seconds > 0
// This is what will be displayed on the page based on the timer state  
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
