import React from 'react';

const NavbarGuest: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-guest-modern">
    <div className="container">
      <a className="navbar-brand brand-enhanced" href="/">
        <i className="bi bi-motorcycle me-2"></i>
        <span className="brand-text">MotoShop</span>
      </a>
      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#guestNav"
        aria-controls="guestNav"
        aria-expanded="false"
        aria-label="Men\u00FA de navegaci\u00F3n"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="guestNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link nav-link-enhanced" href="/catalog">
              <i className="bi bi-shop me-1"></i>
              Cat\u00E1logo
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a
              href="#"
              className="btn btn-auth-guest"
              data-bs-toggle="modal"
              data-bs-target="#authModal"
            >
              <i className="bi bi-person-circle me-2"></i>
              <span className="auth-text">
                <span className="auth-primary">Iniciar Sesi\u00F3n</span>
                <span className="auth-secondary">/ Registrarse</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavbarGuest;
