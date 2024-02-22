import React from "react";

import "./Header.css";
import CustomLink from "../Home/CustomLink";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogout = () =>{
    signOut(auth)
  }
  return (
    <nav className="navbar-cont">
      <div className="logo">
        <Link to='/'><img src="NETWORK.png" alt="" /></Link>
      </div>
      <div className="elements text-decoration none">
        <ul>
          <CustomLink className="link" to="/">
            <li>Home</li>
          </CustomLink>
          <CustomLink className="link" to="/donation">
            <li>Donation</li>
          </CustomLink>
          <CustomLink className="link" to="/events">
            <li>Events</li>
          </CustomLink>
          <CustomLink className="link" to="/blogs">
            <li>Blogs</li>
          </CustomLink>
          {/* <CustomLink className="link" to="/login">
            <button className="btn login">Login</button>
          </CustomLink> */}
          {
            user ? 
    
            <button onClick={handleLogout} className="btn login px-2">Log out</button>
            :

            <CustomLink className="link" to="/signup">
            <button className="btn btn-primary px-4" style={{backgroundColor: '#FF5B00', border: 'none'}}>Register</button>
          </CustomLink>
          }
         
          <CustomLink className="link" to="/admin/regilist">
            <button className="btn btn-dark px-4" style={{ color: 'white', border: 'none'}}>Admin</button>
          </CustomLink>
        
        </ul>
      </div>
    </nav>
  );
};

export default Header;
