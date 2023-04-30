import React from "react";
import StarRating from "../Filter/StarRating";
import "./movieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const yr = movie.release_date.slice(0, 4);
  // console.log(yr);

  return (
    <Link to={`/${movie.id}`}>
      <div className="card">
        <img
          src={`http://image.tmdb.org/t/p/w500/` + movie.poster_path}
          alt={movie.title}
        />
        <p> Rating: {movie.vote_average} </p>
        <h3> {movie.title} </h3>
        <p> {yr} </p>
      </div>
    </Link>
  );
};

export default MovieCard;
