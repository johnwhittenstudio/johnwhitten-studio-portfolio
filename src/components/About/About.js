import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/headshot.jpg'

const About = () => {
  return ( 
    <div className={classes.AboutMe} id="about">
      <PageHeader title={'About Me'}/>
      <div className={classes.Container}>
        <div className={classes.Text}>
            {/* <p>
            Hello, My name is John Whitten. I am a JavaScript, React.js, and WordPress developer. I particularly enjoy front end work. As a full stack developer, I am comfortable with working at all levels of the development process; from wire-framing and implementing a design system to integrating a back end and database. Beautiful and responsive UI, as well as clean, maintainable, and accessible code are important to me. 
            <br></br>
            I thrive in a team that values collaborative problem solving, sophisticated design, and quality work. I am a veresatile developer who adapts to new challanges, technologies, and methodolgies. I am comfortable using a variety of technologies such as Typescript, ReactJS, NodeJs, MaterialUI, PHP, and numerous others. Please visit my <a href="https://github.com/johnwhittenstudio">GitHub</a>, give me a star, explore, and enjoy...
            </p> */}
            <p>
            Hi! I am a full-stack web and mobile developer with expertise in JavaScript, CSS, React.js, WordPress, and C#. I am skilled in front-end development and comfortable working at all levels of the development process, from wireframing and design system implementation to integrating back-end systems and databases. I value creating beautiful, responsive UI and clean, maintainable, and accessible code. I enjoy working in a team that values collaborative problem-solving, sophisticated design, and high-quality work. I am adaptable and comfortable using a variety of technologies such as Typescript, ReactJS, NodeJS, MaterialUI, PHP, and more. My portfolio and <a href="https://github.com/johnwhittenstudio">GitHub</a> profile showcase my work. 
            <br/>
            In addition to my technical skills, I am passionate about building meaningful connections in my community through my work as a developer, creative, educator, and art gallery co-founder. I excel at problem-solving and creating visually compelling results, using my deep skillset in both digital and analog art practices. I am dedicated and detail-oriented, with over 10 years of experience in visual design, higher education, and community-based collaborative projects. I follow a client-centered approach, always leading with empathy, listening patiently, communicating clearly, and welcoming feedback to ensure the best possible results for my clients.
            </p>
        </div>
        {/* <div className={classes.Photo}>
          <img className={classes.Me} src={me} alt="me"></img>
        </div> */}
      </div>
    </div>
  );
}

export default About;