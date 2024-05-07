import React, { useContext, useState } from "react";
import "./LogIn.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../userContext/UserContext";

const LogIn = () => {
  const [error, setError] = useState();
  const { userLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  console.log(from, location);

  const handleUserLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Password or email incorrect");
        console.error(error);
      });
  };

  return (
    <div className="logIn-form-container">
      <h3 className="logIn-form-title">Log In</h3>
      <form onSubmit={handleUserLogIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="error-area">
          <p className="text-error">{error}</p>
        </div>
        <button className="logIn-button">Log In</button>
      </form>
      <p className="sign-up-link-p">
        New to Ema-john?{" "}
        <Link to="/signup" className="sign-up-link">
          Create New Account
        </Link>
      </p>
      <div className="or-container">
        <div className="under-line-divider"></div>
        <p className="or-p">or</p>
        <div className="under-line-divider"></div>
      </div>
      <button className="google-btn">Continue With Google</button>
    </div>
  );
};

export default LogIn;
