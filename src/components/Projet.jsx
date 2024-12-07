import React from 'react';
import ecom1 from '../image/e-commerce1.PNG';
import ecom2 from '../image/ecommerce2.PNG';
import ecol from '../image/ecotel.PNG';
import youtub from '../image/youtub.PNG';
import etud from '../image/gestion.PNG';
import full from '../image/@11.PNG';
import "../styles/Projets.css";

const Projet = () => {
  return (
    <section id='section' className="projets">
      <div className="projets__title">
        <h1>My Latest Work</h1>
        <p>Découvrez quelques-uns de mes projets récents conçus avec précision et créativité.</p>
      </div>
      <div className="projets__container">
        <div className="projets__card">
          <img src={ecom1} alt="E-commerce Project 1" />
        </div>
        <div className="projets__card">
          <img src={ecom2} alt="E-commerce Project 2" />
        </div>
        <div className="projets__card">
          <img src={ecol} alt="Ecotel Project" />
        </div>
        <div className="projets__card">
          <img src={youtub} alt="YouTube Clone" />
        </div>
        <div className="projets__card">
          <img src={etud} alt="Gestion Etudiants" />
        </div>
        <div className="projets__card">
          <img src={full} alt="Full Stack Project" />
        </div>
      </div>
      <div className="projets__showmore">
        View More <i className="uil uil-arrow-right"></i>
      </div>
    </section>
  );
};

export default Projet;
