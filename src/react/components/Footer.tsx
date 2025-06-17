import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container py-4">
      <div className="row">
        <div className="col-md-5 mb-3">
          <h5 className="footer-title">
            <i className="bi bi-gear-fill me-2"></i>ProyectoIntegracion
          </h5>
          <p className="footer-text">
            Tu destino para las mejores motocicletas. Calidad, potencia y confianza en cada kilómetro.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/_anthony_sosa_/" className="social-link" target="_blank" rel="noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <h5 className="footer-title">Enlaces</h5>
          <ul className="footer-links">
            <li className="main-link"><a href="/" className="footer-link">Inicio</a></li>
            <li className="main-link"><a href="/catalog" className="footer-link">Catálogo</a></li>
          </ul>
        </div>
        <div className="col-md-4 mb-3">
          <h5 className="footer-title">Contacto</h5>
          <div className="footer-contact">
            <div className="contact-item highlighted">
              <i className="bi bi-clock-fill me-2"></i>
              <span>Horario de Atención <span className="hours-badge">24/7</span></span>
            </div>
            <div className="contact-item contact-title">
              <i className="bi bi-person-fill me-2"></i>
              <span>Integrante 1:</span>
            </div>
            <div className="contact-item contact-phone">
              <i className="bi bi-telephone-fill me-2"></i>
              <span>0995822812</span>
            </div>
            <div className="contact-item contact-address">
              <i className="bi bi-geo-alt-fill me-2"></i>
              <span>Avenida Gonzalo Díaz de Pineda</span>
            </div>
            <div className="contact-item contact-email">
              <i className="bi bi-envelope-fill me-2"></i>
              <span>anthonysosa44@gmail.com</span>
            </div>
            <div className="contact-separator my-2"></div>
            <div className="contact-item contact-title">
              <i className="bi bi-person-fill me-2"></i>
              <span>Integrante 2:</span>
            </div>
            <div className="contact-item contact-phone">
              <i className="bi bi-telephone-fill me-2"></i>
              <span>0987796782</span>
            </div>
            <div className="contact-item contact-address">
              <i className="bi bi-geo-alt-fill me-2"></i>
              <span>Av. Maldonado S34-381</span>
            </div>
            <div className="contact-item contact-email">
              <i className="bi bi-envelope-fill me-2"></i>
              <span>estapia@puce.edu.ec</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="row">
        <div className="col-md-6">
          <p className="footer-copyright mb-0">
            &copy; 2024 ProyectoIntegracion. Todos los derechos reservados.
          </p>
        </div>
        <div className="col-md-6 text-md-end">
          <div className="footer-legal">
            <a href="#" className="footer-link">Términos de Servicio</a>
            <a href="#" className="footer-link">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
