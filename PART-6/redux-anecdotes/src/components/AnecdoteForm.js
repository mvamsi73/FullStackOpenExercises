import {setNotification,hideNotification} from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import React from 'react'

const AnecdoteForm=(props)=>{
    const CreateAnecdote=async (event)=>{
        event.preventDefault()
        const content=event.target.anecdote.value
        event.target.anecdote.value=''
        await props.createAnecdote(content)
        props.setNotification(`new anecdote '${content}'`)
        setTimeout(() => {
           props.hideNotification()
          }, 5000)
    }
return(
    <div>
<h2>create new</h2>
      <form onSubmit={CreateAnecdote}>
        <div><input type="text" name="anecdote"/></div>
        <button>create</button>
      </form>
      </div>
)}
const ConnectedAnecdoteForm=connect(null,{createAnecdote,setNotification,hideNotification})(AnecdoteForm)
export default ConnectedAnecdoteForm