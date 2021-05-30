import React, { useState } from 'react'
const Buttons=(props)=>{
return(
    <button onClick={props.handleClick}>{props.text}</button>
)
}
const Statistic=(props)=>{
  const {text,value}=props
    return (
      <div>
        
        <p>{text} {value}</p>
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
      <h1>statistics</h1><br/>
      <Statistic text={"good"} value={good}/>
      <Statistic text={"neutral"} value={neutral}/>
      <Statistic text={"bad"} value={bad}/>
      <Statistic text={"all"} value={good+neutral+bad}/>
      <Statistic text={"average"} value={(score)/clicks}/>
      <Statistic text={"positive"} value={(good/(good+neutral+bad))*100 + " %"}/>
    </div>
  )
}

export default App