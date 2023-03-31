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

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.get('https://cb-construction-backend-sei123.onrender.com/admin/csrf/')
			.then((response) => {
				const csrfToken = response.data.csrfToken
				console.log(csrfToken)
				axios
					.post(
						'https://cb-construction-backend-sei123.onrender.com/register/',
						formData,
						{
							headers: {
								'X-CSRFToken': csrfToken,
							},
						}
					)
					.then((response) => {
						console.log(response.data)
						console.log(response.data)
					})
					.catch((error) => {
						console.log(error.response.data)
					})
			})
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="registerForm">
				<label className='registerUsername'>
					Username:
					<input
						className='usernameInput'
						type='text'
						name='username'
						value={formData.username}
						onChange={(e) =>
							setFormData({ ...formData, username: e.target.value })
						}
					/>
				</label>
				<label className='registerEmail'>
					Email:
					<input
						className='usernameEmail'
						type='email'
						name='email'
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
					/>
				</label>
				<label className='registerPassword'>
					Password:
					<input
						className='usernamePassword'
						type='password'
						name='password'
						value={formData.password}
						onChange={(e) =>
							setFormData({ ...formData, password: e.target.value })
						}
					/>
				</label>
				<button type='submit' className='registerBtn' >Register</button>
			</form>
		</>
	)
}

export default Register;
