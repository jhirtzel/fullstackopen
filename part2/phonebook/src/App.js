import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchField from './components/SearchField'
import AddPersonForm from './components/AddPersonForm'
import Phonebook from './components/Phonebook'

const App = (props) => {
  const [persons, setPersons] = useState([]) 
  const [search, setSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const loadData = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('retrieved from server', response.data)
      })
    console.log('loaded data from server')
  }

  useEffect(loadData, [])

  const addPerson = (event) => {
    event.preventDefault()

    // don't allow duplicates to be added, and require name and number
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
      <SearchField searchCriteria={search} handleSearchChange={handleSearchChange} />
      <h4>Search Results</h4>
      <Phonebook personList={persons} search={search} />

      <h2>Add a new entry</h2> 
      <AddPersonForm 
        name={newName}
        number={newNumber}
        fAddPerson={addPerson}
        fHandlePersonChange={handlePersonChange}
        fHandleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Phonebook personList={persons} />
    </div>
  )
}

export default App