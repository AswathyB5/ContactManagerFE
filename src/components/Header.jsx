import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Header = () => {
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="container-fluid p-4 "
          style={{ backgroundColor: "#610000" }}
        >
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  {" "}
                  <button className="btn btn-outline-light me-4" type="submit">
                    Home
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add">
                  {" "}
                  <button className="btn btn-outline-light" type="submit">
                    Add Contact
                  </button>
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header