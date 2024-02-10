import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import '../css/style.css';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Component {...pageProps} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default MyApp;
