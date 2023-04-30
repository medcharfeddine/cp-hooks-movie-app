import React, { useEffect, useState } from "react";
import StarRating from "../Filter/StarRating";
import "./add.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = ({ add }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState("");
  const [trailer, setTrailer] = useState("");
  const [movieId, setMovieId] = useState("");

  const navigate = useNavigate();

  const apiKey = "a7286d592a026a75e47beca432e3552e";
  console.log(apiKey);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie();
    // navigate("/Movies");
  };
  const addMovie = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then(function (res) {
        console.log(res);
        setTitle(res.data.title);
        setDescription(res.data.overview);
        setImage(`http://images.tmdb.org/t/p/w500${res.data.poster_path}`);
        setYear(res.data.release_date);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleRating = (x) => {
    setRating(x);
  };

  // const check = title && image && year && rating && description && trailer;

  return (
    <div className="Add">
      <h1>Add A Movie</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>TMDB ID</label>
        <input
          type="number"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
          // required
        />
        <label>Movie Title</label>
        <input
          placeholder="Harry Potter"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // required
        />
        <label>Movie Poster URL</label>
        <input
          placeholder="Movie image url"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          // required
        />
        <label>Movie Year</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          // required
        />
        <label>Movie Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          // required
        />
        <label>Movie Trailer Link</label>
        <input
          type="url"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
          // required
        />
        <label>Movie Rating</label>
        <StarRating handleRating={handleRating} rating={rating} />
        <div className="btns">
          <button className="btn cfm" type="submit">
            Confirm
          </button>

          <button className="btn cnl">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
