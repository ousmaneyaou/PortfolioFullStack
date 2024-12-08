import React, { useState } from "react";
import "../styles/Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0); // État pour gérer la modale active

  const toggleTab = (index) => {
    setToggleState(index); // Définit la modale active
    console.log('toggleState:', toggleState);

  };

  const closeModal = () => {
    setToggleState(0); // Réinitialise la modale active
  };

  return (
    <section className="service" id="services">
      <div className='about__title'>
        <h1>Services</h1>
      </div>
      <div className="services__container container grid">
        {/* Service 1 */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__tittle">
              Product <br /> Designer
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => toggleTab(1)}
          >
            View More <i className="uil uil-arrow-right"></i>
          </span>
          <div
            className={
              toggleState === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={closeModal}
              ></i>
              <h3 className="services_modal-tittle">Product Designer</h3>
              <p className="services_modal-description">
                Je conçois et développe des produits numériques innovants, en mettant l'accent sur la fonctionnalité, l'expérience utilisateur et l'impact visuel. Mon objectif est de transformer des idées complexes en solutions simples et efficaces qui répondent aux besoins des utilisateurs et des entreprises.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web pages development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I create UX element interactions.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__tittle">
              UI/UX <br /> Designer
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => toggleTab(2)}
          >
            View More <i className="uil uil-arrow-right"></i>
          </span>
          <div
            className={
              toggleState === 2 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={closeModal}
              ></i>
              <h3 className="services_modal-tittle">UI/UX Designer</h3>
              <p className="services_modal-description">
              Je conçois des expériences utilisateur uniques et intuitives en alliant esthétique et fonctionnalité. Mon objectif est d'optimiser la satisfaction utilisateur tout en répondant aux besoins des entreprises grâce à des solutions créatives et performantes.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web pages development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I create UX element interactions.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__tittle">
              Visual <br /> Designer
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => toggleTab(3)}
          >
            View More <i className="uil uil-arrow-right"></i>
          </span>
          <div
            className={
              toggleState === 3 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={closeModal}
              ></i>
              <h3 className="services_modal-tittle">Visual Designer</h3>
              <p className="services_modal-description">
              Avec une année d'expérience en développement web et une passion pour la conception visuelle, je crée des designs modernes et intuitifs qui captivent les utilisateurs. Je combine créativité et expertise technique pour transformer les idées en interfaces esthétiques et fonctionnelles.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web pages development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I create UX element interactions.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
