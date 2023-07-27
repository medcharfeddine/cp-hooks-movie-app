import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movielist.css";
import arrow from "../../image/arrow.png";
import Latest from "./Latest";

const MovieList = ({ movies }) => {
  // console.log(movies);
  // const productContainers = [...document.querySelectorAll(".list")];
  // const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
  // const preBtn = [...document.querySelectorAll(".pre-btn")];

  // productContainers.forEach((item, i) => {
  //   let containerDimensions = item.getBoundingClientRect();
  //   let containerWidth = containerDimensions.width;

  //   nxtBtn[i].addEventListener("click", () => {
  //     item.scrollLeft += containerWidth;
  //   });

  //   preBtn[i].addEventListener("click", () => {
  //     item.scrollLeft -= containerWidth;
  //   });
  // });



  const productContainers = [...document.querySelectorAll(".list")];
  const nextBtn = [...document.querySelectorAll(".nxt-btn")];
  const prevBtn = [...document.querySelectorAll(".pre-btn")];

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    prevBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });

  return (
    <div className="movielist">
      <label className="l1">Popular Movies</label>
      <div className="list">
        <button className="pre-btn">
          <img src={arrow} alt="" />
        </button>
        <button className="nxt-btn">
          <img src={arrow} alt="" />
        </button>

        {movies.map((el) => (
          <MovieCard key={el.id} className="moviecard" movie={el} />
        ))}
      </div>
      <label className="l1">Now Playing Movies</label>
      <div>
        <Latest />
      </div>
    </div>
  );
};

export default MovieList;
