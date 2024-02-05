import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


export const VehiclesDetails = () => {
    const { store, actions } = useContext(Context)
    const { vehiclesDetails } = store
    const params = useParams();
    const id = params.vehicleid;

    return (
        <main className="container mt-3">
            <div className="row d-flex flex-row align-items-center justify-content-center">
                <section className="col-md-6 col-sm-10 d-flex justify-content-center">
                    <img onError={actions.handleErrorImg} className="img-fluid rounded" src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt={vehiclesDetails.name} />
                </section>
                <aside className="col-lg-4 col-md-5 col-sm-8 mt-3 mt-md-0">
                    <div className="card text-white bg-primary mb-3">
                        <h2 className="card-header">{vehiclesDetails.name}</h2>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item"><b className="text-warning">Model:</b> {vehiclesDetails.model}</li>
                                <li className="list-group-item"><b className="text-warning">Vehicle class: </b>{vehiclesDetails.vehicle_class}</li>
                                <li className="list-group-item"><b className="text-warning">Manufacturer:</b> {vehiclesDetails.manufacturer}</li>
                                <li className="list-group-item"><b className="text-warning">Cost: </b>{vehiclesDetails.cost_in_credits}</li>
                                <li className="list-group-item"><b className="text-warning">Length: </b>{vehiclesDetails.length}</li>
                                <li className="list-group-item"><b className="text-warning">Crew: </b>{vehiclesDetails.crew}</li>
                                <li className="list-group-item"><b className="text-warning">Passengers: </b>{vehiclesDetails.passengers}</li>
                                <li className="list-group-item"><b className="text-warning">Max Atmosphering Speed:</b> {vehiclesDetails.max_atmosphering_speed}</li>
                                <li className="list-group-item"><b className="text-warning">Cargo capacity: </b>{vehiclesDetails.cargo_capacity}</li>
                                <li className="list-group-item"><b className="text-warning">Consumables: </b>{vehiclesDetails.consumables}</li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}