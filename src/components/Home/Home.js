import classes from './Home.module.css'
import antenna from './../../img/antenna-logo.png'
import desert from './../../img/ut-desert.jpg'

const Home = () => {
  return ( 
    <div className={classes.Home}>
      <div className={classes.Container}>
        <h1 className={classes.Hello}>JOHN WHITTEN</h1>
        <h2>SOFTWARE ENGINEER</h2>
        <p>PROGRESSIVE WEB APPLICATIONS IN REACT, NODEJS, AND MORE...</p>
      </div>
      <img className={classes.Antenna} src={antenna} alt="antenna logo"></img>
      <img className={classes.UtDesert} src={desert} alt="cracked desert floor"></img>
    </div>
   );
}
 
export default Home;