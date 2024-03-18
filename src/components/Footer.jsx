import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      {/* Contenido del footer */}
      <div className="redes-sociales"> 
        <p>Encuéntranos en redes sociales:&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#" className='iconFoo' ><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#" className='iconFoo' ><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" className='iconFoo' ><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#" className='iconFoo' ><FontAwesomeIcon icon={faGithub} /></a> </p>
      </div>
      <p>© 2024 FinalBadRequest. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
