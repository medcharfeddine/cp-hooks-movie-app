import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className="rating">{movie.rating}/10</span>
      </div>
      <div className="movie-overview">
        <h4>Overview:</h4>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
