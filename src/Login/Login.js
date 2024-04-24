import React, { useState } from 'react';
import "./Login.css";
import Registro from '../Login/Registro';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToRegister, setRedirectToRegister] = useState(false); 

  const handleLogin = () => {
    if (username && password) {
      if (redirectToRegister) {
        window.location.href = "/registro"; // Redirige al formulario de registro
      } else {
        onLogin(); // Inicia sesión
      }
    } else {
      alert('Por favor, ingresa usuario y contraseña.');
    }
  };

  const handleRedirectToRegister = () => {
    setRedirectToRegister(true); // Establece redirectToRegister en true para redirigir al formulario de registro
  };

  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" >
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://www.decorfacil.com/wp-content/uploads/2016/08/Imagem-18-4.jpg"
                    alt="login form" class="img-fluid"/>
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center ">
                  <div class="card-body p-4 p-lg-5 text-black container-fluid">
                    <form>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <i class="fas fa-cubes fa-2x me-3"></i>
                        <span class="h1 fw-bold mb-0  "><img src='https://s3.amazonaws.com/sample-login/companies/avatars/000/002/317/original/Logo_-_Reserva.jpg?1498681147' class="img-fluid" width={400} height={100}></img></span>
                      </div>
                      <h5 class="fw-normal mb-3 pb-3" >Iniciar Sesión</h5>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example17">Usuario</label>
                        <input type="email" id="form2Example17" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control form-control-lg" />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example27">Contraseña</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="aform2Exmple27ç" class="form-control form-control-dark" />
                      </div>
                      <div class="pt-1 mb-4">
                        <button onClick={handleLogin} class="btn btn-dark btn-lg btn-block" type="button"> 
                          Iniciar Sesión
                        </button>
                      </div>
                      <a class="small text-muted" href="#!">¿Olvidaste la contraseña?</a>
                      <p className="mb-5 pb-lg-2">¿No tienes cuenta? <a href="" onClick={handleRedirectToRegister} className="small text-muted">Regístrate</a></p>
                      {redirectToRegister && <Registro />}
                      <a href="#!" class="small text-muted">Términos de uso.</a>
                      <a href="#!" class="small text-muted">Política de privacidad</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
