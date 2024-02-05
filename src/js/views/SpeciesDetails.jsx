import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const SpeciesDetails = () => {
    const { store, actions } = useContext(Context)
    const { speciesDetails } = store
    const params = useParams();
    const id = params.specieid;
    const [world, setWorld] = useState(null)
    const [people, setPeople] = useState([])


    const fetchDataPeople = async (url) => {
        const response = await fetch(url);
        if (!response.ok) return response.status
        const data = await response.json();
        return data.result.properties.name || '';
    };

    const fetchDetailsPeople = async (details, setDetails) => {
        if (details) {
            const names = await Promise.allSettled(details.map(url => fetchDataPeople(url)));
            const validNames = names
                .filter(result => result.status === "fulfilled")
                .map(result => result.value);
            setDetails(validNames);
        }
    };

    const fetchDataDetailsPeople = async () => {
        if (speciesDetails && speciesDetails.people) {
            await fetchDetailsPeople(speciesDetails.people, setPeople);
        }
    }

    const fetchDataWorld = async (url, setData) => {
        const response = await fetch(url);
        if (!response.ok) return response.status;
        const data = await response.json();
        setData(data.result.properties.name);
    };

    const fetchDetailsWorld = async (details, setDetails) => {
        if (details) {
            await Promise.allSettled([fetchDataWorld(details, setDetails)]);
        }
    };

    const fetchDataDetailsWorld = async () => {
        if (speciesDetails && speciesDetails.homeworld) {
            await fetchDetailsWorld(speciesDetails.homeworld, setWorld);
        }
    }

    useEffect(() => {
        fetchDataDetailsWorld();
        fetchDataDetailsPeople()
    },
        [speciesDetails]);


    return (
        <main className="container mt-3">
            <div className="row d-flex flex-row align-items-center justify-content-center">
                <section className="col-md-6 col-sm-10 d-flex justify-content-center">
                    <img onError={actions.handleErrorImg} className="img-fluid rounded" src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} />
                </section>
                <aside className="col-lg-4 col-md-5 col-sm-8 mt-3 mt-md-0">
                    <div className="card text-white bg-primary mb-3">
                        <h2 className="card-header text-info">{speciesDetails.name}</h2>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item"><b className="text-warning">Classification:</b> {speciesDetails.classification}</li>
                                <li className="list-group-item"><b className="text-warning">Designation class: </b>{speciesDetails.designation}</li>
                                <li className="list-group-item"><b className="text-warning">Average height:</b> {speciesDetails.average_height}</li>
                                <li className="list-group-item"><b className="text-warning">Average lifespan: </b>{speciesDetails.average_lifespan}</li>
                                <li className="list-group-item"><b className="text-warning">Hair colors: </b>{speciesDetails.hair_colors}</li>
                                <li className="list-group-item"><b className="text-warning">Skin colors: </b>{speciesDetails.skin_colors}</li>
                                <li className="list-group-item"><b className="text-warning">Eye colors: </b>{speciesDetails.eye_colors}</li>
                                <li className="list-group-item"><b className="text-warning">Language:</b> {speciesDetails.language}</li>
                                <li className="list-group-item">
                                    <b className="text-warning">Homeworld:</b> {world}
                                </li>
                                <li className="list-group-item">
                                    <b className="text-warning">People:</b> {people.join(', ')}
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )

}
