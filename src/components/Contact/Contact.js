import { FaYoutube, FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import classes from './Contact.module.css'

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const Contact = () => {
  return ( 
    <div className={classes.Contact} id="contact">
      <div className={classes.ContactIcons}>
      <FaYoutube color="white" size='30px' style={{padding: '1%'}}
      onClick={handleURL('https://www.youtube.com/channel/UC-V6tMaHcYExkqCy-NWzTxQ/featured')} />
      <FaInstagramSquare color="white" size='30px' style={{padding: '1%'}}
      onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
      <FaGithub color="white" size='30px' style={{padding: '1%'}}
      onClick={handleURL('https://github.com/johnwhittenstudio')} />
      <FaLinkedin color="white" size='30px' style={{padding: '1%'}}
      onClick={handleURL('https://www.linkedin.com/in/johnwhittenstudio/')} />
    </div>
    </div>
   );
}
 
export default Contact;