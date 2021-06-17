import React,{useEffect} from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import { useSelector,useDispatch} from 'react-redux'
import VisibilityFilter from './components/VisibilityFilter'
import Notification from './components/Notification'
import { initializeAnecdotes} from './reducers/anecdoteReducer'
const App = () => {
  const anecdotes = useSelector(state => state.anecdotes.sort((a, b) => b.votes-a.votes))
  const filter=useSelector(state=>state.filter)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes()) 
  },[dispatch])
  let arr=[]
  for(let i=0;i<anecdotes.length;i++)
  {
    if(anecdotes[i].content.toLowerCase().includes(filter.toLowerCase()))
    {
      arr.push(anecdotes[i])
    }
  }
  return (
    <div>
      <VisibilityFilter/><br/>
      <Notification/>
      <h2>Anecdotes</h2>
      <AnecdoteList anecdotes={arr}/>
      <AnecdoteForm dispatch={dispatch}/>
    </div>
  )
}

export default App