import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
   // Fonction pour gérer l'ouverture/fermeture du menu
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //scroll nav bar
  const [couleur, setCouleur] = useState(false)
  useEffect(() => {
  window.addEventListener('scroll', () => {
      window.scrollY > 720 ? setCouleur(true) : setCouleur(false)
  })
  }, [])
  //scroll nav bar

  return (
    <header className={`header ${couleur ? "couleurDeNav" : ""}`}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Ousmane
        </a>

        {/* Menu de navigation */}
        <div className={`nav__menu ${isMenuOpen ? "show" : ""}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
        </div>

        {/* Bouton pour ouvrir le menu */}
        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
