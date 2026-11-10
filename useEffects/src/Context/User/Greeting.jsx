import { useContext, useState } from 'react'
import { LanguageContext } from '../language/LanguageContext'

function Greeting() {
  const { t } = useContext(LanguageContext)
  const [started, setStarted] = useState(false)
  return(
    <>
      <h1>{t.greeting}</h1>
      <button onClick = {() => setStarted(true)}>{t.start}</button>
      {started ? <h1>Started!</h1> : null}
      <button onClick = {() => setStarted(false)}>{t.end}</button>
    </>
  )
}

export default Greeting