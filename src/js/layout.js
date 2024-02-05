import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Films } from "./views/Films.jsx";
import { People } from "./views/People.jsx";
import { Planets } from "./views/Planets.jsx";
import { Species } from "./views/Species.jsx";
import { Starships } from "./views/Starships.jsx";
import { Vehicles } from "./views/Vehicles.jsx";
import { VehiclesDetails} from "./views/VehiclesDetails.jsx"
import { StarshipsDetails } from "./views/StarshipsDetails.jsx";
import { SpeciesDetails } from "./views/SpeciesDetails.jsx";
import { PlanetsDetails } from "./views/PlanetsDetails.jsx";
import { PeopleDetails } from "./views/PeopleDetails.jsx";
import { FilmsDetails } from "./views/FilmsDetails.jsx";

import { MyNavbar } from "./component/MyNavbar.jsx";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<MyNavbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/films" element={<Films/>} />
						<Route path="/people" element={<People/>} />
						<Route path="/planets" element={<Planets/>} />
						<Route path="/species" element={<Species/>} />
						<Route path="/starships" element={<Starships/>} />
						<Route path="/vehicles" element={<Vehicles/>} />
						<Route path="/vehicles/:vehicleid" element={<VehiclesDetails/>} />
						<Route path="/starships/:starshipsid" element={<StarshipsDetails/>} />	
						<Route path="/species/:specieid" element={<SpeciesDetails/>} />
						<Route path="/planets/:planetid" element={<PlanetsDetails/>} />
						<Route path="/people/:personid" element={<PeopleDetails/>} />
						<Route path="/films/:filmid" element={<FilmsDetails/>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
