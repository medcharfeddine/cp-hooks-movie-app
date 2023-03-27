import React, { useState } from "react";
import Logo from "../images/logo.png";
import "./nav.css";
import MovieCard from "./MovieCard";

const Nav = () => {
  const [movie, setMovie] = useState(MovieCard);
  return (
    <div>
      <nav className="nav">
        <img className="logo" src={Logo} alt="Logo" />
        <ul className="ul">
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Tv Shows</a>
          </li>
          <li>
            <a href="#">Add</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
