import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>  
      <a href="#about">About Us</a> 
      <a href="#contact">Contact Us</a>
      <Link to="/">Logout</Link>
    </nav>
  );
}