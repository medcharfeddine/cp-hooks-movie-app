import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "../Filter/StarRating";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AddMovie = ({ add }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState(1);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    closeModal();
  };
  const handleRating = (x) => {
    setRating(x);
  };
  return (
    <div>
      <button onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Image</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Year</label>
          <input
            type="month"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <label>Rating</label>
          <StarRating handleRating={handleRating} rating={rating} />
          <div>
            <button type="submit">Confirm</button>
            <button>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;
