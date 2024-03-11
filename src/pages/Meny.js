import React from "react";
import { NavLink, Link } from "react-router-dom";
class Meny extends React.Component {
	render() {
		return(
			<body>
				<header>
					<h1>MENY</h1>
					<div className="back-button">
						<NavLink to="/home">
							<img src={require("../icons/back_arrow.png")} alt="image" class="image"></img>
						</NavLink>
					</div>
				</header>
				<div className="menuGrid" >
					<div className="product">
						<div className="food-category-title"><h2>SUSHI?</h2></div>
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
		
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
		
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
		
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
		
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
		
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
					</div>

					<div className="product">
						<div className="food-category-title"><h2>SUSHI?</h2></div>

						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
			
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
			
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
							<p>brödtext</p>
			
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
		
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
		
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
					</div>
					
					<div className="doubleMenu">
							
						<div className="product">
							<div className="food-category-title"><h2>SUSHI?</h2></div>
			
							<div className="name-price " >
								<h3> Lite sushi</h3>
								<h3> 120 kr</h3>
							</div>
							<p>brödtext</p>
				
							<div className="name-price " >
								<h3> Lite sushi</h3>
								<h3> 120 kr</h3>
							</div>
							<p>brödtext</p>
				
							<div className="name-price " >
								<h3> Lite sushi</h3>
								<h3> 120 kr</h3>
							</div>
							<p>brödtext</p>

						</div>

						<div className="product">

							<div className="food-category-title"><h2>SUSHI?</h2></div>
			
							<div className="name-price " >
								<h3> Lite sushi</h3>
								<h3> 120 kr</h3>
							</div>
							<p>brödtext</p>
			
							<div className="name-price " >
								<h3> Lite sushi</h3>
								<h3> 120 kr</h3>
							</div>
							<p>brödtext</p>

							<div className="name-price " >
								<h3> Lite sushi</h3>
								<h3> 120 kr</h3>
							</div>
							<p>brödtext</p>
						</div>

					</div>

					<div className="product">
						<div className="food-category-title"><h2>SUSHI?</h2></div>

						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
			
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>	

						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
			
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
		
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
						</div>
						<p>brödtext</p>
		
						<div className="name-price " >
							<h3> Lite sushi</h3>
							<h3> 120 kr</h3>
							</div>
						<p>brödtext</p>
					</div>
				</div>
			</body>
		)
	}
}

export default Meny;