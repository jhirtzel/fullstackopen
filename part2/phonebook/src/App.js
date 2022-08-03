import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState(props.initData) 
  const [search, setSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    // don't allow duplicates to be added
    if(persons.some(person => person.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    } else if (!newName) {
      window.alert('Name is required')
    } else if (!newNumber) {
      window.alert('Number is required')
    } else {
      const newId = persons.length + 1
      const newPerson = {
        name: newName,
        number: newNumber,
        id: newId
      }
      setPersons(persons.concat(newPerson))
      //clear the form after each entry
      setNewName('')
      setNewNumber('')
    }
  } 

  const filterPhonebook = (event) => {
    const entry = event.target.value 

    // if (entry === '') {
    //   filteredPersons = Array.of(persons)
    //   console.log('Filtered list', filteredPersons)
    // } else {
    //   filteredPersons = persons.map(person => person.name.toLowerCase())
    //                           .filter(name => name.includes(entry.toLowerCase()))
    //   console.log('Filtered list', filteredPersons)
    // }
  }

const handlePersonChange = (event) => {
  console.log(event.target)
  setNewName(event.target.value)
}

const handleNumberChange = (event) => {
  console.log(event.target)
  setNewNumber(event.target.value)
}

const handleSearchChange = (event) => {
  console.log(event.target.value)
  setSearch(event.target.value)
}

return (
  <div>
    <h2>Phonebook</h2>
    {/* <form onSubmit={filterPhonebook}> */}
      <div>
        Filter results to: <input 
                            value={search}
                            onChange={handleSearchChange}
                            />
      </div>
    {/* </form> */}
    <h2>Add a new entry</h2> 
    <form onSubmit={addPerson}>
      <div>
        name: <input 
                onChange={handlePersonChange}
                value={newName}
              /><br/>
        number: <input
                  onChange={handleNumberChange}
                  value={newNumber}
              />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    {persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
            .map(person => <li key={person.id}>{person.name}: {person.number}</li>)}
  </div>
)
}

export default App