import React from "react";
import StarRating from "../Filter/StarRating";
import "./movieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const yr = movie.year.slice(0, 4);
  // console.log(yr);

  return (
    <Link to={`/${movie.title}`}>
      <div className="card">
        <img src={movie.image} alt={movie.title} />
        <StarRating rating={movie.rating} />
        <h3> {movie.title} </h3>
        <p> {yr} </p>
      </div>
    </Link>
  );
};

export default MovieCard;
