import React, { useState } from 'react';
import axios from 'axios';

function Register() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.username]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const response = await axios.post(
				'http://localhost:8000/register/',
				formData
			)

			// If the registration was successful, save the authentication token to localStorage
			localStorage.setItem('token', response.data.token)

			// Redirect the user to the home page
			window.location.href = '/'
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Username:
					<input
						type='text'
						name='username'
						value={formData.username}
						onChange={(e) =>
							setFormData({ ...formData, username: e.target.value })
						}
					/>
				</label>
				<label>
					Email:
					<input
						type='email'
						name='email'
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
					/>
				</label>
				<label>
					Password:
					<input
						type='password'
						name='password'
						value={formData.password}
						onChange={(e) =>
							setFormData({ ...formData, password: e.target.value })
						}
					/>
				</label>
				<button type='submit'>Register</button>
			</form>
		</>
	)
}

export default Register;
