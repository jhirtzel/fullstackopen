import React from 'react';

const Header = () => {
  console.log("Header component")
  return(null)
}

const Footer = () => {
  console.log("Footer component")
  
  let now = new Date()
  return(null)
  // return (
  //   <div>
  //     <p>Generated at {now}</p>
  //   </div>
  // )
}

const Hello = (props) => {
  console.log("return() from Hello component")
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} minutes old</p>
    </div>
  )
}

const App = () => {
  const age = 10
  const name = 'Phillis'

  console.log("return() func from App component")
  return (
    <><div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name='Custom' age={age*2} />
      <Footer />
    </div></>
  )
}

export default App;
