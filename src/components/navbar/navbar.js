import React from 'react';

const Navbar = () => {
    return (
      <>
        <nav style={{height: "80px"}} className="navbar navbar-expand-lg navbar-dark bg-danger">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">Ali K.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link active">Home
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">Features</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar;
