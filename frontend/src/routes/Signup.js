import react from 'react'
import "./Home.css";


const SignUp = () => {
 	return (
 		<div>
 			<div className='card'>
 				<h1>Sign Up</h1>
 			</div>
			<div className='center-container form-container'>
				<form>
					<input className="form-input" type="email" placeholder="Email" />
					<input className="form-input" type="password" placeholder="Password" />
					<button type="submit">Sign Up</button>
				</form>
			</div>
 		</div>
		
 	);
 };

export default SignUp;