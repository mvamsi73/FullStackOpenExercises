import anecdoteService from "../services/anecdotes"
const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type)
  {
    case 'VOTEANECDOTE':
      {
          const id=action.data.id
          const anecToChange = state.find(n => n.id === id)
        const changedAnec = { 
          ...anecToChange, 
          votes:anecToChange.votes+1
        }
        const url = `http://localhost:3001/anecdotes/${id}`
        anecdoteService.vote(url,changedAnec)
        return state.map(anec =>
          anec.id !== id ? anec : changedAnec 
        )
      }
      case 'CREATE':
        {
          return state.concat(action.data)
        }
        case 'INIT_NOTES':
      return action.data
      default:
        return state
  }
}
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecs = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: anecs,
    })
  }
}
export const createAnecdote=(data)=>{
  return async dispatch => {
    const newNote = await anecdoteService.createNew(data)
    dispatch({
      type: 'CREATE',
      data: newNote,
    })
  }
}
export default reducer