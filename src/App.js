import Home from "./pages/Home";
import Kontakt from "./pages/Kontakt";
import Bilder from "./pages/Bilder";
import Dagens from "./pages/Dagens";
import Meny from "./pages/Meny";
import Tider from "./pages/Tider";
import Extra from "./pages/Extra";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import './App.css';

function App() {
	
  return (

	<div>
	
		<Router>

			<Routes>
				<Route exact path="/index.html" element={<Home />}/>
				<Route path="/Kontakt.html" element={<Kontakt />} />
				<Route path="/Bilder.html" element={<Bilder />} />
				<Route path="/Dagens.html" element={<Dagens />} />
				<Route path="/Meny.html" element={<Meny />} />
				<Route path="/Tider.html" element={<Tider />} />
				<Route path="/Extra.html" element={<Extra />} />

			</Routes>
		</Router>
		
		
	</div>

  );
	
}


export default App;
