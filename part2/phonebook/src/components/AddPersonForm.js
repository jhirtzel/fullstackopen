const AddPersonForm = ({name, number, fAddPerson, fHandlePersonChange, fHandleNumberChange}) => {
	return (
		<form onSubmit={fAddPerson}>
		<div>
			name: <input 
							onChange={fHandlePersonChange}
							value={name}
						/><br/>
			number: <input
								onChange={fHandleNumberChange}
								value={number}
						/>
		</div>
		<div>
			<button type="submit">Add</button>
		</div>
	</form>
	)
}

export default AddPersonForm