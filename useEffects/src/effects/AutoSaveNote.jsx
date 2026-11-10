
// Steven Gonell
// 11/3/2026
// This component implements an auto-saving note feature.
// The note is saved to localStorage automatically as the user types.
// The component also displays the word count and provides a button to clear the note.
import { useState, useEffect } from 'react'
 
function AutoSaveNote() {
  // read the saved note once, when the component first loads
  const [note, setNote] = useState(() => localStorage.getItem('my-note') ?? '')
  const [wordCount, setWordCount] = useState(0)
  const [clearNote, setClearNote] = useState(false)

  useEffect(() => {
    localStorage.setItem('my-note', note)
  }, [note])
 
  return (
    <div>
      <textarea
        value={note}
        onChange={(e) => {
          setNote(e.target.value)
          setWordCount(e.target.value.split(/\s+/).length)
        }}
        placeholder="Type a note. It saves automatically."
      />
      <p>Word count: {wordCount}</p>
      <button onClick={() => {
        // Clear the note and reset the word count    
        // This also sets the clearNote state to true to display the "Note cleared." message.
        setNote('')
        setWordCount(0)
        setClearNote(true)
      }}>
        Clear Note
      </button>
      {clearNote && <p>Note cleared.</p>}
    </div>
  )
}
 
export default AutoSaveNote
