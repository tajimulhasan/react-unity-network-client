import React, { useState } from "react";
import "./Home.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import AllEvents from "../AllEvents/AllEvents";
const Home = () => {
  const [field, setField] = useState("");
  const handleField = (e) => {
    setField(e.target.value);
  };

  const handleSearch = () => {
    setField("");
    Swal.fire({
      title: "Oops sorry ):",
      text: "Our search api is not ready",
      icon: "info",
      confirmButtonText: "Continue",
    });
  };
  return (
    <div>
      <br />
      <br />
      <div className="tag-and-search-field">
        <h1 className="text-center">THE TRUTH IS BEAUTY AND PEACE.</h1>
        <div class="input-group mb-3 search mt-4">
          <input
            value={field}
            onChange={handleField}
            type="text"
            class="form-control"
            placeholder="Search..."
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <button
            onClick={handleSearch}
            class="btn btn-outline-secondary button"
            type="button"
            id="button-addon1"
          >
            Search
          </button>
        </div>
        {/* Swal.fire({
      title: 'Oops sorry ):',
      text: 'Our search api is not ready',
      icon: 'info',
      confirmButtonText: 'Continue'
    });   */}
      </div><br /><br />
      <div >
        <AllEvents></AllEvents>
      </div>
    </div>
  );
};

export default Home;
