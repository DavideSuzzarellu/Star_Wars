import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Films = () => {
    const { store, actions } = useContext(Context);
    const { getDetailsFilms } = actions
    const { films, favorites } = store;
    const navigate = useNavigate()

    const handleDetails = (id) => {
        navigate(`/films/${id}`)
        getDetailsFilms(id)

    }

    const handleFavorites = (item) => {
        actions.addFavorites(item)
    }

    return (
        <main className="container-fluid">
            <div className="d-flex justify-content-center align-items-center text-warning mb-2">
                <h1>Films</h1>
            </div>
            <section className="row">
                {films.map((film) => (
                    <div key={film._id} className="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <div className={`card mb-3 ${favorites.includes(film.properties.title) ? 'border-success border-3' : ''}`}>
                            <span className="card-header text-warning"><b>{film.properties.title}</b></span>
                            < div >
                                <img onError={actions.handleErrorImg} src={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`} className="img-fluid" alt="" />
                            </div>
                            <div className="card-body d-flex flex-column gap-2 justify-content-between">
                                <p className="card-subtitle"><strong>Producer: </strong> <span style={{ color: "yellow" }}>{film.properties.producer}</span></p>
                                <p className="card-subtitle"><strong>Director: </strong><span style={{ color: "blue" }}>{film.properties.director}</span></p>
                                <p className="card-subtitle"><strong>Release: </strong>{film.properties.release_date}</p>
                                <div className="accordion" id={`accordionDescription-${film._id}`}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id={`heading${film._id}`}>
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${film._id}`} aria-controls={`collapse${film._id}`}>
                                                Description...
                                            </button>
                                        </h2>
                                        <div id={`collapse${film._id}`} className="accordion-collapse collapse" aria-labelledby={`heading${film._id}`} data-bs-parent={`#accordionDescription-${film._id}`}>
                                            <div className="accordion-body">
                                                <span>{film.properties.opening_crawl}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button type="button" onClick={() => handleDetails(film.uid)} className="btn btn-link">
                                    See more...
                                </button>
                                <span onClick={() => handleFavorites(film.properties.title)} className="d-flex justify-content-center align-items-center">
                                    {favorites.includes(film.properties.title)
                                        ?
                                        <i className="fa-solid fa-heart fa-lg text-success"></i>
                                        :
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                ))
                }
            </section >
        </main >
    );
};

