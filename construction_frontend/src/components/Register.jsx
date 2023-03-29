import React, { useState } from 'react';
import axios from 'axios';

function Register() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8000/register/', formData)
			.then((response) => {
        console.log(response.data)
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Username:
					<input
						type='text'
						name='username'
						value={formData.username}
						onChange={handleChange}
					/>
				</label>
				<label>
					Email:
					<input
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
					/>
				</label>
				<label>
					Password:
					<input
						type='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
					/>
				</label>
				<button type='submit'>Register</button>
			</form>
		</>
	);
}

export default Register;
