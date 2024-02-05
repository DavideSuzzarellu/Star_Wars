import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const PeopleDetails = () => {
    const { store, actions } = useContext(Context)
    const { peopleDetails } = store
    const params = useParams();
    const id = params.personid;
    return (
        <main className="container mt-3">
            <div className="row d-flex flex-row align-items-center justify-content-center">
                <section className="col-md-6 col-sm-10 d-flex justify-content-center">
                    <img onError={actions.handleErrorImg} className="img-fluid rounded" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                </section>
                <aside className="col-lg-4 col-md-5 col-sm-8 mt-3 mt-md-0">
                    <div className="card text-white bg-primary mb-3">
                        <h2 className="card-header text-info">{peopleDetails.name}</h2>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item"><b className="text-warning">Height:</b> {peopleDetails.height}</li>
                                <li className="list-group-item"><b className="text-warning">Mass: </b>{peopleDetails.mass}</li>
                                <li className="list-group-item"><b className="text-warning">Hair color:</b> {peopleDetails.hair_color}</li>
                                <li className="list-group-item"><b className="text-warning">Skin color: </b>{peopleDetails.skin_color}</li>
                                <li className="list-group-item"><b className="text-warning">Eye color: </b>{peopleDetails.eye_color}</li>
                                <li className="list-group-item"><b className="text-warning">Birth year: </b>{peopleDetails.birth_year}</li>
                                <li className="list-group-item"><b className="text-warning">Gender: </b>{peopleDetails.gender}</li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}