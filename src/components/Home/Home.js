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
        <p>PROGRESSIVE WEB APPLICATIONS IN REACT, NODEJS, AND MORE...</p>
        <br/>
        <div className={classes.Row}>
          <div className={classes.Column}>
            <div className={classes.Icons}>
              <SiHtml5 color="c5d248" size='50px' style={{paddingRight: '5%'}} />
              <SiCss3 color="c5d248" size='50px' style={{paddingRight: '5%'}} />
              <SiJavascript color="c5d248" size='50px' style={{paddingRight: '5%'}} />
              <SiTypescript color="c5d248" size='50px' style={{paddingRight: '5%'}} />
              <IoLogoNodejs color="c5d248" size='60px' style={{paddingRight: '5%'}} />
              <SiReact color="c5d248" size='55px' style={{paddingRight: '5%'}} />
              <GrWordpress color="c5d248" size='55px' style={{paddingRight: '5%'}} />
              <FaPhp color="c5d248" size='75px' style={{paddingRight: '5%'}} />
              <SiCsharp color="c5d248" size='55px' style={{paddingRight: '5%'}} />
              <FaGitAlt color="c5d248" size='55px' style={{paddingRight: '5%'}} />
            </div>
          </div>
        </div>

        <h3>
          <a className={classes.Resume} style={{
            color: 'white',
            textDecoration: 'none',
            border: '1px solid #c5d248',
            padding: '.5rem',
            marginTop: '2rem',
          }}
            href={Resume} target="blank">
            DOWNLOAD RESUME
          </a>
        </h3>

      </div>
    </div>   

  );
}

export default Home;