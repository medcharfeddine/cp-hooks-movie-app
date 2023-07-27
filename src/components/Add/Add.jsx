import React, { useEffect, useState } from "react";
import StarRating from "../Filter/StarRating.jsx";
import "./add.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = ({ add }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [trailer, setTrailer] = useState("");
  const [movieId, setMovieId] = useState("");

  const navigate = useNavigate();

  const apiKey = "a7286d592a026a75e47beca432e3552e";
  // console.log(apiKey);

  const newMovie = {
    title,
    image,
    year,
    rating,
    description,
    trailer,
  };

  // console.log(youtubeId.results.key);

  const addMovie = async () => {
    const info = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );
    try {
      setTitle(info.data.title);
      setDescription(info.data.overview);
      setImage(`http://images.tmdb.org/t/p/w500${info.data.poster_path}`);
      setYear(info.data.release_date);
      setRating(info.data.vote_average.toFixed(1));
    } catch (error) {
      console.log(error);
    }
  };

  const getYoutubeVideo = async () => {
    const video = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
    );
    try {
      console.log(video.data.results[0].key);
      setTrailer(video.data.results[0].key);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      image,
      year,
      rating,
      description,
      trailer,
    };
    add(newMovie);
    addMovie();
    getYoutubeVideo();
    // navigate("/Movies");
  };

  // const handleRating = (x) => {
  //   setRating(x);
  // };

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
          type="text"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
          // required
        />
        <label>Movie Rating</label>
        <input
          type="text"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        {/* <StarRating handleRating={handleRating} rating={rating} /> */}
        <div className="btns">
          <button className="btn cfm" type="submit" disabled>
            Confirm
          </button>

          <button className="btn cnl">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
