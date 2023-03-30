import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hBcY0fE9pfXzvVaY4GKarweriG2.jpg",
      rating: 5,
    },
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
      rating: 4,
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 3,
    },
    {
      title: "The Godfather: Part II",
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      posterURL:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      rating: 2,
    },
  ]);

  const AddM = (x) => {
    setMovies([...movies, x]);
  };

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  // const addMovie = () => {
  //   const newMovie = {
  //     title: "Interstellar",
  //     description:
  //       "A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.",
  //     posterURL:
  //       "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  //     rating: 8.6,
  //   };
  //   setMovies([...movies, newMovie]);
  // };
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (ratingFilter ? movie.rating >= ratingFilter : true)
  );

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter
        handleTitleChange={handleTitleChange}
        handleRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} />
      <AddMovie addMovie={AddM} />
      {/* <button onClick={addMovie}>Add Movie</button> */}
    </div>
  );
};

export default App;
