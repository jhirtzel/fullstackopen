import React, { useState } from 'react'

const Button = ({clickHandler, label}) => (
  <button onClick={clickHandler} >{label}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

	const votelist = Array(anecdotes.length).fill(0);
	// console.log(votelist);
   
  const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState({...votelist})

	const handleChooser = () => {
		// console.log("clicked button")
		setSelected(getRandBetween(0, anecdotes.length));
	}

	// state handler to increment the votes at a given index
	function handleVotes(vote) {
		let updVotes = {...votes};
		updVotes[vote] += 1;
		setVotes(updVotes);
		return vote;
	}

	function getRandBetween(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		// return a range exclusive of the max value, to be used in array indexing
		return Math.floor(Math.random() * (max - min) + min);
	}

	function getTopVote() {
		// copy the votes so we don't mutate state
		let sorted = {...votes};
		// sorted.entries.sort((a,b) => a - b);
		console.log(sorted);
		return sorted[0];
	}

  return (
    <div>
      <p>{anecdotes[selected]}</p>
			<p> index = {selected}</p>
			<Button label="next anecdote" clickHandler={handleChooser}/>
			<Button label="Vote for this anecdote" clickHandler={handleVotes({selected})}/>
			<h1>Top Anecdote is</h1>
			<p>{votes[getTopVote()]}</p>
    </div>
  )
}

export default App