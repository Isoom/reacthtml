import React from "react";

class Home extends React.Component {
	render() {
		return (

			<body>
				<div class="body-bambu">
					<header>
						<div class="dropdown">
						
							<button class="btn"><i class="fa fa-bars"></i></button>
							<div class="content">
								<a href="meny.html">MENY</a>
								<a href="bilder.html">BILDER</a>
								<a href="tider.html">TIDER</a>
								<a href="kontakt.html">KONTAKT</a>
								<a href="dagens.html">DAGENS</a>
								<a href="extra.html">EXTRA</a>
							</div>
						</div>
						
						<div class="menu-container">
							<div><a href="meny.html" class="link-meny"><h2 class="h2">MENY</h2> </a></div>
							<div><a href="bilder.html" class="link-meny"><h2 class="h2">BILDER</h2></a></div>
							<div><a href="tider.html" class="link-meny"><h2 class="h2">TIDER</h2></a></div>
							<div><a href="kontakt.html" class="link-meny"><h2 class="h2">KONTAKT</h2></a></div>
							<div><a href="dagens.html" class="link-meny"><h2 class="h2">DAGENS</h2></a></div>
							<div><a href="extra.html" class="link-meny"><h2 class="h2">EXTRA</h2></a></div>
						</div>
				
			
					</header>
		
					<main>
					
						<div class="menuBox">
							<img src={require("../icons/loggan.png")} alt="aichi-logo" class="logo"></img>
						
							<div class="menuTitle">
							
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