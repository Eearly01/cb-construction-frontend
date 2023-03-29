import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post('/api/register', { email, password });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
	</form>

		</>
	)
}

export default RegistrationForm
