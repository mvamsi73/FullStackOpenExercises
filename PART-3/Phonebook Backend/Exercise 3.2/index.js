const http = require('http')

let persons = [
    {
      id: 1,
      name:"Arto Hellas",
      number:"040-123456"
    },
    {
      id: 2,
      name:"Ada Lovelace",
      number:"39-44-5323523"
    },
    {
      id: 3,
      name:"Dan Abramov",
      number:"12-43-234345"
    },
    {
      id: 4,
      name:"Mary Poppendick",
      number:"39-23-6423122"
    }
  ]

const express=require('express')
const app = express()  
app.get('/api/persons',(request,response)=>{
  response.json(persons)
})

app.get('/info',(request,response)=>{
  const currentTime = new Date()
  const len=Math.max(...persons.map(n=>n.id))
  response.send(`<html><p>Phonebook has info for ${len} people</p>
  <p>${currentTime}</p></html>`)
})


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)