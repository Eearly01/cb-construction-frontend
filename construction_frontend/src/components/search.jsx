import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'

function Search(props) {
	const [searchQuery, setSearchQuery] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const handleSearchQuery = (searchData) => {
		if (searchQuery === props.construction.job) {
			axios
				.get(`http://localhost:8000/sites/${searchData.id}`, searchData)
				.then((res) => {
					props.getData()
				})
		} else {
			console.log('error somethings wrong in search component')
		}
	}
	// useEffect
	useEffect(() => {
		props.getData()
	}, [])

	return (
		<>
			<input type='text' value={searchQuery} onChange={handleSearchQuery} />
			<form onSubmit={handleSubmit} className='form'>
				<Form.Label htmlFor='job' className='name'>
					<h2>search job name:{' '}</h2>
				</Form.Label>{' '}
				<br />
				<input
					type='text'
					name='job'
					value={props.construction.job}
					onChange={handleChange}
					className='formControl'
				/>
				<br />
				<input type='submit' className='submitBtn' />
			</form>
		</>
	)
}

export default Search
// need to pass down construction data, and get data. work on filter . axios call i think should be a .get function
