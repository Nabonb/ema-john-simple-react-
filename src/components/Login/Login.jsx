import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { user, logIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from.pathname || "/";
  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const theUser = result.user;
        console.log(theUser);
        navigate(from);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSignUp} className="form-control">
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="" required />
        <label htmlFor="">Password</label>
        <input type={show?'text':'password'} name="password" id="" required />
        <p onClick={() => setShow(!show)}>
            <small>
                {
                    show ? 'Hide Password' : 'Show Password'
                }
            </small>
          </p>
        <button className="login-btn">Login</button>
        <p className="toogle-singup">
          New to Ema-john?<Link to="/signup"> Create new account</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
