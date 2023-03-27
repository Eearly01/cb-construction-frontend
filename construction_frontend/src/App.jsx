import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// connect components
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {
	let [construction, setConstruction] = useState([])

	// create people function
	const handleCreate = (newConstruction) => {
		axios
			.post('http://localhost:8000/api/sites', newConstruction)
			.then((res) => {
				console.log(res)
				getData()
			})
	}

	// get construction data
	const getData = () => {
		axios
			.get('http://localhost:8000/api/sites')
			.then(
				(res) => setConstruction(res.data),
				(err) => console.error(err)
			)
			.catch((error) => console.error(error))
	}

	// delete function

	const handleDelete = (event) => {
		axios
			.delete(`http://localhost:8000/api/sites/${event.target.value}`)
			.then((res) => {
				getData()
			})
	}

	// edit function
	const handleUpdate = (editConstruction) => {
		console.log(editConstruction)
		axios
			.put(`http://localhost:8000/api/sites/${editConstruction.id}`, editConstruction)
			.then((res) => {
				getData()
			})
	}

	// useEffect
	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<h1>input form</h1>
			<Add handleCreate={handleCreate} />
			<div>
				<h4>job name: {construction.job}</h4>
				<h4>silt fence used: {construction.footage} FT</h4>
				<Edit handleUpdate={handleUpdate} construction={construction} />
				{/* delete button */}
				<button onClick={handleDelete} value={construction.id}>
					delete character
				</button>
			</div>
		</>
	)
}

export default App
