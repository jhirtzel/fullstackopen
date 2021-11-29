import React, {useState} from 'react';

const Display = ({counter}) => <div>{counter}</div>

const Button = ({clickHandler, label}) => (
  <button onClick={clickHandler} >{label}</button>
)

const App = () => {
  // console.log("App execute...")
  const [counter, setCounter] = useState(0)
  const incrementCounter = () => {setCounter(counter + 1)}
  const decrementCounter = () => {setCounter(counter - 1)}
  const resetCounter = () => {setCounter(0)}

  // console.log("rendering..." + counter)
  return (
    <>
      <Display counter={counter} />
      <Button label="Increment" clickHandler={incrementCounter} />
      <Button label="Reset" clickHandler={resetCounter} />
      <Button label="Decrement" clickHandler={decrementCounter} />
    </>
  )
}

export default App