import React from 'react';
import Header from '../components/header.jsx';



const HomePage = () => {
  return (
    <div className='contenedorPortfolio'>
      <div className='header'>
        <Header id="home"/>
        <div className='contenedor-portada'>
          <h1>Juan cruz Leone</h1>
          <p className='subtitulo-portada'>Front end developer</p>
        </div>
        <div class="boton-contactame"><a href="">Contact me</a></div>
      </div>
     
      <section id='about-me'>
        <h2>About me</h2>
        <div className='contenedor-about-me'>
          <p className='texto-about-me'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange</p>
          {/*Agregar foto mia*/}
        </div>
      </section>
      <section id='skills'>
        <h2>Skills</h2>
        <div className='contenedor-skills'>
          <div className='caja-skills'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
            <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
            <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
            <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
            <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
            </svg> 
          </div>
          <div className='caja-skills'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
            <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"/>
            <path fill="#30a9dc" d="M226 472l149-41 35-394H226"/>
            <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"/>
            <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"/>
            </svg>  
          </div>
          <div className='caja-skills'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
            <rect width="630" height="630" fill="#f7df1e"/>
            <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
            </svg>
          </div>
          <div className='caja-skills'>
            <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="" xmlns="http://www.w3.org/2000/svg" class="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="#00d8ff"></circle><g stroke="#00d8ff" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
          </div>
          <div className='caja-skills'>
            <svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#000000"> </path> </g> </g></svg>
          </div>
        </div>
      </section>
      <section id='projects'>
        <h2>Projects</h2>
        <div className='contenedor-trabajos'>
          <div className='trabajos'></div>
          <div className='trabajos'></div>
          <div className='trabajos'></div>
          <div className='trabajos'></div>
        </div>
      </section>
      <section id='contact'>
        <h2 className='titulo-contacto'>Contact</h2>
        <div className='contenedor-contacto'>
          <div className='formulario'>
            <form action=""></form>
              <label htmlFor="">Name</label>
              <input type="text" name="name" id="name" placeholder='Write your name'/>
              <label htmlFor="">Email</label>
              <input type="text" name='email' placeholder='Write your email' />
              <label htmlFor="">Message</label>
              <input type="text" name='message' placeholder='Write your message' id='mensaje'/>
              <input type="submit" value="Enviar" id='boton-formulario'></input>
          </div>  
        </div>
      </section>
    </div>
  );
};

export default HomePage;
