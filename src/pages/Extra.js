import React from "react";
import { NavLink, Link } from "react-router-dom";

class Extra extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: false
		};
		this.handleLikeClick = this.handleLikeClick.bind(this);
	}
	    
	handleLikeClick() {
		this.setState(prevState => ({
			liked: !prevState.liked
		}));
	}

	render() {

		const { liked } = this.state;
		
		return (
			<body>
				<header>
					<h1>EXTRA</h1>
			
					<div className="back-button">
						<NavLink to="/home">
							<img src={require("../icons/back_arrow.png")} alt="image" class="image"></img>
						</NavLink>
					</div>
		
				</header>
	
				<div className="extraGrid">
		
					<div className="table-container">
						<h2>HTML Table</h2>
						<table>
							<tr>
								<th>Company</th>
								<th>Contact</th>
								<th>Country</th>
							</tr>
							<tr>
								<td>Alfreds Futterkiste</td>
								<td>Maria Anders</td>
								<td>Germany</td>
							</tr>
							<tr>
								<td>Centro comercial Moctezuma</td>
								<td>Francisco Chang</td>
								<td>Mexico</td>
							</tr>
							<tr>
								<td>Ernst Handel</td>
								<td>Roland Mendel</td>
								<td>Austria</td>
							</tr>
							<tr>
								<td>Island Trading</td>
								<td>Helen Bennett</td>
								<td>UK</td>
							</tr>
							<tr>
								<td>Laughing Bacchus Winecellars</td>
								<td>Yoshi Tannamuri</td>
								<td>Canada</td>
							</tr>
							<tr>
								<td>Magazzini Alimentari Riuniti</td>
								<td>Giovanni Rovelli</td>
								<td>Italy</td>
							</tr>
						</table>
					</div>
		
					<div className="video-container">
		
						<video width="320" height="auto" controls>
							<source src={require("../videos/sushi.mp4")} type="video/mp4" alt="video-of-sushi"></source>
				
						</video>
		
					</div>
		
					<div className="eForm-container">
						<h2>Maila in om du har några synpunkter!</h2>
		
						<form action="mailto:someone@example.com" method="post" enctype="text/plain">
							<label for="name">Namn:</label>
							<br></br>
							<input type="text" name="name"></input>
							<br></br>
							<label for="email">Email:</label>
							<br></br>
							<input type="text" name="email"></input>
							<br></br>
							<input type="submit" value="Submit"></input>
							<br></br>
						</form> 
		
					</div>
					
					<div className="list-container">
		
						<h2>Allergier</h2>
						<dl>
							<dt>Glutenfritt</dt>
							<dd>- Avokado sushi</dd>
							<dd>- Ägg sushi</dd>
							<dd>- Lax sushi</dd>
		
							<dt>Laktosfritt</dt>
							<dd>- Avokdo sushi</dd>
						</dl>

					</div>
					<div>
						<button onClick={this.handleLikeClick}>
							{liked ? "Unlike" : "Like"}
						</button>
						{liked && <p>You liked this!</p>}
					</div>
		
				</div>

			
			</body>

		)
	}
}
export default Extra;