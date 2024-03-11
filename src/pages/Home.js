import React from "react";
import { NavLink, Link } from "react-router-dom";

class Home extends React.Component {
	render() {
		return (

			<body>
				<div className="body-bambu">
					<header>
						<div className="dropdown">
						
							<button className="btn"><i className="fa fa-bars"></i></button>
							<div className="content">
								<div className="navLinks-dropdown">
									<NavLink to="/meny">MENY</NavLink>
									<NavLink to="/bilder">BILDER</NavLink>
									<NavLink to="/tider">TIDER</NavLink>
									<NavLink to="/kontakt">KONTAKT</NavLink>
									<NavLink to="/dagens">DAGENS</NavLink>
									<NavLink to="/extra">EXTRA</NavLink>
								</div>
							</div>	
						</div>
						
						<div className="menu-container">
							<div className="navLinks">
								<div><NavLink to="/meny" className="link-meny"><h2 className="h2">MENY</h2> </NavLink></div>
								<div><NavLink to="/bilder" className="link-meny"><h2 className="h2">BILDER</h2></NavLink></div>
								<div><NavLink to="/tider" className="link-meny"><h2 className="h2">TIDER</h2></NavLink></div>
								<div><NavLink to="/kontakt" className="link-meny"><h2 className="h2">KONTAKT</h2></NavLink></div>
								<div><NavLink to="/dagens" className="link-meny"><h2 className="h2">DAGENS</h2></NavLink></div>
								<div><NavLink to="/extra" className="link-meny"><h2 className="h2">EXTRA</h2></NavLink></div>
							</div>
						</div>
				
			
					</header>
		
					<main>
					
						<div className="menuBox">
							<img src={require("../icons/loggan.png")} alt="aichi-logo" className="logo"></img>
						
							<div className="menuTitle">
							
								<h1>RESTAURANG</h1>
		
							</div>

							
		
						</div>	
		
					</main>
					
		
				</div>
		
			</body>

		)
	}
}

export default Home;