import react from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

const Register = () => {
 	return (
 		<div>
 			<div className='card'>
 				<h1>Register</h1>
 			</div>
			<div className='center-container form-container'>
				<form>
                    <input className="form-input" type="name" placeholder="Name" />
					<input className="form-input" type="age" placeholder="Age" />
					<input className="form-input" type="email" placeholder="Email" />
					<input className="form-input" type="password" placeholder="Password" />
					<button className="butonregister" type="submit">Register</button>
					
					<Link to="/signup" className='buton' >Ai cont deja?</Link>
					
				</form>
			</div>
 		</div>
		
 	);
 };

export default Register;