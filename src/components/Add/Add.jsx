import React, { useState } from "react";
import StarRating from "../Filter/StarRating";
import "./add.css";
import { useNavigate } from "react-router-dom";

const Add = ({ add }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      title,
      image,
      year,
      rating,
      overview: description,
      trailer,
    };
    add(newMovie);
    navigate("/Movies");
  };
  const handleRating = (x) => {
    setRating(x);
  };

  // const check = title && image && year && rating && description && trailer;

  return (
    <div className="Add">
      <h1>Add A Movie</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>Movie Title</label>
        <input
          placeholder="Harry Potter"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Movie Poster URL</label>
        <input
          placeholder="Movie image url"
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <label>Movie Year</label>
        <input
          type="month"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <label>Movie Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Movie Trailer Link</label>
        <input
          type="url"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
          required
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
