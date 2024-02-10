import React from 'react';
import Image from 'next/image';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const Works = () => {
    return (
        <section id='proyects'>
            <h2>Proyects</h2>
            <div className='contenedor-trabajos'>
                <div className='trabajos' id='proyecto1'>
                    <Image src="/trabajo.png" alt="imagen de proyecto" width={400} height={400} />
                    <div className='contenido-proyecto'>
                        <h3>Inelar</h3>
                        <p className='categoria-proyecto'>Ficticio</p>
                        <p>Descripcion</p>
                    </div>
                </div>
                <div className='trabajos'>
                    <Image src="/trabajo.png" alt="imagen de proyecto" width={400} height={400} />
                    <div className='contenido-proyecto'>
                        <h3>Artio - Galeria de arte</h3>
                        <p className='categoria-proyecto'>Ficticio</p>
                        <p>Descripcion</p>
                    </div>
                </div>
                <div className='trabajos'>
                    <Image src="/trabajo.png" alt="imagen de proyecto" width={400} height={400} />
                    <div className='contenido-proyecto'>
                        <h3>Tablero kanban</h3>
                        <p className='categoria-proyecto'>Ficticio</p>
                        <p>Descripcion</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;
