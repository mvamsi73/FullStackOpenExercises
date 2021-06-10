const http = require('http')

require('dotenv').config()


const express=require('express')
var morgan = require('morgan')
const bodyParser = require("body-parser");
const app = express()  

const cors = require('cors')
app.use(cors())

//morgan 

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));

app.use(express.static('build'))

const Person=require('./models/person')
app.get('/api/persons',(request,response)=>{
  Person.find().then(result=>{
    response.json(result)
  })
})

app.get('/info',(request,response)=>{
  const currentTime = new Date()
  Person.count({},function(error,numOfDocs){response.send(`<html><p>Phonebook has info for ${numOfDocs} people</p>
  <p>${currentTime}</p></html>`)
})
  
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      person ? res.json(person) : res.status(404).end()
    })
    .catch(error => next(error))
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/persons', (request, response,next) => {
  const body = request.body
  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }
  

  const person = new Person({
      name:body.name,
      number:body.number,
  })

  person.save().then(res=>{
    response.json(res)
  }).catch(error=>next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(personToRemove => {
      personToRemove ? res.status(204).end() : res.status(404).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const { name, number } = req.body

  const person = {
    name,
    number
  }

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error('Error:', error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return res.status(400).json({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})