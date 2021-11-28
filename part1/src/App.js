import React from 'react';

const Header = (props) => {
  console.log("HEADER COMPONENT")
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Footer = (props) => {
  console.log("FOOTER COMPONENT")
  return(null)
}

const Content = (props) => {
  console.log("CONTENT COMPONENT")
  // return a Part component for each entry in the props
  const listOfParts = props.course.parts.map( part => {
    return (
      <Part key={part.name} name={part.name} exercises={part.exercises} />
    )}
  )
  return([listOfParts])
}

const Part = (props) => {
  console.log("PART COMPONENT")
  console.log(props)
  return (
    <div id="Part">
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log("TOTAL COMPONENT")
  let sumOfExercises = 0
  props.course.parts.forEach( element => {
    sumOfExercises += element.exercises
  })

  return(
    <div>
      <p>Number of exercises = {sumOfExercises}</p>
    </div>
  )
}

const App = () => {
  console.log("APP COMPONENT")
  const course = {
    "name": "Half Stack application development",
    "parts": [
      {
        "name": 'Fundamentals of React',
        "exercises": 10
      },
      {
        "name": 'Using props to pass data',
        "exercises": 7
      },
      {
        "name": 'State of a component',
        "exercises": 14
      }
    ]
  }
    
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
      <Footer />
    </div>
  )
}

export default App;
