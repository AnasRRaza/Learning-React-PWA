import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav className="mx-2"><Link to="/">Home</Link></Nav>
        <Nav className="mx-2"><Link to="/about">About</Link></Nav>
        <Nav className="mx-2"><Link to="/user">User</Link></Nav>
      </Nav>
    </Navbar>
  )
}

export default Navigation;
