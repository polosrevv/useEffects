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
