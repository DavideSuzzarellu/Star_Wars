import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Spinner } from "../component/Spinner.jsx";


export const FilmsDetails = () => {
    const { store, actions } = useContext(Context);
    const { filmsDetails, favorites } = store;
    const params = useParams();
    const id = params.filmid;
    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [starships, setStarships] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [species, setSpecies] = useState([]);
    const navigate = useNavigate()

    const handleDetailsPlanet = (id) => {
        navigate(`/planets/${id}`)
        actions.getDetailsPlanets(id)
    }

    const handleDetailsPerson = (id) => {
        navigate(`/people/${id}`)
        actions.getDetailsPeople(id)
    }

    const handleDetailsStarships = (id) => {
        navigate(`/starships/${id}`)
        actions.getDetailsStarships(id)
    }

    const handleDetailsVehicles = (id) => {
        navigate(`/vehicles/${id}`)
        actions.getDetailsVehicles(id)
    }

    const handleDetailsSpecies = (id) => {
        navigate(`/species/${id}`)
        actions.getDetailsSpecies(id)
    }

    const fetchData = async (url, setData) => {
        const response = await fetch(url);
        if (!response.ok) return response.status;
        const data = await response.json();
        setData(prevData => [...prevData, data]);
    };

    const fetchDetails = async (details, setDetails) => {
        if (details) {
            await Promise.allSettled(details.map(url => fetchData(url, setDetails)));
        }
    };

    useEffect(() => {
        fetchDetails(filmsDetails.characters, setCharacters);
        fetchDetails(filmsDetails.planets, setPlanets);
        fetchDetails(filmsDetails.starships, setStarships);
        fetchDetails(filmsDetails.vehicles, setVehicles);
        fetchDetails(filmsDetails.species, setSpecies);
    }, [filmsDetails]);



    return (
        <main className="container">
            <header className="row d-flex justify-content-center align-items-center mb-4">
                <div className="col-lg-4 col-md-6 col-sm-10 mb-3 mb-sm-3">
                    <img onError={actions.handleErrorImg} src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} alt="" className="img-fluid" />
                </div>
                <section className="col-lg-8 col-md-6 col-sm-10 bg-light text-dark p-3">
                    <h3>{filmsDetails.title}</h3>
                    <p>Producer: {filmsDetails.producer}</p>
                    <p>Director: {filmsDetails.director}</p>
                    <p>Release date: {filmsDetails.release_date}</p>
                    <div className="mb-3">
                        <h5>Opening Crawl:</h5>
                        <p>{filmsDetails.opening_crawl}</p>
                    </div>
                </section>
            </header>
            <hr className="text-success" />
            <section className="row my-4">
                <div className="col">
                    <h1 className="text-center text-success mb-3">Characters:</h1>
                    {!characters.length ? (
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <Spinner />
                        </div>
                    ) : (
                        <div className=" d-flex flex-row overflow-x-auto">
                            {characters.map((character) => (
                                <div key={character.result.uid} className={`card m-2 ${favorites.includes(character.result.properties.name) ? 'border-success border-3' : ''}`} style={{ minWidth: "12rem", maxWidth: "12rem" }}>
                                    <img onError={actions.handleErrorImg} className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${character.result.uid}.jpg`} alt="" />
                                    <div className="card-body">
                                        <button className="btn btn-link" onClick={() => handleDetailsPerson(character.result.uid)}>
                                            <h5 className="card-title">{character.result.properties.name}</h5>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <hr className="text-success" />
            <section className="row my-4">
                <div className="col">
                    <h1 className="text-center text-success  mb-3">Planets</h1>
                    {!characters.length ? (
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <Spinner />
                        </div>
                    ) : (
                        <div className=" d-flex flex-row overflow-x-auto ">
                            {planets.map((planet) => (
                                <div key={planet.result.uid} className={`card m-2 ${favorites.includes(planet.result.properties.name) ? 'border-success border-3' : ''}`} style={{ minWidth: "12rem", maxWidth: "12rem" }}>
                                    <img onError={actions.handleErrorImg} className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${planet.result.uid}.jpg`} alt="" />
                                    <div className="card-body">
                                        <button className="btn btn-link" onClick={() => handleDetailsPlanet(planet.result.uid)}>
                                            <h5 className="card-title">{planet.result.properties.name}</h5>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <hr className="text-success" />
            <section className="row my-4">
                <div className="col">
                    <h1 className="text-center text-success mb-3">Starships:</h1>
                    {!characters.length ? (
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <Spinner />
                        </div>
                    ) : (
                        <div className=" d-flex flex-row overflow-x-auto">
                            {starships.map((starship) => (
                                <div key={starship.result.uid} className={`card m-2 ${favorites.includes(starship.result.properties.name) ? 'border-success border-3' : ''}`} style={{ minWidth: "12rem", maxWidth: "12rem" }}>
                                    <img onError={actions.handleErrorImg} className="card-img-top" src={`https://starwars-visualguide.com/assets/img/starships/${starship.result.uid}.jpg`} alt="" />
                                    <div className="card-body">
                                        <button className="btn btn-link" onClick={() => handleDetailsStarships(starship.result.uid)}>
                                            <h5 className="card-title">{starship.result.properties.name}</h5>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <hr className="text-success" />
            <section className="row my-4">
                <div className="col">
                    <h1 className="text-center text-success mb-3">Vehicles:</h1>
                    {!characters.length ? (
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <Spinner />
                        </div>
                    ) : (
                        <div className=" d-flex flex-row overflow-x-auto">
                            {vehicles.map((vehicle) => (
                                <div key={vehicle.result.uid} className={`card m-2 ${favorites.includes(vehicle.result.properties.name) ? 'border-success border-3' : ''}`} style={{ minWidth: "12rem", maxWidth: "12rem" }}>
                                    <img onError={actions.handleErrorImg} className="card-img-top" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.result.uid}.jpg`} alt="" />
                                    <div className="card-body">
                                        <button className="btn btn-link" onClick={() => handleDetailsVehicles(vehicle.result.uid)}>
                                            <h5 className="card-title">{vehicle.result.properties.name}</h5>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <hr className="text-success" />
            <section className="row my-4">
                <div className="col">
                    <h1 className="text-center text-success mb-3">Species:</h1>
                    {!characters.length ? (
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <Spinner />
                        </div>
                    ) : (
                        <div className=" d-flex flex-row overflow-x-auto">
                            {species.map((specie) => (
                                <div key={specie.result.uid} className={`card m-2 ${favorites.includes(specie.result.properties.name) ? 'border-success border-3' : ''}`} style={{ minWidth: "12rem", maxWidth: "12rem" }}>
                                    <img onError={actions.handleErrorImg} className="card-img-top" src={`https://starwars-visualguide.com/assets/img/species/${specie.result.uid}.jpg`} alt="" />
                                    <div className="card-body">
                                        <button className="btn btn-link" onClick={() => handleDetailsSpecies(specie.result.uid)} >
                                            <h5 className="card-title">{specie.result.properties.name}</h5>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};
