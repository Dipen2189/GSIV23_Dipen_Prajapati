import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.scss";


interface props {
    id?: number,
    title?: string,
    description?: string,
    imageUrl?: string,
    rating?: string | number,
    searchText?: string,
  };

const MovieCard = ({ id, title, description, imageUrl, rating, searchText }: props) => {

  const Navigate = useNavigate();
  const onButtonClick = () => {
    Navigate(`/${id}`, { state: { text: searchText } });
  }

  return (
    <div className="card movie-card">
      <img src={imageUrl} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Rating: {rating}/10</p>
        <button className="btn btn-primary" onClick={onButtonClick}>
          Click Here for Detail
        </button>
      </div>
    </div>
  );
}

export default MovieCard;