import React from "react";

import './navbar.css';

export default function NavBar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand w-50" href="/contact">
          <img src="/img/REINA.png" alt="Brand Icon" width="14%" height="14%" />
          <p className="d-inline-block ms-2">Pasteleria Reina</p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${props.active === 'home' ? 'active' : ''}`} href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${props.active === 'about' ? 'active' : ''}`} href="/about">
                Acerca
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${props.active === 'cakes' ? 'active' : ''}`} href="/cakes">
                Pasteles
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${props.active === 'contact' ? 'active' : ''}`} href="/contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {props.line ? <img src="/img/navbarline.jpg" alt="Line" srcSet="" className="navbarline" /> : ''}
    </>
  );
}
