import React from 'react';
import Head from 'next/head';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import AboutMe from '../components/aboutme.jsx';
import Skills from '../components/skills.jsx';
import Projects from '../components/projects.jsx';
import Contact from '../components/contact.jsx';

const HomePage = ({ darkMode, toggleDarkMode }) => {
  return (
    <div>
      <Head>
        <title>Juan cruz Leone | Portfolio</title>
        <meta name="description" content="Descripción de mi página" />
      </Head>
      <div className='contenedorPortfolio'>
        <div className={`header ${darkMode ? 'dark' : ''}`}>
          <Header id="home" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
