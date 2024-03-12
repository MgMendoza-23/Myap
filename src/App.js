import React, { useState } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Login from "./Login/Login"
import Rutas from "./routes/Rutas";
import Defaul from './components/Defaul';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  return (
    <div>
      {loggedIn ? (
        <BrowserRouter>
          <Rutas/>
          <Defaul/>
        </BrowserRouter>
      ):(
        <Login onLogin={handleLogin}/>
        )}
    </div>
  )
}

export default App;