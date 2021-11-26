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
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log("Total component")
  return(
    <div>
      <p>Number of exercises = {props.count1 + props.count2 + props.count3}</p>
    </div>
  )
}

const App = () => {
  console.log("===App component===")
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course}/>
      <Content part={part1} exercices={exercises1}/>
      <Content part={part2} exercices={exercises2}/>
      <Content part={part3} exercices={exercises3}/>
      <Total count1={exercises1} count2={exercises2} count3={exercises3}/>
      <Footer />
    </div>
  )
}

export default App;
