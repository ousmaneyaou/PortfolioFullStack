import React from 'react'
import moi2 from '../image/moi2.jpeg';
import "../styles/About.css";
import CV from '../image/cvyaou.pdf';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about__title'>
        <h1>About me</h1>
      </div>
      <div className='about__sections'>
        <div className="about__left">
            <img src={moi2} alt="" />
        </div>
        <div className="about__right">
            <div className="about__para">
                <p>Passionné par le développement et les nouvelles technologies, je suis un développeur Full Stack avec une expertise dans la conception et la réalisation de solutions numériques robustes et performantes. </p>
                <p>Mon objectif est de collaborer avec des équipes dynamiques pour relever des défis technologiques et apporter une réelle valeur ajoutée à chaque projet.</p>
            </div>
            <div className="about__skills">
                <div className="about__skill">
                    <p>HTML & CSS</p><hr style={{width:"80%"}}/>
                    <p>React JS</p><hr style={{width:"75%"}}/>
                    <p>JavaScript</p><hr style={{width:"60%"}}/>
                    <p>Java</p><hr style={{width:"50%"}}/>
                    <p>Spring-Boot</p><hr style={{width:"60%"}}/>
                    <br />
                    <a download="" href={CV} className="button button--flex">Download CV📄</a>
                </div>
            </div>
        </div>
        <div className="about__achievements">
            <div className="about__achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about__achievement">
                <h1>5+</h1>
                <p>PROJETS COMPLETED</p>
            </div>
            <hr />
            <div className="about__achievement">
                <h1>1+</h1>
                <p>CLIENTS SATISFAITS</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
