import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from '../layout/Layout';
//import de componentes
import Home from '../pages/Home';
import Lista from '../components/Lista';
import Login from '../Login/Login';
import Perfil from '../perfil/Perfil';
import Notificacion from '../notificacion/Notificacion';
import DatosPersonales from '../components/DatosPersonales';
import Tabla from '../components/Tabla';
import Coloso from '../reservas/Coloso';
import Registro from '../Login/Registro';
import RegistrReserv from '../reservas/RegistrReserv';
import App from '../App';

const Rutas = () => {
  return (
    <Layout>
      <Routes>
      
          <Route path='/' exact element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path='/lista' exact element={<Lista/>}/>
          <Route  path='/Notificacion' exact element={<Notificacion/>}/>
          <Route path='/Perfil' exact element={<Perfil/>}/>
          <Route path='/datos' exact element={<DatosPersonales/>}/>
          <Route path='/datos/:id' exact element={<DatosPersonales/>}/>
          <Route path='/tabla' exact element={<Tabla/>}/>
          <Route path='/Coloso' exact element={<Coloso/>}/>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/ReservData' element={<RegistrReserv/>}/>
          <Route path='/app' element={<App/>}/>
      </Routes>
    </Layout>
  );
}
export default Rutas;