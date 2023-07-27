import React, { useEffect, useState } from "react";
import "./moviedesc.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
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

const MovieDesc = ({ movies }) => {
  let params = useParams();
  let mov = movies.find((movie) => movie.id == params.id);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [date, setDate] = useState("");
  const [vote, setVote] = useState();
  const [runTime, setRunTime] = useState("");
  const [videos, setVideos] = useState("");

  const apiKey = "a7286d592a026a75e47beca432e3552e";
  const getMovieInfo = () => {
    const id = mov.id;
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(function (res) {
        console.log(res.data.runtime);
        setRunTime(res.data.runtime);
      });
  };

  axios
    .get(
      `https://api.themoviedb.org/3/movie/${mov.id}/videos?api_key=${apiKey}`
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

  console.log(mov.title);
  useEffect(() => {
    setTitle(mov.title);
    setVote(mov.vote_average);
    setOverview(mov.overview);
    setDate(mov.release_date);
    getMovieInfo();
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Link to="/">
        <button className="back">&#8249; Dashboard</button>
      </Link>
      <Link to="/Movies">
        <button className="back1">&#8249; Movies</button>
      </Link>
      <div className="container-center-horizontal">
        <div className="index screen">
          <div className="overlap-group">
            <div className="overlap-group1">
              <img
                className="x7-ry-hs-o4y-d-xt-bv1z-uu3m-tp-he-q0d5-1"
                src={`http://image.tmdb.org/t/p/w1280/` + mov.backdrop_path}
                alt="7RyHsO4yDXtBv1zUU3mTpHeQ0d5 1"
              />
              <div className="frame-65">
                <h1 className="title valign-text-middle"> {title} </h1>
              </div>
            </div>
            <div className="flex-row">
              <img
                className="or06-fn3-dka5tuk-k1e9sl16p-b3iy-1"
                src={`http://image.tmdb.org/t/p/w500/` + mov.poster_path}
                alt="or06FN3Dka5tukK1e9sl16pB3iy 1"
              />
              <div className="frame-68">
                <p className="part-of-the-journey-is-the-end">{title}</p>
                <p className="after-the-devastatin bodylarge">{overview}</p>
                <div className="rating-button">
                  <img
                    className="icon-star"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64590d21061baf290e112790/releases/645911fd061baf290e1127b9/img/vuesax-linear-star.svg"
                    alt="icon-star"
                  />
                  <div className="x8 bodyregular"> {vote} </div>
                </div>

                <div className="frame-6">
                  <div className="release-date bodyregular">Release Date:</div>
                  <div className="date bodylarge"> {date} </div>
                </div>
                <div className="frame-6">
                  <div className="run-time bodyregular">Run time</div>
                  <div className="address bodylarge">{runTime} min</div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div>
              <button onClick={openModal}>Watch Trailer</button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <iframe
                  width="1200"
                  height="600"
                  src={`https://www.youtube.com/embed/${videos}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <br />
                <button onClick={closeModal}>close</button>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;
