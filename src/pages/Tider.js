import React from "react";
import { NavLink, Link } from "react-router-dom";
class Tider extends React.Component {
	render() {
		return (
			<body>
			
				<header>
					<h1>ÖPPETTIDER</h1>
			
					<div className="back-button">
						<NavLink to="/home">
							<img src={require("../icons/back_arrow.png")} alt="image" className="image"></img>
						</NavLink>
					</div>
		
				</header>
	
				<main>
			
					<div className="box-day-time">
						
						<div className="timeBox">
		
							<div className="ordinary-deviant-title"><h2>ORDINARIE ÖPPETTIDER</h2></div>
			
							<div className="day-time" >
								<h2>MÅNDAG - TORSDAG:</h2>
								<h2> 11:00 - 19:30</h2>
							</div>
							<p>Dagens lunch serveras mellan 11:00 - 13:00</p>
			
							<div className="day-time" >
								<h2> FREDAG:</h2>
								<h2> 11:00 - 22:30</h2>
							</div>
							<p>Dagens lunch serveras mellan 11:00 - 13:00</p>
			
							<div className="day-time" >
								<h2> LÖRDAG - SÖNDAG:</h2>
								<h2>12:00 - 22:00 </h2>
							</div>
							<p>brödtext</p>
				
						</div>
						<div className="timeBox">
			
							<div className="ordinary-deviant-title"><h2>AVVIKANDE ÖPPETTIDER</h2></div>
			
							<div className="day-time" >
								<h2>JULAFTON:</h2>
								<h2> STÄNGT</h2>
							</div>
							<p>brödtext</p>
							
			
							<div className="day-time" >
								<h2> JULDAGEN:</h2>
								<h2> 13:00 - 18:30</h2>
							</div>
							<p>brödtext</p>
							
							<div className="day-time" >
								<h2> PÅSKAFTON, MIDSOMMARAFTON:</h2>
								<h2> STÄNGT</h2>
							</div>
							<p>brödtext</p>
							
							
						</div>
		
					</div>
		
				</main>
	
			</body>
		)
	}
}
export default Tider;