import React from "react";
import { NavLink, Link } from "react-router-dom";

class Bilder extends React.Component {
	render() {
		return( 
			<body>
				<header>
					<h1>BILDER</h1>
	
					<div className="back-button">
						<NavLink to="/home">
							<img src={require("../icons/back_arrow.png")} alt="image" className="image"></img>
						</NavLink>
					</div>
			
				</header>

				<div className="sushi-sub-title"><h2>Här kan du se hur vår sushi ser ut</h2></div>

				<div className="bilderGrid">
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" className="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" className="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" className="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" className="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" className="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" className="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" className="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" className="imageSushi"></img>

				</div>
			</body>
		)
	}
}

export default Bilder;