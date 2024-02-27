import { Context } from "../store/appContext";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from "react-bootstrap";


export const MyNavbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const { favorites } = store
	const [collapse, setCollapse] = useState(false)


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

		<Navbar expand="md" className="bg-body-darkly mb-4" style={{ borderBottom: "2px solid orange" }}>
			<Container>
				<div className="d-flex justify-content-between align-items-center w-100">
					<div>
						<Link to="/">
							<Nav.Link as="button">
								<h3>Star Wars</h3>
							</Nav.Link>
						</Link>
					</div>
					<Navbar.Toggle onClick={() => setCollapse(!collapse)} className="bg-warning fs-4 border-0" aria-controls="basic-navbar-nav">
						{collapse
							? <i className="fa-solid fa-xmark"></i>
							: <i className="fa-solid fa-bars"></i>}
					</Navbar.Toggle>
					<Dropdown className="me-lg-4">
						<Dropdown.Toggle variant="primary" id="dropdown-basic">
							Favorites
							<span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${!favorites || favorites.length === 0 ? "bg-warning" : "bg-success"} text-dark`}>
								{favorites.length}
							</span>
						</Dropdown.Toggle>
						<Dropdown.Menu className="dropdown-menu-end">
							{!favorites || favorites.length === 0 ? (
								<Dropdown.Item>No favorites items</Dropdown.Item>
							) : (
								favorites.map((favorite, id) => (
									<Dropdown.Item key={id} className="d-flex justify-content-between align-items-center">
										<span>{favorite}</span>
										<button onClick={() => actions.removeFavorites(favorite, store.favorites)} className="btn btn-outline-danger ms-2">
											<i className="fa-solid fa-trash"></i>
										</button>
									</Dropdown.Item>
								))
							)}
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
					<Nav className="justify-content-center">
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
			</Container>
		</Navbar >
	);
};


