import React, {useState} from 'react';

/* Components */
// this component uses () syntax because it has a single statement (the <button> element)
// and the return() call is implied
const Button = ({clickHandler, label}) => (
  <button onClick={clickHandler} >{label}</button>
)

// this component uses the {} syntax because it has multiple statements
const History = (props) => {
  if (props.allClicks.length === 0) {
    return(
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
    )
  } else {
    return(
      <div>
        debugger
        {props.allClicks.map(elem => <p>{elem}</p>)}
      </div>
    )
  }
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])
  
  /* Event Handlers */
  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setRight(right + 1)
  }

  const handleReset = () => {
    setAllClicks(allClicks.concat('Reset'))
    setLeft(0)
    setRight(0)
  }

  return (
    <>
      {left}
      <Button label="Left" clickHandler={handleLeftClick}/>
      <Button label="Reset" clickHandler={handleReset} />
      <Button label="Right" clickHandler={handleRightClick}/>
      {right}
      <History allClicks={allClicks} />
    </>
  )
}

export default App