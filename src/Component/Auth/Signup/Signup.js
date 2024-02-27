import React, { useState } from 'react';
import useLogo from '../../Logo/useLogo';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPasswrd, setConfirmPassword] = useState('');
    const [error1, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        error
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile] = useUpdateProfile(auth);
      const navigate = useNavigate();
    const logo = useLogo();
    const handleName = event =>{
      setName(event.target.value)
    }
    const handleEmail = event =>{
      setEmail(event.target.value)
    }
    const handlePassword = event =>{
      setPassword(event.target.value)
    }
    const handleConfirmPassword = event =>{
      setConfirmPassword(event.target.value)
    }
    if(user){
      console.log(user);
     navigate('/')
    }
  const handleSubmit = async(event) =>{
    event.preventDefault();
    const data = {name, email};
    if(password !== confirmPasswrd){
        setError('*Confirm password does not match')
    }
    if(password.length < 4){
        setError('*Password must be at least 4 charecters')
    }
    await createUserWithEmailAndPassword(email, password);
    const success = await updateProfile({displayName: name});
    if(success){
      console.log('success updating');
    }

    //post name and email on database
      const url = 'http://localhost:5000/signup';
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }
    return (
        <div>
        <div className="logo-container my-5">
        <Link to="/">{logo}</Link>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
            Name
            </label>
            <input
              required
              onBlur={handleName}
              type="text"
              className="form-control"
              name="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onBlur={handleEmail}
              type="email"
              className="form-control"
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
            onBlur={handlePassword}
              type="password"
              className="form-control"
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleInputPassword1" className="form-label">
             Confirm Password
            </label>
            <input
              onBlur={handleConfirmPassword}
              type="password"
              className="form-control"
              required
            />
          </div>
          <p className='text-danger mb-3'>{error1}</p>
          <p className='text-danger mb-3'>{error?.message}</p>
          <div className="mb-3 form-check">
            <input onClick={() => setAgree(!agree)} type="checkbox" className="form-check-input" />
            <label className={agree ? 'text-success' : 'text-danger'} htmlFor="exampleCheck1">
              Accept out term and privacy?
            </label>
          </div>
          <p>Already have an account? <Link to="/login"><span className="fw-bold">Login</span></Link></p>
          <input
            disabled={!agree}
            type="submit"
            value="Login"
            className="btn btn-primary form-control signup"
          />
        </form>
      </div>
    );
};

export default Signup;