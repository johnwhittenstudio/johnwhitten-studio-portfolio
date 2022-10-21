import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/headshot.jpg'

const About = () => {
  return ( 
    <div className={classes.AboutMe} id="about">
      <PageHeader title={'About Me'}/>
      <div className={classes.Container}>
        <div className={classes.Text}>
            <p>
            Hello, My name is John Whitten. I am a JavaScript, React.js, and WordPress developer. I particularly enjoy front end work. As a full stack developer, I am comfortable with working at all levels of the development process; from wire-framing and implementing a design system to integrating a back end and database. Beautiful and responsive UI, as well as clean, maintainable, and accessible code are important to me. 
            <br></br>
            I thrive in a team that values collaborative problem solving, sophisticated design, and quality work. I am a veresatile developer who adapts to new challanges, technologies, and methodolgies. I am comfortable using a variety of technologies such as Typescript, ReactJS, NodeJs, MaterialUI, PHP, and numerous others. Please visit my <a href="https://github.com/johnwhittenstudio">GitHub</a>, give me a star, explore, and enjoy...
            </p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={me} alt="me"></img>
        </div>
      </div>
    </div>
  );
}

export default About;