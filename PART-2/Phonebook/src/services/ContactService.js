import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getData=()=>{
    return axios.get(baseUrl)
}

const insertData=(newObject)=>{
    return axios.post(baseUrl,newObject)
}

const deleteData=(id)=>{
    return axios.delete(`http://localhost:3001/persons/${id}`)
}

const updateData=(id,value,persons,setPersons)=>{
    const url = `http://localhost:3001/persons/${id}`
  const note = persons.find(n => n.refid === id)
  const changedNote = { ...note, number: value }

  axios.put(url, changedNote).then(response => {
    setPersons(persons.map(note => note.refid !== id ? note : response.data))
  })
}

export  { 
    getData, insertData,deleteData,updateData
  }