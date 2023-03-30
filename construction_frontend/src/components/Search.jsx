import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'

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
		<div>
			<input type='text' value={searchQuery} onChange={handleSearchQuery} />
			<div>
				{searchResults.map((searchData) => (
					<Card>
						<Card.Body>
							{/* <div> key={construction.id} </div> */}
							<Card.Text className='jobName'> Name: {searchData.job}</Card.Text>
							<Card.Text className='fenceFtg'>
								Feet of silt fence used: {searchData.footage} ft
							</Card.Text>
							{/* <Edit className='editBtn' handleUpdate={handleUpdate} construction={searchData} /> */}
							<button
								className='deleteBtn'
								onClick={props.handleDelete}
								value={searchData.id}
							>
								Delete Job Site
							</button>
						</Card.Body>
					</Card>
				))}
			</div>
		</div>
	)
}

export default Search
// need to pass down construction data, and get data. work on filter . axios call i think should be a .get function
