import React from "react";
import "./movieDetail.scss";
import useMovieDetail from "./movideDetailHook";
import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router-dom"

const MovieDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const location: any = useLocation();
    const { movieDetail, isLoading } = useMovieDetail(parseInt(id ? id : ''));
    if (isLoading) {
        return <p>Loading...</p>;
    }
    
      if (!movieDetail) {
        return <p>No movie details available.</p>;
    }

    const onButtonClick = () => {
        navigate('/', {state: {text: location?.state?.text}});
    }
    return (
        <>
            <div className="detail">
                <h3>Moive Detail</h3>
                <button className="btn btn-primary" onClick={onButtonClick}>
                    Back
                </button>
            </div>
            <div className="movie-detail-container">
            <div className="movie-image">
                <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt={movieDetail.title} />
            </div>
            <div className="movie-details">
                <h2>{movieDetail.title}</h2>
                <p>Rating: {movieDetail.vote_average}/10</p>
                <p>Year: {movieDetail.release_date.substring(0, 4)}</p>
                <p>{movieDetail.overview}</p>
            </div>
    </div>
        </>
    );
}

export default MovieDetail;