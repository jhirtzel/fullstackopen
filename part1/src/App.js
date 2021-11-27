import React from 'react';

const Header = (props) => {
  console.log("Header component")
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Footer = (props) => {
  console.log("Footer component")
  return(null)
}

const Content = (props) => {
  console.log("Content component")
  console.log(props)
  return(
    <Part name={props.part.name} exercises={props.part.exercises} />
  )
}

const Part = (props) => {
  console.log("Part component")
  console.log(props)
  return (
    <div id="part">
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log("Total component")
  return(
    <div>
      <p>Number of exercises = {props.count}</p>
    </div>
  )
}

const App = () => {
  console.log("===App component===")
  const course = 'Half Stack application development'
  const part1 = {
    "name": 'Fundamentals of React',
    "exercises": 10
  }
  const part2 = {
    "name": 'Using props to pass data',
    "exercises": 7
  }
  const part3 = {
    "name": 'State of a component',
    "exercises": 14
  }
  let sumOfExercises = part1.exercises+part2.exercises+part3.exercises

  return (
    <div>
      <Header course={course}/>
      <Content part={part1}/>
      <Content part={part2}/>
      <Content part={part3}/>
      <Total count={sumOfExercises}/>
      <Footer />
    </div>
  )
}

export default App;
