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
        <option id="5" value="5">
          5+
        </option>
        <option id="4" value="4">
          4+
        </option>
        <option id="3" value="3">
          3+
        </option>
        <option id="2" value="2">
          2+
        </option>
      </select>
    </div>
  );
};

export default Filter;
