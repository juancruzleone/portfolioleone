import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const Works = () => {
    return (
        <section id='works'>
            <h2>Works</h2>
            <div className='contenedor-trabajos'>
            <div className='trabajos' id='proyecto1'>
                <img src="/trabajo.png" alt="imagen de proyecto" />
            </div>
            <div className='trabajos'>
                <img src="/trabajo.png" alt="imagen de proyecto" />
            </div>
            <div className='trabajos'>
                <img src="/trabajo.png" alt="imagen de proyecto" />
            </div>
            </div>
        </section>
    )
   

}

export default Works