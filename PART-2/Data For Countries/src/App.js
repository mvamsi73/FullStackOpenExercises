import React, { useState,useEffect } from 'react'
import Country,{Filter} from './Components.js'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY
const App = () => {
  const [country,setCountry]=useState([])
  const [ filter,setFilter]=useState('')
  const [weather,setWeather]=useState([])
  const [temp,setTemp]=useState('')
  
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountry(response.data)
      })
  }, [])
  
  const handleFilter=(event)=>{
    event.preventDefault()
    setFilter(event.target.value)
  }
 
  let arr=[]
  for(let i=0;i<country.length;i++)
  {
    if(country[i].name.toLowerCase().includes(filter.toLowerCase()))
    {
      arr.push(country[i])
    }
  }
if(arr.length>10)
{
  return(
    <div>
    <Filter filter={filter} handleFilter={handleFilter}/>
    <p>Too many matches, specify another filter</p>
    </div>
  )
}
  return (
    <div>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <div>{arr.map((array)=><Country key={array.numericCode} country={array} filter={filter} setFilter={setFilter} api_key={api_key} weather={weather} setWeather={setWeather} temp={temp} setTemp={setTemp}/>) }</div>
    </div>
  )
}

export default App