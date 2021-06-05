import React, { useState,useEffect } from 'react'
import Persons,{Filter,PersonForm,Notification,Error} from './Components'
import {getData,insertData,deleteData,updateData} from './services/ContactService.js'
import './index.css'
const App = () => {
 
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber,setNewNumber]=useState([])
  const [ filter,setFilter]=useState('')
  const [notificationmsg,setNotificationmsg]=useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
   
      getData().then(response => {
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

  const handleDelete=(id,name)=>{
    const result = window.confirm(`Delete ${name} ?`);
    if(result===true)
    { 
    deleteData(id).then(()=>{
      setPersons(persons.filter(item => item.refid !== id))
      setErrorMessage(null)
    })
    .catch(error => {
      setErrorMessage(
        `Information of '${name}' has already been removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setPersons(persons.filter(n => n.refid !== id))
    })
   
}}

  const addNewPerson=(event)=>{
    console.log(event.target)
    event.preventDefault()
    if(persons.filter(person=>person.name.split(' ').join('')===newName.split(' ').join('')).length===1)
    {
      const person=persons.find(n => n.name === newName)
      const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if(result===true)
      {
        updateData(person.refid,newNumber,persons,setPersons)
      setNewName('')
      setNewNumber('')
      }
    }
    else{
     let id=0
     if(persons.length===0)
     {
       id=1
     }
     else{
       id=parseInt((persons[persons.length-1].refid))+1
     }
    const obj={
      refid:id,
      name:newName,
      number:newNumber
    }
    insertData(obj).then(
    setPersons(persons.concat(obj)))
    setNewNumber('')
    setNewName('')
    setNotificationmsg(`Added ${obj.name}`)
    setTimeout(() => {
      setNotificationmsg(null)
    }, 5000)
  }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Error message={errorMessage}/>
      <Notification message={notificationmsg}/>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h1>Add a New</h1>
      <PersonForm addNewPerson={addNewPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <div>{persons.map((person,i)=><Persons key={i} person={person} filter={filter} handleDelete={()=>handleDelete(person.refid,person.name)}/>)}</div>
    </div>
  )
  }

export default App