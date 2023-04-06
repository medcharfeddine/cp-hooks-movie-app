import React, { useState } from "react";
import StarRating from "../Filter/StarRating";
import "./add.css";

const Add = ({ add }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      title,
      image,
      year,
      rating,
    };
    add(newMovie);
  };
  const handleRating = (x) => {
    setRating(x);
  };

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
        />
        <label>Movie Poster URL</label>
        <input
          placeholder="Movie image url"
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Movie Year</label>
        <input
          type="month"
          value={year}
          onChange={(e) => setYear(e.target.value)}
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
