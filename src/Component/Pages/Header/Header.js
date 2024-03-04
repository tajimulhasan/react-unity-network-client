import React, { useState } from "react";

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
    <nav>
      <input type="checkbox" id="check" />
      {/* <input type="checkbox"  id="check" /> */}
      <div className="logo">
        <Link to='/'><img src="NETWORK.png" alt="" /></Link>
      </div>
      <div className="elements">
        <ul>
          <CustomLink className="link hov" to="/">
            <li>Home</li>
          </CustomLink>
          <CustomLink className="link hov" to="/donation">
            <li>Donation</li>
          </CustomLink>
          <CustomLink className="link hov" to="/events">
            <li>Events</li>
          </CustomLink>
          <CustomLink className="link hov" to="/blogs">
            <li>Blogs</li>
          </CustomLink>
          {/* <CustomLink className="link" to="/login">
            <button className="btn login">Login</button>
          </CustomLink> */}
          <div className="all-button-com">
          {
            user ? 
    
            <button onClick={handleLogout} className="btn login butt res-btn">Log out</button>
            :

            <Link className="link" to="/signup">
            <button className="btn btn-primary px-3 res-btn" style={{backgroundColor: '#FF5B00', border: 'none'}}>Register</button>
          </Link>
          }
         
          <Link className="link" to="/admin/regilist">
            <button className="btn btn-dark res-btn" style={{ color: 'white', border: 'none'}}>Admin</button>
          </Link>
        
          </div>
        </ul>
      </div>
      
      <label htmlFor="check" className="checkbtn">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
      </label>
    </nav>
  );
};

export default Header;
