import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const PlanetsDetails = () => {
    const { store, actions } = useContext(Context)
    const { planetsDetails } = store
    const params = useParams();
    const id = params.planetid;

    return (
        <main className="container mt-3">
            <div className="row d-flex flex-row align-items-center justify-content-center">
                <section className="col-md-6 col-sm-10 d-flex justify-content-center">
                    <img onError={actions.handleErrorImg} className="img-fluid rounded" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                </section>
                <aside className="col-lg-4 col-md-5 col-sm-8 mt-3 mt-md-0">
                    <div className="card text-white bg-primary mb-3">
                        <h2 className="card-header text-info">{planetsDetails.name}</h2>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item"><b className="text-warning">Diameter:</b> {planetsDetails.diameter}</li>
                                <li className="list-group-item"><b className="text-warning">Rotation period: </b>{planetsDetails.rotation_period}</li>
                                <li className="list-group-item"><b className="text-warning">Orbital period:</b> {planetsDetails.orbital_period}</li>
                                <li className="list-group-item"><b className="text-warning">Gravity: </b>{planetsDetails.gravity}</li>
                                <li className="list-group-item"><b className="text-warning">Population: </b>{planetsDetails.population}</li>
                                <li className="list-group-item"><b className="text-warning">Climate: </b>{planetsDetails.climate}</li>
                                <li className="list-group-item"><b className="text-warning">Terrain: </b>{planetsDetails.terrain}</li>
                                <li className="list-group-item"><b className="text-warning">Surface water:</b> {planetsDetails.surface_water}</li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}