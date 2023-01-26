import classes from './Footer.module.css'
import { FaYoutube, FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const Footer = () => {
  return ( 

    <div className={classes.Container}>
      <hr width="80%" color="4de29d" style={{marginLeft: '10%'}}></hr>
      <div className={classes.Footer}>
      
          <h2>johnwhitten</h2>
          <div className={classes.FooterIcons}>
          <GrMail color="white" size='30px' style={{padding: '1%'}}
          onClick={handleURL('mailto:johnwhitten.studio@gmail.com')} />
          <FaInstagramSquare color="white" size='30px' style={{padding: '1%'}}
          onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
          <FaGithub color="white" size='30px' style={{padding: '1%'}}
          onClick={handleURL('https://github.com/johnwhittenstudio')} />
          <FaLinkedin color="white" size='30px' style={{padding: '1%'}}
          onClick={handleURL('https://www.linkedin.com/in/johnwhittenstudio/')} />
          <FaYoutube color="white" size='30px' style={{padding: '1%'}}
          onClick={handleURL('https://www.youtube.com/channel/UC-V6tMaHcYExkqCy-NWzTxQ/featured')} />
          </div>
        </div>
      </div>

);
}

export default Footer;