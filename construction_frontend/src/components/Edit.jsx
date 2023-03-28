import React, { useState } from 'react'

const Edit = (props) => {
	const emptyConstruction = { job: '', footage: '' }
	const [construction, setConstruction] = useState(props.construction)

	const handleChange = (event) => {
		setConstruction({
			...construction,
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
				<summary className="editJob" >Edit Job Site Info</summary> <br/>
				<form onSubmit={handleSubmit}>
					<label htmlFor='job'>Job: </label> <br/>
					<input
						type='text'
						name='job'
						value={construction.job}
						onChange={handleChange}
					/>
					<br />
					<br />
					<label htmlFor='footage'>Silt Fence Used: </label>
					<input
						type='number'
						name='footage'
						value={construction.footage}
						onChange={handleChange}
					/>
					<br/>
					<input type='submit' className="editBtn"/>
				</form>
			</details>
		</>
	)
}

export default Edit
