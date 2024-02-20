import React from 'react';
import Image from 'next/image';
import Header from './header.jsx';
import Footer from './footer.jsx';

const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projects</h2>
            <div className='contenedor-trabajos'>
                <div className='trabajos' id='proyecto1'>
                    <Image src="/home-inelar.png" alt="imagen de proyecto ienlar" width={400} height={400} />
                    <div className='contenido-proyecto'>
                        <h3>Inelar</h3>
                        <p className='categoria-proyecto'>Ficticio</p>
                        <p>Descripcion</p>
                    </div>
                </div>
                <div className='trabajos'>
                    <Image src="/home-greenpalate.png" alt="imagen de proyecto greenpalate" width={400} height={400} />
                    <div className='contenido-proyecto'>
                        <h3>Greenpalate - Comunidad de recetas</h3>
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

export default Projects;
