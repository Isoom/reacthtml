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
				<Route exact path="/home" element={<Home />}/>
				<Route path="/kontakt" element={<Kontakt />} />
				<Route path="/bilder" element={<Bilder />} />
				<Route path="/dagens" element={<Dagens />} />
				<Route path="/meny" element={<Meny />} />
				<Route path="/tider" element={<Tider />} />
				<Route path="/extra" element={<Extra />} />

			</Routes>
		</Router>
		
		
	</div>

  );
	
}


export default App;
