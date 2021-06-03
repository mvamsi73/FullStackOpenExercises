import React from 'react'

const Display=(props)=>{
  if(props.person.name.toLowerCase().includes(props.filter.toLowerCase()))
  {
  return(
    <div>
      {props.person.name} {props.person.number}
    </div>
  )
  }
  else{
    return(
      <div></div>
    )
  }
}

    export default Display