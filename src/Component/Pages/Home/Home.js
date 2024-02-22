import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <br />
      <br />
      <div className="tag-and-search-field">
        <h1 className="text-center">THE TRUTH IS BEAUTY AND PEACE.</h1>
        <div class="input-group mb-3 search mt-4">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <button
            class="btn btn-outline-secondary button"
            type="button"
            id="button-addon1"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
