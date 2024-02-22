import React, { useState } from 'react';
import './Login.css'; // Importa los estilos

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      onLogin();
    } else {
      alert('Por favor, ingresa usuario y contraseña.');
    }
  };

  const handleRegister = () => {
    window.location.href = '/registro'; // Redirige a la página de registro
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Iniciar sesión</h2>
      <label className="login-label">
        Usuario:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
      </label>
      <label className="login-label">
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
      </label>
      <button onClick={handleLogin} className="login-button">
        Iniciar sesión
      </button>
      <button onClick={handleRegister} className="registro-button"> {/* Cambiado el className a registro-button */}
        Registrarse
      </button>
    </div>
  );
};

export default Login;
