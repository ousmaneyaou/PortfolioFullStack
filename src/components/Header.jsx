import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { Link } from "react-scroll"; // Import de `react-scroll` pour un scrolling fluide

const Header = () => {
  // Gestion du menu
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Gestion de la couleur de la barre de navigation lors du scroll
  const [couleur, setCouleur] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setCouleur(window.scrollY > 720);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Nettoyage
  }, []);

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
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-222}
                className="nav__link"
                onClick={toggleMenu}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-40}
                className="nav__link"
                onClick={toggleMenu}
              >
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-80}
                className="nav__link"
                onClick={toggleMenu}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="projets"
                smooth={true}
                duration={500}
                offset={-20}
                className="nav__link"
                onClick={toggleMenu}
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
                className="nav__link"
                onClick={toggleMenu}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </Link>
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
