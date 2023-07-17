import React, { useState } from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	console.log(name, age, email, password);
  
	
	  const response = await axios.post('/users/register', {
		Name: name,
		age,
		email,
		password,
		
	  });
	  console.log(response.data);
	  // Resetează valorile câmpurilor de formular
	  setName('');
	  setAge('');
	  setEmail('');
	  setPassword('');
	  setError('');
	
  };
  

  return (
    <div>
      <div className='card'>
        <h1>Register</h1>
      </div>
      <div className='center-container form-container'>
        <form onSubmit={handleSubmit}>
          <input
            className='form-input'
            required
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className='form-input'
            required
            type='number'
            placeholder='Age'
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <input
            className='form-input'
            required
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className='form-input'
            required
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {error && <p className='error-message'>{error}</p>} 
          <button className='butonregister' type='submit' disabled={!name || !age || !email || !password}>
            Register
          </button>
          <Link to="/signup" className='buton'>
            Ai cont deja?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
