import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import Trailer from "../../video/avatarTrailer.mp4";

const Dashboard = ({ ln }) => {
  return (
    <div className="dashboard">
      <video autoPlay loop muted>
        <source src={Trailer} type="video/mp4" />
      </video>
      <div className="Vue">
        <h1 className="welcome">Welcome</h1>
        <br />
        <div className="container">
          <div className="cart">
            <h2>{ln}</h2>
            <h4>Movies</h4>
          </div>
          <div className="cart">
            <h2>0</h2>
            <h4>TV Shows</h4>
          </div>
        </div>
        <h2 className="quickLinks">Quick Links</h2>
        <div className="container">
          <div className="cart1">
            <Link to="/Movies">Movies</Link>
          </div>
          <div className="cart1">
            <Link to="/Add">Add</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
