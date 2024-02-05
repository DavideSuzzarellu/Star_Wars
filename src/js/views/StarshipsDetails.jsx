import React from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const StarshipsDetails = () => {
    const { store, actions } = useContext(Context)
    const { starshipsDetails } = store
    const params = useParams();
    const id = params.starshipsid;

    return (
        <main className="container mt-3">
            <div className="row d-flex flex-row align-items-center justify-content-center">
                <section className="col-md-6 col-sm-10 d-flex justify-content-center">
                    <img onError={actions.handleErrorImg} className="img-fluid rounded" src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} />
                </section>
                <aside className="col-lg-4 col-md-5 col-sm-8 mt-3 mt-md-0">
                    <div className="card text-white bg-primary mb-3">
                        <h2 className="card-header text-info">{starshipsDetails.name}</h2>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item"><b className="text-warning">Model:</b> {starshipsDetails.model}</li>
                                <li className="list-group-item"><b className="text-warning">Starship class: </b>{starshipsDetails.starship_class}</li>
                                <li className="list-group-item"><b className="text-warning">Manufacturer:</b> {starshipsDetails.manufacturer}</li>
                                <li className="list-group-item"><b className="text-warning">Cost: </b>{starshipsDetails.cost_in_credits}</li>
                                <li className="list-group-item"><b className="text-warning">Length: </b>{starshipsDetails.length}</li>
                                <li className="list-group-item"><b className="text-warning">Crew: </b>{starshipsDetails.crew}</li>
                                <li className="list-group-item"><b className="text-warning">Passengers: </b>{starshipsDetails.passengers}</li>
                                <li className="list-group-item"><b className="text-warning">Max Atmosphering Speed:</b> {starshipsDetails.max_atmosphering_speed}</li>
                                <li className="list-group-item"><b className="text-warning">Cargo capacity: </b>{starshipsDetails.cargo_capacity}</li>
                                <li className="list-group-item"><b className="text-warning">Consumables: </b>{starshipsDetails.consumables}</li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}