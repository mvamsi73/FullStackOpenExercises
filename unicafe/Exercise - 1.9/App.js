import React, { useState } from 'react'
const Statistics=(props)=>{
  const {good,neutral,bad,score,clicks}=props
  if(clicks===0)
  {
    return(
      <div>
        <h3>No feedback given</h3>
      </div>
    )
 
  }
    return (
      <div>
        <h1>statistics</h1><br/>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good+neutral+bad}</p>
        <p>average {(score)/clicks}</p>
        <p>positive {(good/(good+neutral+bad))*100} %</p>
        </div>
    )
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)
  const [clicks, setClicks] = useState(0)
  const incrementgood=()=>{
    setClicks(clicks+1)
    setScore(score+1)
    setGood(good+1)
  }
  const incrementneutral=()=>{
    setClicks(clicks+1)
    setScore(score+0)
    setNeutral(neutral+1)
  }
  const incrementbad=()=>{
    setClicks(clicks+1)
    setScore(score-1)
    setBad(bad+1)
  }
  return (
    <div>
      <h1>give feedback</h1><br/>
      <button onClick={incrementgood}>good</button>
      <button onClick={incrementneutral}>neutral</button>
      <button onClick={incrementbad}>bad</button><br/>
      <Statistics good={good} neutral={neutral} bad={bad} score={score} clicks={clicks}/>
    </div>
  )
}

export default App