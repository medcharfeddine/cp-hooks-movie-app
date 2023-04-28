import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movielist.css";

const MovieList = ({ movies }) => {
  console.log(movies);

  return (
    <div className="movielist">
      <div className="list">
        {movies.map((el) => (
          <MovieCard key={movies.id} className="moviecard" movie={el} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
