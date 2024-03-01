import React from "react";

class Kontakt extends React.Component {
	render() {
		return (

		<body>
		
		<header>
			<h1>KONTAKT</h1>
	
			<div class="back-button">
				<a href="index.html">
					<img src={require("../icons/back_arrow.png")} alt="image" class="image"></img>
				</a>
			</div>

		</header>


		<main>
			
			<div class="box-contact-adress">
				<div class="box-phone-mail">
	
					<div class="phone-number">
						<h2>TELEFON:</h2>
						<h2>08 - 655 08 88</h2>
					</div>
					
					<p>Tillgänglig under öppettider.</p>
					
	
					<div class="email-address">
						<h2> EMAIL:</h2>
						<h2> aichi-sushi@gmail.com</h2>
					</div>

					<p>Maila in till oss för möjliga frågor.</p>
		
				</div>
				
				<div class=".box-address-maps" >
	
					<div class="address-title"><h1>ADRESS</h1></div>
	
					<div class="addressText" >
						<h2>Stockholmsvägen 47</h2>
						
					</div>
					<div class="addressText" >
						<h3>Stocksunds Centrum</h3>
					</div>
					
				</div>
			</div>
		</main>


		<footer>

			<div class="box-mapIcon-link">
			<img src={require("../icons/mapIcon.png")} alt="map-icon" class="map-icon"></img>
				

			<a href="https://www.google.com/maps/place/Aichi/@59.3852252,18.0568216,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9cf876e49c6f:0x9220724ce3c2b809!8m2!3d59.3852252!4d18.0593965!16s%2Fg%2F11bw426m7n?entry=ttu.html" class="link-map"><h2 class="h2">HITTA HIT</h2></a>
				
			</div>

		</footer>

		<script src="script2.js"></script>
		
	</body>
		)
	}
}

export default Kontakt;