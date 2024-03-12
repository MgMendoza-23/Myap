import React, { useState } from 'react';
import './Notificacion.css';
import { Link } from 'react-router-dom';

function Notificacion() {
  const [notificaciones, setNotificaciones] = useState([
    { id: 1, nombre: 'Diego Irwin', comentario: 'Excelente servicio', respuesta: 'Me Respond' },
    { id: 2, nombre: 'Raul Azuri', comentario: 'Reserve en esta ubicación', respuesta: 'Me Respond' }
  ]);

  return (
    <div className="App">
      <aside className="sidebar">
        <ul>
          <Link to='/'>Perfil</Link>
          <li>Detalles Personales</li>
          <li>Panel de control</li>
        </ul>
      </aside>
      <main className="content">
        <div className="search-bar">
          <input type="text" placeholder="Buscar un restaurante" />
          <button>Crear</button>
        </div>
  
        <section className="notificaciones">
          <h2>Notificaciones</h2>
          {notificaciones.map(notificacion => (
            <div key={notificacion.id} className="notificacion">
              <p>{notificacion.nombre}</p>
              <p>{notificacion.comentario}</p>
              <button>{notificacion.respuesta}</button>
            </div>
          ))}
        </section>
      </main>
      <aside className="filtro">
        <h3>Filtro</h3>
        <div>
          <input type="checkbox" id="comentarios" />
          <label htmlFor="comentarios">Comentarios</label>
        </div>
      </aside>
    </div>
  );
}

export default Notificacion;
