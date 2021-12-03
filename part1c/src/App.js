import React, {useState} from 'react';

/* Components */
// this component uses () syntax because it has a single statement (the <button> element)
// and the return() call is implied
const Button = ({clickHandler, label}) => (
  <button onClick={clickHandler} >{label}</button>
)

const TableCell = ({data}) => (<td>{data}</td>)

// TableRow Component
// takes an object/array of cells, and creates a TableCell for each one
// encloses the list of cells in a table row tag
const TableRow = ({cells}) => {
  let row = [];
  for (const cell of cells) {
    row.push(<TableCell key={cell} data={cell} />);
  }
  return(<tr>{row}</tr>)
}

// Table Component
// takes a rows object/array, consisting of 0 or more equal-length arrays
// and constructs a table
const Table = ({rows}) => {
  let table = [];
  for (const row of rows) {
    table.push(<TableRow key={row[0]} cells={row}/>);
  }
  return(<table><tbody>{table}</tbody></table>)
}

const StatsLine = ({textPre, value, textPost}) => {
  return(<p>{textPre}{value}{textPost}</p>)
}

const Stats = ({posCount, neuCount, negCount}) => {
  const sum = posCount + neuCount + negCount;
  const defaultContent = [["No feedback received"]]
  if (sum === 0) {
    return(
      <>
      <h1>Statistics</h1>
      <Table rows={defaultContent}/>
      </>)
  } else {
    let avg = 0;
    if (sum !== 0) avg = (posCount/(posCount+negCount+(neuCount/2)))*100;   
    const content = [
      ["Positive",posCount],
      ["Neutral",neuCount],
      ["Negative",negCount],
      ["Total Votes",sum],
      ["Average",avg,"% positive"]
    ]

    return(
      <>
      <h1>Statistics</h1>
      <Table rows={content} />
      {/* <StatsLine textPre="Positive: " value={posCount} />
      <StatsLine textPre="Neutral: " value={neuCount} />
      <StatsLine textPre="Negative: " value={negCount} />
      <StatsLine textPre="Total votes: " value={sum} />
      <StatsLine textPre="Average: " value={avg} textPost="% positive" /> */}
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