import React from "react";
import Logo from "../../image/icon.png";
import "./nav.css";
import StarRating from "../Filter/StarRating.jsx";
import { Link, Outlet } from "react-router-dom";
// import Search from "../../image/vuesax/linear/vuesax/linear/search-normal.png";

const Nav = ({ text, handleText, rating, handleRating }) => {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" className="logo" />
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className="text">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Movies" className="text">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/Add" className="text">
              Add
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <div className="search">
        {/* <img src={Search} alt="search" /> */}
        <input
          className="inp"
          placeholder="Black Panther"
          type="text"
          value={text}
          onChange={handleText}
        />
        <StarRating rating={rating} handleRating={handleRating} />
      </div>
    </div>
  );
};

export default Nav;
