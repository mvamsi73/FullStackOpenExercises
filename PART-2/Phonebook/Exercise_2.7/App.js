import React, { useState } from 'react'
import Display from './Components.js'
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')

  const handleNoteChange=(event)=>{
    event.preventDefault()
     setNewName(event.target.value)
  }
  const addNewPerson=(event)=>{
    console.log(event.target)
    event.preventDefault()
    const tmp=newName
    console.log(tmp.split(' ').join(''))
    if(persons.filter(person=>person.name.split(' ').join('')===newName.split(' ').join('')).length===1)
    {
      alert(newName+' is already added to phonebook')
      setNewName('')
    }
    else{
    const obj={
      name:newName
    }
    setPersons(persons.concat(obj))
    setNewName('')
  }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map((person,i)=><Display key={i} person={person}/>)}</div>
    </div>
  )
}

export default App