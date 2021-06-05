import React from 'react'
const Header = (props) => {

    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
  }
  
  const Content=(props)=>{
  return(
    <div>
      {props.parts.map(parts=><Part part={parts.name} exercises={parts.exercises}/>)}
    </div>
  )
  
  }
  
  const Total=(props)=>{
    const array1 = props.parts.map(parts=>parts.exercises)
    const total = array1.reduce((s, p) => {
      return s+p 
    })
    return(
      <div>
        <strong>total of {total} exercises</strong>
      </div>
    )
  }
  
  const Part=(props)=>{
    return (
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
  }
  
  const Course=({course})=>{
    return(
      <div>
      {course.map(course=><ul><Header course={course}/><Content parts={course.parts}/><Total parts={course.parts}/></ul>)}
    </div>
    )}

    export default Course