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
                </li>
                <form className="d-flex" role="search">
            <div className="d-flex align-items-center">
              <button type='submit' className="btn btn-link px-3 me-2">Login</button>
              <Link to="/registro" className="btn btn-primary me-3">Sign up for free</Link>
            </div>
          </form>
              </div>
      </div>
    </nav>
             
        

  )
}