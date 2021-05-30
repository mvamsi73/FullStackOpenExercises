import React, { useState } from 'react'

const App = () => {
  const nextAnecdote=()=>
{
  const ran=Math.floor((Math.random() * 5) + 0)
  setSelected(ran)
  setTemp(points[ran])
}
const vote=()=>{
  let tmp=points
  tmp[selected]+=1
  setPoints(tmp)
  setTemp(tmp[selected])
}
const Maxanecdote=()=>{
  let max=0;
  let ind=0;
  for(let i=0;i<points.length;i++)
  {
    if(points[i]>max)
    {
      max=points[i]
      ind=i
    }
  }
  setMaxanecdote(ind)
  return(
    <div>
  <p> {anecdotes[maxanecdote]}</p>
     <p>has {points[maxanecdote]} votes</p>
     </div>
  )
}
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
 

  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState([0,0,0,0,0,0])
  const [temp,setTemp]=useState(0)
  const [maxanecdote,setMaxanecdote]=useState(0)
  return (
    <div>
      <h1>Anecdote of the day</h1>
     <p> {anecdotes[selected]}</p>
     <p>has {temp} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Maxanecdote />
    </div>
  )
}

export default App