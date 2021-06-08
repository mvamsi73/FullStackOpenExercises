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
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
app.use(requestLogger)

app.get('/api/persons',(request,response)=>{
  response.json(persons)
})

app.get('/info',(request,response)=>{
  const currentTime = new Date()
  const len=Math.max(...persons.map(n=>n.id))
  response.send(`<html><p>Phonebook has info for ${len} people</p>
  <p>${currentTime}</p></html>`)
})

app.get('/api/persons/:id',(request,response)=>{
  const id=Number(request.params.id)
  const person=persons.find(person=>person.id===id)
  if(person)
  {
  response.json(person)
  }
  else{
    response.status(404).end()
  }
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const person = {
      id: 6,
      name:body.name,
      number:body.number,
  }

  persons = persons.concat(person)

  response.json(person)
})

app.delete('/api/persons/:id',(request,response)=>{
  const id=Number(request.params.id)
  persons=persons.filter(p=>p.id!==id)
  console.log(persons);
  response.status(204).end()
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)