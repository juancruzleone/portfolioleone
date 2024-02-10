import React from 'react';
import Image from 'next/image'
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const Skills = () => {
    return (
        <section id='skills'>
        <h2>Skills</h2>
        <div className='contenedor-skills'>
          <div className='caja-skills'>
            <Image src="/html-1.svg" alt="logo de html" width={100} height={100} />
          </div>
          <div className='caja-skills'>
            <Image src="/css-3.svg" alt="logo de css" width={400} height={400} />
          </div>
          
          <div className='caja-skills'>
            <Image src="/logo-javascript.svg" alt="logo de javascript" width={400} height={400} />
          </div>
          <div className='caja-skills'>
            <Image src="/react.svg" alt="logo de react" width={400} height={400} />
          </div>
          <div className='caja-skills'>
            <Image src="/vue-9.svg" alt="logo de vue" width={400} height={400} />
          </div>
          
          <div className='caja-skills'>
            <Image src="/nextjs.svg" alt="logo de nextjs" width={400} height={400} />
          </div>  
          <div className='caja-skills'>
            <Image src="/vitejs.svg" alt="logo de vite" width={400} height={400} />
          </div>
          <div className='caja-skills'>
            <Image src="/bootstrap-5-1.svg" alt="logo de bootstrap" width={400} height={400} />
          </div>
          <div className='caja-skills'>
            <Image src="/nodejs-icon.svg" alt="logo de node" width={400} height={400} />
          </div>
          <div className='caja-skills'>
            <Image src="/expressjs_dark.svg" alt="logo de express" width={400} height={400} />
          </div>
          <div className='caja-skills'>
            <Image src="/adobe-photoshop-2.svg" alt="logo de photoshop" width={400} height={400} />
          </div>
          <div className='caja-skills'>
            <Image src="/adobe-illustrator-cc-icon.svg" alt="logo de illustrator" width={400} height={400} />
          </div>
          <div className='caja-skills'>
            <Image src="/php_dark.svg" alt="logo de php" width={400} height={400} />
          </div>
          <div className='caja-skills'>
            <Image src="/laravel-2.svg" alt="logo de laravel" width={400} height={400} />
          </div>
          <div className='caja-skills'>
            <Image src="/mysql-6.svg" alt="logo de mysql" width={400} height={400} />
          </div>
          <div className='caja-skills'>
            <Image src="/github-icon-1.svg" alt="logo de github" width={400} height={400} />
          </div>
          <div className='caja-skills'>
            <Image src="/mongodb-icon-1.svg" alt="logo de mongodb" width={400} height={400} />
          </div>
        </div>
      </section>
    )
   

}

export default Skills