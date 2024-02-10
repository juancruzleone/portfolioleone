import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <div className="portada">
        <Image src="" alt="" />
      </div>
      <div className="nav-container">
        <nav>
          <ul className="menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about-me">About me</Link>
            </li>
            <li>
              <Link href="#proyects">Proyects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <li className="boton-cv">
              <div className="boton-cv">
                <Link href="/cv-leone.pdf" target="blank">My CV</Link>
              </div>
            </li>
          </ul>
        </nav>
        <div className="switch-container">
          <button className="switch" onClick={toggleDarkMode}>
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>
      </div>
      <div className='contenedor-portada'>
        <h1>Juan cruz Leone</h1>
        <p className='subtitulo-portada'>Front end developer</p>
      </div>
      <div className="boton-contactame"><a href="">Contact me</a></div>
    </header>
  );
}

export default Header;
