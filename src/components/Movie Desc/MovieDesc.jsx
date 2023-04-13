import React from "react";
import { Link, useParams } from "react-router-dom";
import "./moviedesc.css";
import StarRating from "../Filter/StarRating";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#120f31",
  },
};
Modal.setAppElement("#root");

const MovieDesc = ({ movies }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let { movieId } = useParams();
  console.log(typeof movieId);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  let mov = movies.find((movie) => movie.title == movieId);
  console.log(mov);
  return (
    <div className="main">
      <Link to="/">
        <button className="back">&#8249; Dashboard</button>
      </Link>
      <Link to="/Movies">
        <button className="back1">&#8249; Movies</button>
      </Link>
      <div className="desc">
        <div className="image">
          <img src={mov.image} alt={mov.title} />
        </div>
        <div className="movie-desc">
          <h2>{mov.title}</h2>
          <p>
            <strong>Overview:</strong> <br />
            <br />
            {mov.overview}
          </p>
          <h5>
            <strong>Release Year</strong> <br /> <br />
            {mov.year}
          </h5>
          <div className="rating">
            <h3>Movie Rating :</h3>
            <StarRating rating={mov.rating} />
          </div>
          <button onClick={openModal}>Watch Trailer</button>
          <Modal
            // className="modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <h2> {mov.title} Trailer </h2>
            <iframe
              width="1200"
              height="580"
              src={mov.trailer}
              title="Movie Trailer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>{" "}
            <br />
            <button onClick={closeModal}>Go Back</button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;
