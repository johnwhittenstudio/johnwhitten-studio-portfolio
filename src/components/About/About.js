import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/headshot.jpg'

const About = () => {
  return ( 
    <div className={classes.AboutMe} id="about">
      <PageHeader title={'About Me'}/>
      <div className={classes.Container}>
        <div className={classes.Text}>
          {/* <h2>Hello! I'm John</h2> */}
          {/* <p>
            Full Stack Software Engineer • Designer • Educator • Creative
          </p> */}
          <br/>
          <p>
          Hello, My name is John Whitten. <br/>
          I am a JavaScript and React.js developer. I particulary enjoy front end work. As a full stack developer, I am comfortable with working at all levels of the development process; from wireframing and implementing a design system, to integrating a back end and database. Beautiful and responsive UI, as well as clean, maintainable, and accessible code are important to me. <br/> 
          I thrive in a team that values collaborative problem solving, sophisticated design, and quality work. I am a veresatile developer who adapts to new challanges ,technologies, and methodolgies. This project was built using a variety of technologies. Typescript, ReactJS, NodeJs, MaterialUI, GraphQL, and numerous others. Please visit my <a href="https://github.com/johnwhittenstudio">GitHub</a>, Give me a star, explore, and enjoy...
          <br/>
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