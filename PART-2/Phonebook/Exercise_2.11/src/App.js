import React, { useState,useEffect } from 'react'
import Persons,{Filter,PersonForm} from './Components.js'
import axios from 'axios'

const App = () => {
 
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber,setNewNumber]=useState([])
  const [ filter,setFilter]=useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h1>Add a New</h1>
      <PersonForm addNewPerson={addNewPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <div>{persons.map((person,i)=><Persons key={i} person={person} filter={filter}/>)}</div>
    </div>
  )
}

export default App