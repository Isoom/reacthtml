import React from "react";

class Header extends React.Component {
	render() {
		return (
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
						
					<div class="desktop-dropdown-container">
						<div id="flip"><a class="link-meny"><h2 class="h2">MENY</h2></a></div>
						<div class="desktop-dropdownMenu">
							<div id="panel"><a href="dagens.html"class="link-meny"><h2 class="h2">DAGENS LUNCH</h2></a>										<a href="meny.html"class="link-meny"><h2 class="h2">MIDDAG</h2></a></div>
						</div>
					</div>
					<div><a href="bilder.html" class="link-meny"><h2 class="h2">BILDER</h2></a></div>
					<div><a href="tider.html"class="link-meny"><h2 class="h2">TIDER</h2></a></div>
					<div><a href="kontakt.html"class="link-meny"><h2 class="h2">KONTAKT</h2></a></div>
					<div><a href="extra.html"class="link-meny"><h2 class="h2">EXTRA</h2></a></div>
				</div>			
		 
			</header>
		);
	}
}

export default Header;