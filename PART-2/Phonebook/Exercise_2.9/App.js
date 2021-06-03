import React, { useState } from 'react'
import Display from './Components.js'
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber,setNewNumber]=useState([])
  const [ filter,setFilter]=useState('')

  const handleNameChange=(event)=>{
    event.preventDefault()
     setNewName(event.target.value)
  }
  const handleNumberChange=(event)=>{
    event.preventDefault()
     setNewNumber(event.target.value)
  }
  const handleFilter=(event)=>{
    event.preventDefault()
    setFilter(event.target.value)
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
      name:newName,
      number:newNumber
    }
    setPersons(persons.concat(obj))
    setNewNumber('')
    setNewName('')
  }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={filter} onChange={handleFilter}/><br/>
      <h1>Add a New</h1>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/><br/>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map((person,i)=><Display key={i} person={person} filter={filter}/>)}</div>
    </div>
  )
}

export default App