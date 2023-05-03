import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import arrow from "../../image/arrow.png";

const Latest = () => {
  const productContainers = [...document.querySelectorAll(".list2")];
  const nextBtn = [...document.querySelectorAll(".next-btn")];
  const prevBtn = [...document.querySelectorAll(".prev-btn")];

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
  const [latest, setLatest] = useState([]);
  const moviedata = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=a7286d592a026a75e47beca432e3552e&language=en-US&page=1"
      )
      .then(function (response) {
        // handle success
        // console.log(response.data.results);
        setLatest(response.data.results);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      });
  };

  useEffect(() => {
    moviedata();
  }, []);

  return (
    <div className="list2">
      <button className="prev-btn">
        <img src={arrow} alt="" />
      </button>
      <button className="next-btn">
        <img src={arrow} alt="" />
      </button>
      {latest.map((el) => (
        <MovieCard key={el.id} className="moviecard" movie={el} />
      ))}
    </div>
  );
};

export default Latest;
