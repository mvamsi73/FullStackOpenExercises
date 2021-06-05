import React from 'react'
import axios from 'axios'

const Filter=({filter,handleFilter})=>{
  return(
    <div>
      find countries <input value={filter} onChange={handleFilter}/><br/>
    </div>
  )
}

const Country=(props)=>{

    if(props.country.name===props.filter)
    {
      if(props.temp!==props.filter)
      {
    var temp='http://api.weatherstack.com/current?access_key='
    temp=temp.concat(props.api_key)
    var cap=props.country.capital
    temp=temp.concat('&query=')
    temp=temp.concat(cap)
      axios
      .get(temp)
      .then(response => {
        props.setWeather(response.data.current)
        props.setTemp(props.filter)
      })
    }
    return(
      <div>
        <h1>{props.country.name}</h1>
        <p>capital {props.country.capital}</p>
        <p>population {props.country.population}</p>
        <h2>languages</h2>
          <ul>
          {props.country.languages.map(lang=><p>{lang.name}</p>)}
          </ul>
        <img src={props.country.flag} alt="img" width="193" height="130"/>
        <h2>Weather in {props.country.capital}</h2>
        <p><strong>temprature: </strong>{props.weather.temperature} Celcius</p>
        <img src={props.weather.weather_icons} alt="img" width="193" height="130"/><br/>
        <p><strong>wind: </strong>{props.weather.wind_speed} mph direction {props.weather.wind_dir}</p>
        </div>
    )
  }
  else if(props.country.name.toLowerCase().includes(props.filter.toLowerCase()))
  {
  return(
    <div>
      {props.country.name} <button type="button" onClick={()=>props.setFilter(props.country.name)} >Show</button>
    </div>
    
  )
   
  }
  else{
    return(
      <div>
      </div>
    )
  }
}

    export default Country;
    export {Filter};