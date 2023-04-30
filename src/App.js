import React, { useState, useEffect } from "react";
import "./App.css";
import Add from "./components/Add/Add";
import Nav from "./components/Navbar/Nav";
import MovieList from "./components/MovieList/MovieList";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDesc from "./components/Movie Desc/MovieDesc";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  console.log(movies);

  const moviedata = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a7286d592a026a75e47beca432e3552e&language=en-US&page=1"
      )
      .then(function (response) {
        // handle success
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    moviedata();
  }, []);

  const handleText = (e) => setText(e.target.value);
  const handleRating = (x) => setRating(x);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          text={text}
          rating={rating}
          handleText={handleText}
          handleRating={handleRating}
        />
        <Routes>
          <Route index element={<Dashboard ln={movies.length} />} />
          <Route path="Movies" element={<MovieList movies={movies} />} />
          <Route path="Add" element={<Add add={handleAdd} />} />
          <Route path="/:id" element={<MovieDesc movies={movies} />} />
          <Route path="/Movies" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
