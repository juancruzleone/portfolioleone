import React from 'react';
import Image from 'next/image';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const Works = () => {
    return (
        <section id='works'>
            <h2>Works</h2>
            <div className='contenedor-trabajos'>
                <div className='trabajos' id='proyecto1'>
                    <Image src="/trabajo.png" alt="imagen de proyecto" width={400} height={400} />
                </div>
                <div className='trabajos'>
                    <Image src="/trabajo.png" alt="imagen de proyecto" width={400} height={400} />
                </div>
                <div className='trabajos'>
                    <Image src="/trabajo.png" alt="imagen de proyecto" width={400} height={400} />
                </div>
            </div>
        </section>
    )
}

export default Works;
