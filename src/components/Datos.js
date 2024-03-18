import React from "react";
import './lista.css';
import { Link } from 'react-router-dom';
function Datos(props) {
  //console.log(props);
  const { nombre, telefono, direccion, imagenes } = props;

  const Mensaje=()=>{
    alert('Hola a todos')
  }
  return (
    <>
      
        <div class="col">
          <div class="card h-100">
          
            <div class="card-body">
            <h3 class="card-title">{nombre}</h3>
            <img src={imagenes} 
            class="card-img-top" alt="..." 
            width={80}
            height={200}
            />
            <p class="card-text">
               <strong>Tipos de comidas:</strong> {telefono}
              </p>
              <p class="card-text">
              <strong>Direccion:</strong>{direccion}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary"><Link type="button"
               class="btn btn-info"
               to="/Coloso"
               >
                
                Leer más..</Link></small>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default Datos;