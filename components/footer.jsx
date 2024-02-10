import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer>
          {/* 
        <h3>Juan cruz Leone</h3>
        <div className='contenedor-icon-footer'>
      
          <Image src="/github-icon-1.svg" alt="logo de github" width={50} height={50} />
          <Image src="/github-icon-1.svg" alt="logo de github" width={50} height={50} />
          <Image src="/github-icon-1.svg" alt="logo de github" width={50} height={50} />
        </div>

        */}
        <h4>Developed by Juan Cruz Leone</h4>
        <div className='estrellas-footer'>
          ⭐⭐⭐
        </div>
    </footer>
  );
}

export default Footer;
