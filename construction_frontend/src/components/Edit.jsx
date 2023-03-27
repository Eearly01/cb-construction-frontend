import React, { useState } from 'react'

const Edit = (props) => {
	let emptyConstruction = { name: '', age: '', main_power: '', team: '' }
	const [construction, setConstruction] = useState(emptyConstruction)

	// edit function
	const handleChange = (event) => {
		setConstruction({...props.construction,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleUpdate(construction)
	}

	return (
		<>
			<details>
				<summary>Edit construction from</summary>
				<form onSubmit={handleSubmit}>
					<label htmlFor='job'>Job: </label>
					<input
						type='text'
						name='job'
						value={construction.name}
						onChange={handleChange}
					/>
					<br />
					<br />
					<label htmlFor='footage'>silt fence used: </label>
					<input
						type='number'
						name='footage'
						value={construction.age}
						onChange={handleChange}
					/>

					<input type='submit' />
				</form>
			</details>
		</>
	)
}

export default Edit
