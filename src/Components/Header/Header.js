import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div>
      {/* navbar start */}
			<nav className="navbar navbar-expand-lg navbar-dark bg-color">

  <div className="container-fluid">

  <Link className="navbar-brand" to="/home"><i className="fas fa-book-open"></i> eLango</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link me-4 fs-6 text-white" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-4 text-white" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-4 text-white" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact" >Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
		</div>
	);
};

export default Header;