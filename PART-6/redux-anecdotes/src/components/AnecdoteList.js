import {  useDispatch } from 'react-redux'
import {setNotification} from '../reducers/notificationReducer'

  const vote = (id,dispatch,content) => {
    
    dispatch({
      type:'VOTEANECDOTE',
      data:{id}
    })
    dispatch(setNotification(`you voted '${content}'`))
    clearTimeout()
    setTimeout(() => {
        dispatch({
            type: 'HIDE_NOTIFICATION',
            notification: null
          })
      }, 5000)
  }
  const AnecdoteList=({anecdotes})=>{
    const dispatch = useDispatch()
    return(
        <div>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id,dispatch,anecdote.content)}>vote</button>
              </div>
            </div>
          )}
          </div>
    )
}
export default AnecdoteList