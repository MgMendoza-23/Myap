import React, { useState } from 'react';
import Axios from '../services/Axios';

const RegistroUsuario = () => {
  const [formData, setFormData] = useState({
    nomusuario: '',
    apellidos: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('/auth/registro', formData);
      console.log(response.data); // Mensaje de éxito del registro
      // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Registro de Usuario</h5>
        <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
          <div className="col-md-12">
            <input
              name="nomusuario"
              type="text"
              className="form-control"
              value={formData.nomusuario}
              onChange={handleChange}
              placeholder="Nombre de usuario"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-12">
            <input
              name="apellidos"
              type="text"
              className="form-control"
              value={formData.apellidos}
              onChange={handleChange}
              placeholder="Apellidos"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-12">
            <input
              name="email"
              type="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-12">
            <input
              name="password"
              type="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary" type="submit">
              Regi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistroUsuario;
