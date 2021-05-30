import React, { useState } from 'react'
const Buttons=(props)=>{
return(
    <button onClick={props.handleClick}>{props.text}</button>
)
}
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
        <table>
        <tr><td>good</td><td> {good}</td></tr>
        <tr><td>neutral</td><td> {neutral}</td></tr>
        <tr><td>bad</td><td> {bad}</td></tr>
        <tr><td>all </td><td>{good+neutral+bad}</td></tr>
        <tr><td>average</td><td> {(score)/clicks}</td></tr>
        <tr><td>positive </td><td>{(good/(good+neutral+bad))*100} %</td></tr>
        </table>
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
      <Buttons handleClick={incrementgood} text="good"/>
      <Buttons handleClick={incrementneutral} text="neutral"/>
      <Buttons handleClick={incrementbad} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} score={score} clicks={clicks}/>
    </div>
  )
}

export default App