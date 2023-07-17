import react from "react"
import "./Home.css";
import { Button } from './Button';

const Home = () => {
	return (
	  <div>
			
			<div className="card">
				<h1>Home</h1>
			</div>
		
			<div className='hero-container'>
      			<h1>The adventure of creation</h1>
      			<p>What are you waiting for?</p>

				<div className='hero-btns'>
					<Button
						className='btns'
						buttonStyle='btn--outline'
						buttonSize='btn--large'
					>
						GET STARTED
					</Button>
				</div>
			</div>
		</div>
	

	);
};

export default Home;