import React, { useState } from 'react';
import '../Login/RegistroUsuario.css'; // Importa el archivo CSS

function Defaul() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
  });
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState('');

  const validarFormulario = () => {
    let erroresFormulario = {};
    let formularioValido = true;

    if (!usuario.nombre.trim()) {
      erroresFormulario.nombre = 'Por favor, introduce tu nombre';
      formularioValido = false;
    }

    if (!usuario.correo.trim()) {
      erroresFormulario.correo = 'Por favor, introduce tu correo electrónico';
      formularioValido = false;
    } else if (!/\S+@\S+\.\S+/.test(usuario.correo)) {
      erroresFormulario.correo = 'Por favor, introduce un correo electrónico válido';
      formularioValido = false;
    }

    if (!usuario.contraseña.trim()) {
      erroresFormulario.contraseña = 'Por favor, introduce tu contraseña';
      formularioValido = false;
    } else if (usuario.contraseña.length < 6) {
      erroresFormulario.contraseña = 'La contraseña debe tener al menos 6 caracteres';
      formularioValido = false;
    }

    setErrores(erroresFormulario);
    return formularioValido;
  };

  const handleRegistro = (event) => {
    event.preventDefault();

    if (validarFormulario()) {
      // Aquí puedes enviar los datos del usuario al servidor, por ejemplo, mediante una solicitud HTTP
      // Puedes usar bibliotecas como axios para realizar la solicitud HTTP
      // Por simplicidad, aquí simplemente mostramos los datos del usuario en la consola
      console.log('Datos del usuario:', usuario);

      // Reiniciar el formulario después de enviar los datos
      setUsuario({ nombre: '', correo: '', contraseña: '' });
      setMensaje('¡Registro exitoso!');
    } else {
      setMensaje('');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  return (
    <div className="container"> {/* Agregamos la clase CSS container */}
      <div className="form-container"> {/* Agregamos la clase CSS form-container */}
        <h2>Registro de Usuario</h2>
        {mensaje && <p className="success-message">{mensaje}</p>} {/* Agregamos la clase CSS success-message */}
        <form onSubmit={handleRegistro}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={usuario.nombre}
              onChange={handleChange}
            />
            {errores.nombre && <span className="error-message">{errores.nombre}</span>} {/* Agregamos la clase CSS error-message */}
          </div>
          <div>
            <label>Correo Electrónico:</label>
            <input
              type="email"
              name="correo"
              value={usuario.correo}
              onChange={handleChange}
            />
            {errores.correo && <span className="error-message">{errores.correo}</span>} {/* Agregamos la clase CSS error-message */}
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="contraseña"
              value={usuario.contraseña}
              onChange={handleChange}
            />
            {errores.contraseña && <span className="error-message">{errores.contraseña}</span>} {/* Agregamos la clase CSS error-message */}
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Defaul;