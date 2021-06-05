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
      <Header course={course}/>
      <Content parts={course.parts}/>
    </div>
  )
  }

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App