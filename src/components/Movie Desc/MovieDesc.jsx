import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./moviedesc.css";
import StarRating from "../Filter/StarRating.jsx";
import Modal from "react-modal";
import axios from "axios";

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
  const [videos, setVideos] = useState([]);
  let params = useParams();
  // console.log(typeof movieId);
  let mov = movies.find((movie) => movie.id == params.id);
  // console.log(mov.title);

  const yr = mov.release_date.slice(0, 4);

  axios
    .get(
      `https://api.themoviedb.org/3/movie/${mov.id}/videos?api_key=a7286d592a026a75e47beca432e3552e`
    )
    .then(function (res) {
      let vidId = res.data.results.slice(-1);
      // handle success
      // console.log(res.data.results);
      setVideos(vidId[0].key);
    })
    .catch(function (err) {
      // handle error
      console.log(err);
    });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // let video = `https://api.themoviedb.org/3/movie/${mov.id}/videos?api_key=a7286d592a026a75e47beca432e3552e`;
  // console.log(video);
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
          <img
            src={`http://image.tmdb.org/t/p/w300/` + mov.poster_path}
            alt={mov.title}
          />
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
            {yr}
          </h5>
          <div className="rating">
            <h3>Movie Rating :</h3>
            <p> {mov.vote_average} </p>
          </div>
          <button onClick={openModal}>Watch Trailer</button>
          <Modal
            // className="modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <h2> {mov.title} Trailer </h2>
            {/* <video src={`https://www.youtube.com/watch?v=${videos}`} /> */}
            <iframe
              width="1200"
              height="580"
              src={`https://www.youtube.com/embed/${videos}`}
              title="Movie Trailer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <br />
            <button onClick={closeModal}>Go Back</button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;
