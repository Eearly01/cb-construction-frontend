import './App.scss';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "react-bootstrap/Card";
import Register from './components/Register';
import Search from './components/Search';

// connect components
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {
	let [construction, setConstruction] = useState([])

	// create people function
	const handleCreate = (newConstruction) => {
		axios
			.post(
				'https://cb-construction-backend.onrender.com/sites',
				newConstruction
			)
			.then((res) => {
				console.log(res)
				getData()
			})
	}

	// get construction data
	const getData = () => {
		axios
			.get('https://cb-construction-backend.onrender.com/sites')
			.then(
				(res) => setConstruction(res.data),
				(err) => console.error(err)
			)
			.catch((error) => console.error(error))
	}

	// delete function

	const handleDelete = (event) => {
		axios
			.delete(
				`https://cb-construction-backend.onrender.com/sites/${event.target.value}`
			)
			.then((res) => {
				getData()
			})
	}

	// edit function
	const handleUpdate = (editConstruction) => {
		console.log(editConstruction)
		axios
			.put(
				`https://cb-construction-backend.onrender.com/sites/${editConstruction.id}`,
				editConstruction
			)
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
		{/* <Register /> */}
			<Add handleCreate={handleCreate} />
			{/* <Search
			construction={construction}
			getData={getData}
			/> */}
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
