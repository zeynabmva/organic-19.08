import React from "react";
import { NavLink, Link } from "react-router-dom";
import FavoriteModal from "./FavoriteModal";
import { connect } from "react-redux";
const UserModal = ({ user, handleUserExit, dispatch }) => {
  const handleLogout = () => {
    dispatch({
      type: "SET_USER",
      payload: {},
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return (
    <div className="user-modal">
      <div className="i" onClick={handleUserExit}>
        <i className="fa-solid fa-xmark"></i>
      </div>

      <div className="first-info-user">
        <div className="user-img">
          <img src="/static/client-image-1.jpg"></img>
        </div>
        <div>
          <p>{user.email}</p>
        </div>
        <hr />
      </div>

      <div>
        <ul>
          <li onClick={handleUserExit}>
            <Link to="/info">Your information</Link>
          </li>
          <li onClick={handleUserExit}>
            <Link to={FavoriteModal}>Your favorites</Link>
          </li>
          <li onClick={handleUserExit}>
            <Link to="/blog">Your blogs</Link>
          </li>
          <li onClick={handleUserExit}>
            <Link to="/recipe">Your recipes</Link>
          </li>
          <li onClick={handleUserExit}>
            <Link to="/about">About us</Link>
          </li>
          <li onClick={handleUserExit}>
            <Link to="/contact-us">Contact</Link>
          </li>
        </ul>
      </div>
      <hr />

      <div className="logout-user" onClick={handleLogout}>
        <button className="blue_btn">
          <p>Log Out</p>
        </button>
      </div>
    </div>
  );
};
const t = (a) => a;
export default connect(t)(UserModal);
