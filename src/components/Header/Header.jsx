/* eslint-disable no-unused-vars */
import "./Header.css";
import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)
  const signOutUser = () => {
    logOut()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        {user && (
          <span className="user-text">
            Welcome {user.email}
            <button onClick={signOutUser}>Log Out</button>{" "}
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
