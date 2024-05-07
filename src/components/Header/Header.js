import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { AuthContext } from "../../userContext/UserContext";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogOut()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      {user?.uid && <p className="user-email">{user.email}</p>}
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <button className="btn-logOut" onClick={handleLogOut}>
            Log Out
          </button>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
