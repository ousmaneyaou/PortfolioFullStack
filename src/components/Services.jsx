import React from 'react'
import "../styles/Services.css";

const Services = () => {
  return (
    <section className='service' id='services'>
        <div className='sections__tittle'>
            <h1>Services</h1>
        </div>

        <div className='services__container container grid'>
            <div className="services__content">
                <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__tittle">Product <br /> Designer</h3>
                </div>
                <spam className="services__button">View More <i className="uil uil-arrow-right"></i></spam>

                <div className="services__modal">
                    <div className="service__omdal-content"><i className="uil uil-times services__modal-close"></i>
                    <h3 className='services_modal-tittle'>Product Designer</h3>
                    <p className='services_modal-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor vitae saepe sunt dignissimos possimus molestias ad! Accusantium quis enim inventore laborum at, pariatur facilis, officiis, adipisci voluptatum dolor soluta! Temporibus!</p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Develop the user interface.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Web pages developement.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I create ux element interactions.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Je positionne la marque de votre entreprise.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Conception et maquettes de produits pour les entreprises.</p>
                        </li>

                    </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__tittle">UI/UX <br /> Designer</h3>
                </div>
                <spam className="services__button">View More
                <i className="uil uil-arrow-right"></i></spam>

                <div className="services__modal">
                    <div className="service__omdal-content"><i className="uil uil-times services__modal-close"></i>
                    <h3 className='services_modal-tittle'>UI/UX Disigner</h3>
                    <p className='services_modal-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor vitae saepe sunt dignissimos possimus molestias ad! Accusantium quis enim inventore laborum at, pariatur facilis, officiis, adipisci voluptatum dolor soluta! Temporibus!</p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Develop the user interface.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Web pages developement.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I create ux element interactions.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Je positionne la marque de votre entreprise.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Conception et maquettes de produits pour les entreprises.</p>
                        </li>

                    </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__tittle">Visual <br /> Designer</h3>
                </div>
                <spam className="services__button">View More <i className="uil uil-arrow-right"></i></spam>

                <div className="services__modal">
                    <div className="service__omdal-content"><i className="uil uil-times services__modal-close"></i>
                    <h3 className='services_modal-tittle'>Visual Designer</h3>
                    <p className='services_modal-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor vitae saepe sunt dignissimos possimus molestias ad! Accusantium quis enim inventore laborum at, pariatur facilis, officiis, adipisci voluptatum dolor soluta! Temporibus!</p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Develop the user interface.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Web pages developement.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">I create ux element interactions.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Je positionne la marque de votre entreprise.</p>
                        </li>
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Conception et maquettes de produits pour les entreprises.</p>
                        </li>

                    </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services
