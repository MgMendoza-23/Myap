import React, { useState } from 'react';
import './Notificacion.css';

function Notificacion() {
  // Estado para almacenar las notificaciones
  const [notificaciones, setNotificaciones] = useState([
    { id: 1, nombre: 'Diego Irwin', comentario: 'Excelente servicio', respuesta: 'Me Respond' },
    { id: 2, nombre: 'Raul Asany', comentario: 'Reserve en esta ubicación', respuesta: 'Me Respond' }
  ]);

  return (
    <div className="App">
      <aside className="sidebar">
        {/* Lista de opciones del sidebar */}
        <ul>
          <li>Perfil</li>
          <li>Detalles Personales</li>
          <li>Panel de control</li>
          {/* Más opciones */}
        </ul>
      </aside>
      <main className="content">
        {/* Barra de búsqueda */}
        <div className="search-bar">
          <input type="text" placeholder="Buscar un restaurante" />
          <button>Crear</button>
        </div>
        {/* Sección de notificaciones */}
        <section className="notificaciones">
          <h2>Notificaciones</h2>
          {notificaciones.map(notificacion => (
            <div key={notificacion.id} className="notificacion">
              <p>{notificacion.nombre}</p>
              <p>{notificacion.comentario}</p>
              <button>{notificacion.respuesta}</button>
              {/* Imagen del plato de comida */}
            </div>
          ))}
        </section>
      </main>
      <aside className="filtro">
        {/* Sección de filtros */}
        <h3>Filtro</h3>
        <div>
          <input type="checkbox" id="comentarios" />
          <label htmlFor="comentarios">Comentarios</label>
        </div>
        {/* Más filtros */}
      </aside>
    </div>
  );
}

export default Notificacion;
