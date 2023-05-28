import React from 'react';
import '../style/style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <strong className="logo-title">Code Hive</strong>
        </Link>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/" className="nav-link1" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Probleme/Allquestions" className="nav-link1" >
                Questions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Probleme/create" className="nav-link1">
              Add Question
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
