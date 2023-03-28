import React, { useState, useEffect } from 'react'

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
				<label htmlFor='job' className='name'>Name: </label>
				<input
					type='text'
					name='job'
					value={construction.job}
					onChange={handleChange}
				/>
				<br />
				<br />
				<label htmlFor='footage'>Silt fence used: </label>
				<input
					type='number'
					name='footage'
					value={construction.footage}
					onChange={handleChange}
				/>
				<input type='submit' />
			</form>
		</>
	)
}

export default Add
