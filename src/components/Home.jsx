import React from 'react';
import moi from '../image/moi.jpg';
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home">
      <div id='home' className="home__container">
        {/* Réseaux sociaux à gauche */}
        <div className="home__social">
          <a
            href="instagram"
            className="home__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="http://localhost:3001/home"
            className="home__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-dribbble"></i>
          </a>
          <a
            href="https://github.com/ousmaneyaou?tab=repositories"
            className="home__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/YaouSouleyOusmane/" /* Remplacez "your-profile" par votre identifiant LinkedIn */
            className="home__social-link"
            target="_blank"
            rel="noopener noreferrer"
            >
            <i className="uil uil-linkedin-alt"></i>
        </a>

        </div>

        {/* Texte au centre */}
        <div className="data">
          <h1 className="data__title">
            Yaou Souleu Ousmane <span className="wave">👨‍💻</span>
          </h1>
          <h3 className="data__subtitle">Développeur Full Stack</h3>
          <p className="data__description">Passionné, prêt à concevoir des solutions sur mesure qui transforment vos défis en opportunités numériques.</p>
          <a href="#contact" className="button">
            Say Hello <span className="emoji">👋</span>
          </a>
        </div>

        {/* Photo à droite */}
        <div className="home__img">
          <img src={moi} alt="Ousmane" />
        </div>
      </div>
    </section>
  );
};

export default Home;
