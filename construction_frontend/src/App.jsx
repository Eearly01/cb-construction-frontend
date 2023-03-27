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
		axios.post('http://localhost:8000/sites', newConstruction).then((res) => {
			console.log(res)
			getData()
		})
	}

	// get construction data
	const getData = () => {
		axios
			.get('http://localhost:8000/sites')
			.then(
				(res) => setConstruction(res.data),
				(err) => console.error(err)
			)
			.catch((error) => console.error(error))
	}

	// delete function

	const handleDelete = (event) => {
		axios
			.delete(`http://localhost:8000/sites/${event.target.value}`)
			.then((res) => {
				getData()
			})
	}

	// edit function
	const handleUpdate = (editConstruction) => {
		console.log(editConstruction)
		axios
			.put(
				`http://localhost:8000/sites/${editConstruction.id}`,
				editConstruction)
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
		<h1 className='pageTitle'>Construction Tracker</h1>
			<Add handleCreate={handleCreate} />
			<div className='container'>
				{construction.map((construction) => {
					return (
						<div className='classContainer' key={construction.id}>
							<h3 className='jobName' >Name: {construction.job}</h3>
							<h4 className='fenceFtg' >feet of silt fence used: {construction.footage}</h4>
							<Edit className='editBtn' handleUpdate={handleUpdate} construction={construction} />
							<button className='deleteBtn' onClick={handleDelete} value={construction.id}>
								delete site
							</button>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default App
