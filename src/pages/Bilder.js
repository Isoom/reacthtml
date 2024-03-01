import React from "react";

class Bilder extends React.Component {
	render() {
		return( 
			<body>
		
				<header>
					<h1>BILDER</h1>
	
					<div class="back-button">
						<a href="index.html"><img src={require("../icons/back_arrow.png")} alt="image" class="image"></img></a>
					</div>
			
				</header>

				<div class="sushi-sub-title"><h2>Här kan du se hur vår sushi ser ut</h2></div>

				<div class="bilderGrid">
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" class="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" class="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" class="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" class="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" class="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" class="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" class="imageSushi"></img>
					<img src={require("../images/sushi1.jpeg")} alt="image-sushi" class="imageSushi"></img>

				</div>
			</body>
		)
	}
}

export default Bilder;