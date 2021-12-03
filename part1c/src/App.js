import React, {useState} from 'react';

/* Components */
// this component uses () syntax because it has a single statement (the <button> element)
// and the return() call is implied
const Button = ({clickHandler, label}) => (
  <button onClick={clickHandler} >{label}</button>
)

const StatsLine = ({textPre, value, textPost}) => {
  return(<p>{textPre}{value}{textPost}</p>)
}

const Stats = ({posCount, neuCount, negCount}) => {
  const sum = posCount + neuCount + negCount;
  if (sum === 0) {
    return(
      <>
      <h1>Statistics</h1>
      <StatsLine textPre="No feedback received" />
      </>)
  } else {
    let avg = 0;
    if (sum !== 0) avg = (posCount/(posCount+negCount))*100;     

    return(
      <>
      <h1>Statistics</h1>
      <StatsLine textPre="Positive: " value={posCount} />
      <StatsLine textPre="Neutral: " value={neuCount} />
      <StatsLine textPre="Negative: " value={negCount} />
      <StatsLine textPre="Total votes: " value={sum} />
      <StatsLine textPre="Average: " value={avg} textPost="% positive" />
      </>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  
  /* Event Handlers */
  const handlePositive = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleNegative = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <Button label="good" clickHandler={handlePositive}/>
      <Button label="neutral" clickHandler={handleNeutral} />
      <Button label="bad" clickHandler={handleNegative} />
      <Stats posCount={good} neuCount={neutral} negCount={bad}/>
    </>
  )
}

export default App