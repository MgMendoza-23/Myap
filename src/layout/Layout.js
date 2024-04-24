import React from 'react';
import BarraMenu from '../components/BarraMenu';
import Footer from '../components/Footer';
export default function Layout({children}) {
  return (
    <div className='container-fluid'>
        <div className='section'>
            <BarraMenu/>
            
        </div>
        <div className='section'>
            {children}
        </div>
        <Footer/>

    </div>
  )
}
