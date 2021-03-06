import React from 'react'

const Filter=({filter,handleFilter})=>{
  return(
    <div>
      filter shown with <input value={filter} onChange={handleFilter}/><br/>
    </div>
  )
}

const PersonForm=({addNewPerson,newName,handleNameChange,newNumber,handleNumberChange})=>{
  return(
    <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/><br/>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}



const Persons=(props)=>{
  if( props.person.name.toLowerCase().includes(props.filter.toLowerCase()))
  {
  return(
  <div>
     {props.person.name} {props.person.number} <button onClick={props.handleDelete}>delete</button>
    </div>
    
  )
  }
  else{
    return(
      <div></div>
    )
  }
}

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="notification">
      {message}
    </div>
  )
}
const Error = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

    export default Persons;
    export {Filter,PersonForm,Notification,Error};