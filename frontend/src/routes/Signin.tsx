import React, { useState } from 'react';
import "./Home.css";

import axios from 'axios';
import { useNavigate } from 'react-router';

function SignIn () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState('');
  
  let history= useNavigate();
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);

    
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password,
      });
      console.log(response.data); 
      history('/products');
      window.location.reload();

      
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
        <h1>Sign In</h1>
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

export default SignIn;
