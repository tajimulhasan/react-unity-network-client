import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomLink from "../../Home/CustomLink";
import RegiList from "../../RegiList/RegiList";
import AddEvent from "../../AddEvent/AddEvent";
import "./Sidebar.css";
const Sidebar = () => {
  const [regiList, setRegiList] = useState(true);
  const [addEvent, setAddEvent] = useState(true);
  const location = useLocation();
  useEffect(() => {
    // Set the state based on the current location
    setRegiList(location.pathname === "/admin/regilist");
    setAddEvent(location.pathname === "/admin/addevents");
  }, [location.pathname]);
  const handleButton = (p) => {
    // if (p === "R") {
    //   setRegiList(true);
    //   setAddEvent(false);
    // } else if (p === "A") {
    //   setAddEvent(true);
    //   setRegiList(false);
    // }
    setRegiList(p === "R");
    setAddEvent(p === "A");
  };
  return (
    <div>
      <p className="text-center display-6">
        {regiList && "Registration List"}
        {addEvent && "Add Event"}
      </p>
      <div className="regievent-container">
        <div className="sidemenu">
          <div className="ori">
            <CustomLink id="linkText" to="/admin/regilist">
              <p className="link-text" onClick={() => handleButton("R")}>
              <svg style={{marginRight: '4px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>Volunteer Registration List
              </p>
            </CustomLink>

            <br />

            <CustomLink to="/admin/addevents">
              <p onClick={() => handleButton("A")}><svg style={{marginRight: '4px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>Add Events</p>
            </CustomLink>
          </div>
        </div>
        <div className="component">
          {regiList && <RegiList></RegiList>}
          {addEvent && <AddEvent></AddEvent>}
          {/* <Outlet></Outlet> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
