import React from "react";
import StarRating from "../Filter/StarRating";
import "./movieCard.css";

const MovieCard = ({ movie }) => {
const yr = movie.year.slice(0,4);
console.log(yr)

  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} />
      <StarRating rating={movie.rating} />
      <h3> {movie.title} </h3>
      <p> {yr} </p>
    </div>
  );
};

export default MovieCard;
