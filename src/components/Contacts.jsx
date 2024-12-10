import React from 'react'
import "../styles/Contacts.css";
import iconmessage from '../image/message.webp'
import iconemail from '../image/email.png'
import icontel from '../image/telephone.jpg'
import iconemplacement from '../image/localisation.png'


const Contacts = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Envoi....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "49dba4ba-f687-4752-8576-709ff8a19f8f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Formulaire soumis avec succès");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div id='contact' className='contact'>
      <div className="contact-col">
        <h3>envoyez-nous un message <img src={iconmessage} alt="" /></h3>
        <p>Je suis toujours enthousiaste à l'idée de collaborer sur des projets innovants et de relever de nouveaux défis. Que ce soit pour discuter de vos besoins en développement Full Stack, échanger autour de vos idées ou explorer des opportunités de collaboration, n'hésitez pas à me laisser un message. Je me ferai un plaisir de vous répondre rapidement !
        </p>
        <ul>
            <li><img src={iconemail} alt="" />Ousmaneyaou00@gmail.com</li>
            <li><img src={icontel} alt="" />+221 77 859 66 61</li>
            <li><img src={iconemplacement} alt="" />Medima, rue 30 X 37 <br />Dakar, Senegal</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Votre nom</label>
            <input type="email" name='email' placeholder='Votre email...' required/>
            <label>Telephone</label>
            <input type="tel" name='tel' placeholder='Votre numero...' required/>
            <label>Votre messages</label>
            <textarea name="message" rows='6' placeholder='Enter votre message' required></textarea><br />
            <button type='subnit' className='btn dark-btn'>Envoyer</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contacts
