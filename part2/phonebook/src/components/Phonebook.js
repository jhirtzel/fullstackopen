const Phonebook = ({personList, search}) => {
	console.log('Phonebook search value', search)
	let resultList = Array.of(personList)
	if (search === '') {
		resultList = []
	} else if (search) {
		resultList = personList.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
			.map(person => <li key={person.id}>{person.name}: {person.number}</li>)
	} else {
		resultList = personList.map(person => <li key={person.id}>{person.name}: {person.number}</li>)
	}

	return resultList
}

export default Phonebook