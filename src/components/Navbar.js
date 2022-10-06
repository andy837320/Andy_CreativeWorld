import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid bg-success">
          <img src="./logo.jpg" alt="logo" width="60" height="50" />

          <div>
            <a class="navbar-brand bg-white">Anindita(Andy's) Creative World</a>
          </div>
          {/* <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
