import React from "react";

const Filter = ({ handleTitleChange, handleRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleTitleChange}
      />
      <select onChange={handleRatingChange}>
        <option value="">Filter by rating</option>
        <option value="9">9+</option>
        <option value="8">8+</option>
        <option value="7">7+</option>
        <option value="6">6+</option>
      </select>
    </div>
  );
};

export default Filter;
