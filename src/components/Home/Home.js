import classes from './Home.module.css'
// import antenna from './../../img/antenna-logo.png'

import Resume from "./../../PDF/John-Whitten_Resume.pdf";


const Home = () => {
  return ( 

    <div className={classes.Home} id="/">
      <div className={classes.Container}>
        <h1 className={classes.Hello}>JOHN WHITTEN</h1>
        <h2>SOFTWARE ENGINEER</h2>
        <p>PROGRESSIVE WEB APPLICATIONS IN REACT, NODEJS, AND MORE...</p>
      </div>
    </div>   

   );
}
 
export default Home;