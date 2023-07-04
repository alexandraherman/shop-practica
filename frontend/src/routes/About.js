import React from "react";
import "./Home.css";
import"./About.css";

const About = () => {
	return (
		<div>
			<div className="card">
				<h1>
					About
				</h1>
			</div>
			<div className="info ">
				<p>Pe acest site puteți găsi o varietate de cărți pentru toate vârstele. Sunt nenumărate motive pentru care toți ar trebui să citim. S-au făcut și se fac în continuare nenumărate studii care să ne răspundă întrebării De ce e bine să citim. Fiecare avem un alt motiv pentru care citim, uneori citim de plăcere, alteori pentru a acumula cunoștințe, cert este că cititul ne este de foarte mare folos.</p>
					
				<p>Indiferent de motivul pe care-l avem pentru citit, dacă ne vom face un obicei din citit, finalitatea va fi că vom avea o viață mai bună. Fără să ne dăm seama vom învăța să luăm decizii mai bune, ne va ajuta să ne înțelegem mai bine (pe noi și pe ceilalți) și ne va ajuta să ne menținem un echilibru/stabilitate emoțională.</p>
					
				<p>Ca părinte, îți dorești pentru copilul tău tot ce e mai bun în lume. Pentru asta, fă-l să iubească cărțile! Iată mai jos, ce va câștiga copilul tău din citit:</p>
				
				<div className="points">
					
					<ol>
						<li>Să își dezvolte imaginația</li>
						<li>Va învăța să fie mai tolerant</li>
						<li>Va învăța să empatizeze</li>
						<li>Își va dezvolta abilitățile de comunicare</li>
						<li>Va învăța să-și depășească limitele</li>
						<li>Va învăța să gândească liber</li>
						<li>Își va descoperi noi pasiuni</li>
						<li>Va învăța să se concentreze</li>
						<li>Va găsi soluții la problemele sale</li>
						<li>Va învăța să se relaxeze</li>
					</ol>
					<div className="image-container">
						<img src="/p1.png" alt="Imagine care nu stiu de ce nu se pune" className="point-image" />
					</div>
				</div>

					
				<p>Data viitoare, când ai de ales între o jucărie nouă și strălucitoare și o carte mică, ce vei alege pentru copilul tău?</p>
    		</div>
		
		</div>
	);
};

export default About;
