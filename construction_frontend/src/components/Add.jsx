import React, { useState, useEffect } from 'react'
import Form from "react-bootstrap/Form"

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
	const [construction, setConstruction] = useState({ ...props.Construction })
	//  create functions
	const handleChange = (event) => {
		setConstruction({
			...construction,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleCreate(construction)
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="form">
				<Form.Label htmlFor='job' className='name'>Name: </Form.Label> <br />
				<input
					type='text'
					name='job'
					value={construction.job}
					onChange={handleChange}
					className='formControl'
				/>
				<br />
				<br />
				<Form.Label htmlFor='footage' className='footage'>Silt fence used: </Form.Label> <br/>
				<input
					type='number'
					name='footage'
					value={construction.footage}
					onChange={handleChange}
					className='formControl'
				/>
				<br/>
				<input type='submit' className="submitBtn" />
			</form>
		</>
	)
}

export default Add
