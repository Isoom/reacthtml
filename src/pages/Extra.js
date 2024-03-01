import React from "react";

class Extra extends React.Component {
	render() {
		return (
			<body>
				<header>
					<h1>EXTRA</h1>
			
					<div class="back-button">
						<a href="index.html">
							<img src={require("../icons/back_arrow.png")} alt="image" class="image"></img>
						</a>
					</div>
		
				</header>
	
				<div class="extraGrid">
		
					<div class="table-container">
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
		
					<div class="video-container">
		
						<video width="320" height="auto" controls>
							<source src={require("../videos/sushi.mp4")} type="video/mp4" alt="video-of-sushi"></source>
				
						</video>
		
					</div>
		
					<div class="eForm-container">
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
					
					<div class="list-container">
		
						<h2>Allergier</h2>
						<dl>
							<dt>Glutenfritt</dt>
							<dd>- Avokado sushi</dd>
							<dd>- Ägg sushi</dd>
							<dd>- Lax sushi</dd>
		
							<dt>Laktosfritt</dt>
							<dd>- Avokdo sushi</dd>
						</dl>



						<h2>Like Button</h2>
						


					</div>
		
				</div>
			
			</body>

		)
	}
}
export default Extra;