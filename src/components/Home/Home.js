import classes from './Home.module.css'
import { SiCss3, SiHtml5, SiJavascript, SiTypescript, SiReact, SiCsharp } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { FaGitAlt, FaPhp } from "react-icons/fa";
import { GrWordpress } from "react-icons/gr";
import Resume from "./../../PDF/John-Whitten_Resume.pdf";



const Home = () => {
  return ( 

    <div className={classes.Home} id="/">
      <div className={classes.Container}>
        <h1 className={classes.Hello}>JOHN WHITTEN</h1>
        <h2>SOFTWARE ENGINEER</h2>
        <p>PROGRESSIVE WEB APPLICATIONS IN REACT, WORDPRESS, AND MORE...</p>
        <br/>
        <div className={classes.Row}>
          <div className={classes.Column}>
            <div className={classes.Icons}>
              <div className={classes.Icon}><SiHtml5 color="4de29d" size='50px' style={{paddingRight: '5%'}} /></div>
              <div className={classes.Icon}><SiCss3 color="4de29d" size='50px' style={{paddingRight: '5%'}} /></div>
              <div className={classes.Icon}><SiJavascript color="4de29d" size='50px' style={{paddingRight: '5%'}} /></div>
              <div className={classes.Icon}><SiTypescript color="4de29d" size='50px' style={{paddingRight: '5%'}} /></div>
              <div className={classes.Icon}><IoLogoNodejs color="4de29d" size='60px' style={{paddingRight: '5%'}} /></div>
              <div className={classes.Icon}><SiReact color="4de29d" size='55px' style={{paddingRight: '5%'}} /></div>
              <div className={classes.Icon}><GrWordpress color="4de29d" size='55px' style={{paddingRight: '5%'}} /></div>
              <div className={classes.Icon}><FaPhp color="4de29d" size='75px' style={{paddingRight: '5%'}} /></div>
              <div className={classes.Icon}><SiCsharp color="4de29d" size='55px' style={{paddingRight: '5%'}} /></div>
              <div className={classes.Icon}><FaGitAlt color="4de29d" size='55px' style={{paddingRight: '5%'}} /></div>
            </div>
          </div>
        </div>

        <h3>
          <a className={classes.Resume} href={Resume} target="blank">
            DOWNLOAD RESUME
          </a>
        </h3>

      </div>
    </div>   

  );
}

export default Home;