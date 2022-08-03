const SearchField = ({searchCriteria, handleSearchChange}) => {
	console.log('SearchField props', searchCriteria, handleSearchChange)
	return (
		<div>
		Filter results to: <input 
												value={searchCriteria}
												onChange={handleSearchChange}
												/>
		</div>
	)
}

export default SearchField