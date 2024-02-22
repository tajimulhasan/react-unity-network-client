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
          <div>
            <CustomLink id="linkText" to="/admin/regilist">
              <p className="link-text" onClick={() => handleButton("R")}>
                Volunteer Registration List
              </p>
            </CustomLink>

            <br />

            <CustomLink to="/admin/addevents">
              <p onClick={() => handleButton("A")}>+Add Events</p>
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
