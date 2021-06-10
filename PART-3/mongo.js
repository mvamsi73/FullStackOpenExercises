const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://mvamsi73:${password}@cluster0.fpfo9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

const Person = mongoose.model('Person', personSchema)


if(process.argv.length===5)
{
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })
person.save().then(() => {
  console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
  mongoose.connection.close()
})
}
else{
Person.find().then(result=>{
  console.log('phonebook:')
  result.forEach(res=>{
    console.log(`${res.name} ${res.number}`)
  })
  mongoose.connection.close()
})
}