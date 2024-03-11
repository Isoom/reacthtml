import React from "react";
import { NavLink, Link } from "react-router-dom";
class Kontakt extends React.Component {
	render() {
		return (

		<body>
		
		<header>
			<h1>KONTAKT</h1>
	
			<div className="back-button">
				<NavLink to="/home">
					<img src={require("../icons/back_arrow.png")} alt="image" className="image"></img>
				</NavLink>
			</div>

		</header>


		<main>
			
			<div className="box-contact-adress">
				<div className="box-phone-mail">
	
					<div className="phone-number">
						<h2>TELEFON:</h2>
						<h2>08 - 655 08 88</h2>
					</div>
					
					<p>Tillgänglig under öppettider.</p>
					
	
					<div className="email-address">
						<h2> EMAIL:</h2>
						<h2> aichi-sushi@gmail.com</h2>
					</div>

					<p>Maila in till oss för möjliga frågor.</p>
		
				</div>
				
				<div className=".box-address-maps" >
	
					<div className="address-title"><h1>ADRESS</h1></div>
	
					<div className="addressText" >
						<h2>Stockholmsvägen 47</h2>
						
					</div>
					<div className="addressText" >
						<h3>Stocksunds Centrum</h3>
					</div>
					
				</div>
			</div>
		</main>


		<footer>

			<div className="box-mapIcon-link">
				<img src={require("../icons/mapIcon.png")} alt="map-icon" className="map-icon"></img>
					
				<div className="navLinks2">
					<NavLink to="https://www.google.com/maps/place/Aichi/@59.3852252,18.0568216,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9cf876e49c6f:0x9220724ce3c2b809!8m2!3d59.3852252!4d18.0593965!16s%2Fg%2F11bw426m7n?entry=ttu.html" className="link-meny"><h2 className="h2">HITTA HIT</h2></NavLink>					
				</div>
			</div>

		</footer>

		<script src="script2.js"></script>
		
	</body>
		)
	}
}

export default Kontakt;