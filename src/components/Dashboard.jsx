import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="h-2">
        <h2>Welcome</h2>
      </div>
      <div className="carts">
        <div className="cart">
          <h3>93</h3>
          <p>Movies</p>
        </div>
        <div className="cart">
          <h3>26</h3>
          <p>Tv Shows</p>
        </div>
        <div className="cart">
          <h3>7</h3>
          <p>Suggestions</p>
        </div>
        <div className="cart">
          <h3>3</h3>
          <p>Manual Suggestions</p>
        </div>
      </div>
      <div className="secondCart">
        <div className="h-3">
          <h2 className="h--3">Quick Links</h2>
        </div>
        <div>
          <h3>Suggestions</h3>
        </div>
        <div>
          <h3>Addd</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
