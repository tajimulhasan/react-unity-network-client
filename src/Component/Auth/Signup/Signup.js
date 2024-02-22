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
  }
    return (
        <div>
        <div className="logo-container my-5">
        <Link to="/">{logo}</Link>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
            Name
            </label>
            <input
              required
              onBlur={handleName}
              type="text"
              class="form-control"
              name="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              onBlur={handleEmail}
              type="email"
              class="form-control"
              name="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
            onBlur={handlePassword}
              type="password"
              class="form-control"
              required
            />
          </div>
          <div class="mb-1">
            <label for="exampleInputPassword1" class="form-label">
             Confirm Password
            </label>
            <input
              onBlur={handleConfirmPassword}
              type="password"
              class="form-control"
              required
            />
          </div>
          <p className='text-danger mb-3'>{error1}</p>
          <p className='text-danger mb-3'>{error?.message}</p>
          <div class="mb-3 form-check">
            <input onClick={() => setAgree(!agree)} type="checkbox" class="form-check-input" />
            <label className={agree ? 'text-success' : 'text-danger'} class="form-check-label" for="exampleCheck1">
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