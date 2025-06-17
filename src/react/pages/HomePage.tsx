import React from 'react';
import NavbarGuest from '../components/NavbarGuest';
import Footer from '../components/Footer';

const HomePage: React.FC = () => (
  <>
    <NavbarGuest />
    <main className="flex-grow-1">
      <section className="hero-section">
        <div className="hero-background">
          <div className="particles" />
          <div className="lightning-effect" />
        </div>
        <div className="container hero-content">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-text">
                <h1 className="hero-title">
                  <span className="text-gradient">FEEL THE</span>
                  <span className="text-thunder">THUNDER</span>
                </h1>
                <p className="hero-subtitle">
                  Experimenta la potencia y velocidad en cada kilómetro
                </p>
                <div className="hero-buttons">
                  <button
                    className="btn btn-primary btn-lg me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#authModal"
                  >
                    <i className="bi bi-rocket-takeoff me-2"></i>Comenzar Aventura
                  </button>
                  <a href="/catalog" className="btn btn-outline-light btn-lg">
                    <i className="bi bi-eye me-2"></i>Ver Catálogo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-product">
                <div className="product-container">
                  <div className="product-glow" />
                  <div id="model-viewer" className="model-viewer-container">
                    <model-viewer
                      src="/models/harley-davidson_police.glb"
                      alt="Harley Davidson Police 3D Model"
                      auto-rotate
                      rotation-per-second="0.2"
                      auto-rotate-delay="0"
                      camera-controls
                      environment-image="neutral"
                      shadow-intensity="1"
                      exposure="1.5"
                      className="model-viewer"
                    />
                  </div>
                  <div className="energy-rings">
                    <div className="ring ring-1" />
                    <div className="ring ring-2" />
                    <div className="ring ring-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-lightning-charge" />
                </div>
                <h3>Potencia Extrema</h3>
                <p>Motores de alta performance diseñados para la velocidad</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-shield-check" />
                </div>
                <h3>Máxima Seguridad</h3>
                <p>Tecnología avanzada en sistemas de frenado y estabilidad</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-gear" />
                </div>
                <h3>Tecnología Innovadora</h3>
                <p>Última generación en componentes y diseño aerodinámico
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default HomePage;
