import React, { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const incrementgood=()=>{
    setGood(good+1)
  }
  const incrementneutral=()=>{
    setNeutral(neutral+1)
  }
  const incrementbad=()=>{
    setBad(bad+1)
  }
  return (
    <div>
      <h1>give feedback</h1><br/>
      <button onClick={incrementgood}>good</button>
      <button onClick={incrementneutral}>neutral</button>
      <button onClick={incrementbad}>bad</button><br/>
      <h1>statistics</h1><br/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App