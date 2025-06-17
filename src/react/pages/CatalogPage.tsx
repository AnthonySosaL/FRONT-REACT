import React from 'react';
import NavbarGuest from '../components/NavbarGuest';
import Footer from '../components/Footer';

const CatalogPage: React.FC = () => (
  <>
    <NavbarGuest />
    <main className="flex-grow-1">
      <section className="catalog-background">
        <div className="particles" />
        <div className="lightning-effect" />
      </section>
      <div className="container mt-4">
        <h1 className="mb-4 catalog-title text-cream">Catálogo de Productos</h1>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="input-group">
              <input type="text" id="search-input" className="form-control" placeholder="Buscar productos..." />
              <button className="btn btn-primary" id="search-btn">
                <i className="bi bi-search" /> Buscar
              </button>
            </div>
            <small className="text-cream-help d-block mt-1">
              Al buscar, se desactivará el filtro por categoría.
            </small>
          </div>
          <div className="col-md-6">
            <select className="form-select" id="category-filter">
              <option value="">Todas las categorías</option>
            </select>
            <small className="text-cream-help d-block mt-1">
              Al seleccionar una categoría, se borrará tu búsqueda de texto.
            </small>
          </div>
        </div>
        <div id="loading-products" className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2">Cargando productos...</p>
        </div>
        <div className="row" id="products-container"></div>
        <nav aria-label="Paginación de productos" className="mt-4">
          <ul className="pagination justify-content-center" id="pagination"></ul>
        </nav>
      </div>
      <div className="spacer-before-footer mb-5 pb-4" />
    </main>
    <Footer />
  </>
);

export default CatalogPage;
