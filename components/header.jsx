import React from 'react';
import Link from 'next/link';


function Header() {
  return (
    <header>
      <div className="portada">
        <img src="" alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about-me">About me</Link>
          </li>
          <li>
            <Link href="#works">works</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li className="boton-cv">
            <div className="boton-cv">
              <Link href="">My CV</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
