import React, { useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useLogo from "../../Logo/useLogo";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Login = () => {
  const [agree, setAgree] = useState(false);
  const logo = useLogo();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  if(loading){
    <p>Loading...</p>
  }
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleSubmit = e =>{
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
  }
  if(user){
       navigate(from, {replace: true});
  }
  return (
    <div>
      <div className="logo-container my-5">
      <Link to="/">{logo}</Link>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            required
          />
        </div>
        <p className="text-danger">{error?.message}</p>
        <div className="mb-3 form-check">
          <input onClick={() => setAgree(!agree)} type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className={agree ? 'text-success' : 'text-danger'}  htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <p>New in Unity Network? <Link to="/signup"><span className="fw-bold">Signup</span></Link></p>
        <input
          disabled={!agree}
          type="submit"
          value="Login"
          className="btn btn-primary form-control signup"
        />
      </form>
      <div className="or d-flex align-items-center justify-content-center">
        <div className="parent my-4 d-flex align-items-center justify-content-around">
          <div className="line"></div>
          <div className="pa">
            <p className="m-0">or</p>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div onClick={() => signInWithGoogle()} className="social">
        <div className="wrap d-flex justify-content-evenly align-items-center">
          <div className="google">
            <img src="google.png" alt="" />
          </div>
          <p className="m-0">Continue with google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
