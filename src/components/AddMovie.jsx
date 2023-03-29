import React, { useState } from "react";
import Modal from "react-modal";

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

const AddMovie = ({ addMovie }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rating, setRating] = useState("");

  let newMovie = {
    title,
    desc,
    posterUrl,
    rating,
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Add A Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add A Movie</h2>
        <button onClick={closeModal}>close</button>
        <div>Happy Watch</div>
        <form>
          <input
            type="text"
            placeholder="Movie Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Movie Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            type="text"
            placeholder="Poster Url"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Movie Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </form>
        <button onClick={() => addMovie(newMovie)}>Add</button>
      </Modal>
    </div>
  );
};

export default AddMovie;
