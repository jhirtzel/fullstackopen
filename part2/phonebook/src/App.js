import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 'Arto'}
  ]) 
  const [newName, setNewName] = useState('')

const addPerson = (event) => {
  event.preventDefault()
  const newPerson = {
    name: newName,
    id: newName
  }

  setPersons(persons.concat(newPerson))
  setNewName('')
}

const handlePersonChange = (event) => {
  // console.log(event.target)
  setNewName(event.target.value)
}

return (
  <div>
    <h2>Phonebook</h2>
    <form onSubmit={addPerson}>
      <div>
        name: <input 
                onChange={handlePersonChange}
                value={newName}
              />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    {persons.map(person => <li key={person.id}>{person.name}</li>)}
  </div>
)
}

export default App