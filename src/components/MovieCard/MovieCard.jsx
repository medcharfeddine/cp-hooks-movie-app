import React from "react";
import "./movieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  // const yr = movie.release_date.slice(0, 4);
  // console.log(yr);

  return (
    <Link to={`/${movie.id}`}>
      <div className="card">
        <img
          src={`http://image.tmdb.org/t/p/w500/` + movie.poster_path}
          alt={movie.title}
        />
        <div className="movie-info">
          <p>
            Rating: <span className="vote">{movie.vote_average}</span>
          </p>
          <h3> {movie.title} </h3>
          <p> {movie.release_date} </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
