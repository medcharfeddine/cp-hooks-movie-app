import React, { useState } from "react";
import "./App.css";
import Add from "./components/Add/Add";
import Nav from "./components/Navbar/Nav";
import MovieList from "./components/MovieList/MovieList";
import { moviesData } from "./data";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDesc from "./components/Movie Desc/MovieDesc";


const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

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
          <Route
            path="Movies"
            element={
              <MovieList
                movies={movies.filter(
                  (el) =>
                    el.title.toLowerCase().includes(text.toLowerCase()) &&
                    el.rating >= rating
                )}
              />
            }
          />
          <Route path="Add" element={<Add add={handleAdd} />} />
          <Route path="/:movieId" element={<MovieDesc movies={movies} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
