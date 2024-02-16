//import Datos from "./components/Datos";
import BarraMenu from "./components/BarraMenu";
import Lista from "./components/Lista";
import Login from "./Login/Login"
import Reserv from "./reservas/Reserv";
// src/App.js
import React, { useState } from 'react';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Aquí podrías realizar la lógica de autenticación y actualizar loggedIn
    // Por ahora, simplemente estableceremos loggedIn en true
    setLoggedIn(true);
  };
  return (
    <div>
      {< Reserv />}
      {loggedIn ? (
        <div>
          
          {<BarraMenu/>}
          {<Lista/>}
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
