import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">User</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav className="mx-2"><Link to="/">Home</Link></Nav>
          <Nav className="mx-2"><Link to="/about">About</Link></Nav>
          <Nav className="mx-2"><Link to="/user">User</Link></Nav>
        </Nav>
      </Navbar> */}
    </>
  )
}

export default Navigation;
