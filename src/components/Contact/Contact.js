import { FaYoutube, FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import classes from './Contact.module.css'

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const Contact = () => {
  return ( 
    <div className={classes.Contact} id="contact">
      <div className={classes.ContactIcons}>
      <GrMail color="c5d248" size='30px' style={{padding: '1%'}}
      onClick={handleURL('mailto:johnwhitten.studio@gmail.com')} />
      <FaInstagramSquare color="c5d248" size='30px' style={{padding: '1%'}}
      onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
      <FaGithub color="c5d248" size='30px' style={{padding: '1%'}}
      onClick={handleURL('https://github.com/johnwhittenstudio')} />
      <FaLinkedin color="c5d248" size='30px' style={{padding: '1%'}}
      onClick={handleURL('https://www.linkedin.com/in/johnwhittenstudio/')} />
      <FaYoutube color="c5d248" size='30px' style={{padding: '1%'}}
      onClick={handleURL('https://www.youtube.com/channel/UC-V6tMaHcYExkqCy-NWzTxQ/featured')} />
    </div>
    </div>
   );
}
 
export default Contact;