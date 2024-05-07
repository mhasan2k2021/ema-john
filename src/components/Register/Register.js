import React, { useContext, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../userContext/UserContext";

const Register = () => {
  const [error, setError] = useState(null);

  const { userRegister } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password < 6) {
      setError("Password should be 6 characters or more. ");
      return;
    }
    if (password !== confirm) {
      setError("Your password did not match.");
      return;
    }

    userRegister(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="sing-form-container">
      <h3 className="logIn-form-title">Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="error-area">
          <p className="text-error">{error}</p>
        </div>
        <button className="logIn-button">Log In</button>
      </form>

      <p className="sign-up-link-p">
        Already have an account?{" "}
        <Link to="/login" className="sign-up-link">
          Login
        </Link>
      </p>
      <div className="or-container">
        <div className="under-line-divider"></div>
        or
        <div className="under-line-divider"></div>
      </div>
      <button className="google-btn">Continue With Google</button>
    </div>
  );
};

export default Register;
