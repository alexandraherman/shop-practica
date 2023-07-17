import React, { useState } from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const profileInfo = null;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);

    
      const response = await axios.post('/auth/login', {
        email,
        password,
      });
      console.log(response.data); 

      
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  //const isFormValid = email && password; 

  return (
    <div>
      <div className='card'>
        <h1>Sign Up</h1>
      </div>
      <div className='center-container form-container'>
        <form onSubmit={handleSubmit}>
          <input
            className='form-input'
            type='email'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className='form-input'
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
          {/* {error && <p className='error-message'>{error}</p>}  */}

          <button type='submit' >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
