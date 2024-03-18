import React from 'react'
import { Link } from 'react-router-dom';

export default function BarraMenu() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
      <div className="container-fluid ">
        <h1 className="navbar-brand" href="#">Explora los Restaurantes</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="d-flex justify-content-center"> {/* Contenedor centrado */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Principal</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lista">Menú</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Más
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Notificacion">Notificaciones</Link></li>
                  <li><Link class="dropdown-item" to='/datos'>Registrar Datos</Link></li>
                  <li><Link className="dropdown-item" to="/Tabla">Ver informacion </Link></li>
                  <li><Link className="dropdown-item" to="/Perfil">Perfil</Link></li>
                </ul>
              </li>
            </div> 
          </ul><li className="nav-item">
                <Link className="nav-link" to="/Notificacion"><button class="button">
                    <svg viewBox="0 0 448 512" class="bell">
                    <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 
                    64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 
                    377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 
                    17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 
                    384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 
                    96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 
                    328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 
                    17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z">
                    </path></svg>
                    </button></Link>
                </li>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Buscar</button>
              </form>
              </div>
      </div>
    </nav>
             
        

  )
}