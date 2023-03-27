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
				<summary>Edit construction form</summary>
				<form onSubmit={handleSubmit}>
					<label htmlFor='job'>Job: </label>
					<input
						type='text'
						name='job'
						value={construction.job}
						onChange={handleChange}
					/>
					<br />
					<br />
					<label htmlFor='footage'>silt fence used: </label>
					<input
						type='number'
						name='footage'
						value={construction.footage}
						onChange={handleChange}
					/>

					<input type='submit' />
				</form>
			</details>
		</>
	)
}

export default Edit
