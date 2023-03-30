import React from "react";
import StarRating from "./StarRating";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span
          // style={{ width: "25px", height: "25px" }}
          className="rating"
          id="rating"
        >
          <StarRating movie={movie.rating} />
        </span>
      </div>
      <div className="movie-overview">
        <h4>Overview:</h4>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
