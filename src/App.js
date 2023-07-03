import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';

import posterImage from './images/poster.png';
import Curs1 from './Curs1';
import Curs2 from './Curs2';
import Curs3 from './Curs3';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="section-title">Acasă</h2>
      <div className="button-container">
        <Link to="/curs1" className="styled-link">
          <div className="styled-button">
            <img src={posterImage} alt="Cursul 1" />
            <span className="button-text">Algoritmul Bully</span>
          </div>
        </Link>
        <Link to="/curs2" className="styled-link">
          <div className="styled-button">
            <img src={posterImage} alt="Cursul 2" />
            <span className="button-text">Curs 2</span>
          </div>
        </Link>
        <Link to="/curs3" className="styled-link">
          <div className="styled-button">
            <img src={posterImage} alt="Cursul 3" />
            <span className="button-text">Curs 3</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Aici puteți adăuga logica pentru căutare
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Caută..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

const About = () => {
  return (
    <div className="about-container">
      <h2 className="section-title">Despre</h2>
      {/* Alte componente specifice paginii "Despre" */}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="section-title">Contact</h2>
      {/* Alte componente specifice paginii "Contact" */}
    </div>
  );
};

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Router>
      <div className={`app ${menuVisible ? 'menu-active' : ''}`}>
        <div className="sidebar">
          <button className="menu-button" onClick={toggleMenu}>
            Meniu
          </button>
          <SearchBar />
          <ul className={`nav-links ${menuVisible ? 'visible' : ''}`}>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Acasă
              </Link>
            </li>
            <li>
              <Link to="/despre" onClick={toggleMenu}>
                Despre
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/despre" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/curs1" element={<Curs1 />} />
            <Route path="/curs2" element={<Curs2 />} />
            <Route path="/curs3" element={<Curs3 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
