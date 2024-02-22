import { Context } from "../store/appContext";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from "react-bootstrap";


export const MyNavbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const { favorites } = store

	const handleFilmsClick = () => {
		actions.getFilms();
		navigate("/films");
	};

	const handlePeopleClick = () => {
		actions.getPeople();
		navigate("/people");
	};

	const handlePlanetsClick = () => {
		actions.getPlanets();
		navigate("/planets");
	};

	const handleSpeciesClick = () => {
		actions.getSpecies();
		navigate("/species");
	};

	const handleStarshipsClick = () => {
		actions.getStarships();
		navigate("/starships");
	};

	const handleVehiclesClick = () => {
		actions.getVehicles();
		navigate("/vehicles");
	};

	return (

		<Navbar expand="lg" className="bg-body-darkly mb-4" style={{ borderBottom: "2px solid orange" }}>
			<Container>
				<div>
					<Link to="/">
						<Nav.Link as="button">
							<h3>Star Wars</h3>
						</Nav.Link>
					</Link>
				</div>
				<div className="d-flex justify-content-center flex-column">
					<Navbar.Toggle className="bg-warning border-0" aria-controls="basic-navbar-nav" />
					<Navbar.Collapse className="" id="basic-navbar-nav">
						<Nav className="ml-auto justify-content-center">
							<Nav.Link className="text-success" as="button" onClick={handleFilmsClick}>
								Films
							</Nav.Link>
							<Nav.Link className="text-success" as="button" onClick={handlePeopleClick}>
								Characters
							</Nav.Link>
							<Nav.Link className="text-success" as="button" onClick={handlePlanetsClick}>
								Planets
							</Nav.Link>
							<Nav.Link className="text-success" as="button" onClick={handleSpeciesClick}>
								Species
							</Nav.Link>
							<Nav.Link className="text-success" as="button" onClick={handleStarshipsClick}>
								Starships
							</Nav.Link>
							<Nav.Link className="text-success" as="button" onClick={handleVehiclesClick}>
								Vehicles
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
				<div>
					<Dropdown>
						<Dropdown.Toggle className="d-blockjustify-content-center" variant="primary" id="dropdown-basic">
							Favorites
							<span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${!favorites || favorites.length == 0 ? "bg-warning" : "bg-success"} text-dark`}>
								{!favorites ? favorites.length = 0 : favorites.length}
							</span>
						</Dropdown.Toggle>
						<Dropdown.Menu className="down-centered dropdown-menu-end">
							{!favorites || favorites.length === 0 ? (
								<Dropdown.Item>No favorites items</Dropdown.Item>
							) : (
								favorites.map((favorite, id) => (
									<Dropdown.Item key={id} className="d-flex justify-content-between align-items-center">
										<span>{favorite}</span>
										<button onClick={() => actions.removeFavorites(favorite, store.favorites)} className="btn btn-outline-danger ms-2" >
											<i className="fa-solid fa-trash"></i>
										</button>
									</Dropdown.Item>
								))
							)}
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</Container >
		</Navbar >
	);
};


