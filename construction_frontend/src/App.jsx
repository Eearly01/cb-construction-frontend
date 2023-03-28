import './App.scss';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "react-bootstrap/Card";

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
		<section className="root">
		<h1 className='pageTitle'>Construction Tracker</h1>
			<Add handleCreate={handleCreate} />
				<section className='cards'>
				<ul className="card-container">
			<div className='container'>
				{construction.map((construction) => {
					return (
						<Card>
							<Card.Body>
						{/* <div> key={construction.id} </div> */}
							<Card.Text className='jobName'> Name: {construction.job}</Card.Text>
							<Card.Text className='fenceFtg' >Feet of silt fence used: {construction.footage} ft</Card.Text>
							<Edit className='editBtn' handleUpdate={handleUpdate} construction={construction} />
							<button className='deleteBtn' onClick={handleDelete} value={construction.id}>
								Delete Job Site
							</button>
						</Card.Body>
						</Card>
					)
				})}
			</div>
			</ul>
			</section>
			</section>
		</>
	)
}

export default App
