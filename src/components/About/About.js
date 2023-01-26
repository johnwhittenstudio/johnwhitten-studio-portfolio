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
            <div className={classes.ParagraphOne}>
              <p>
              Based in Portland, Oregon, I'm a front-end developer passionate about building accessible web apps that users love.
              <br></br>
              <br></br>
              I have a background in Art and Design, 10 years of experience in higher education teaching complex software to beginner and upper-level learners, and a wide range of technical software development skills using a variety of tech stacks.
              <br></br>
              <br></br>
              I believe that collaboration is crucial for building high-quality products and fostering a positive work culture. I am a dedicated, detail-oriented, kind-hearted, and easy-going teammate who can work efficiently and effectively under tight deadlines with folks from all backgrounds. I lead with empathy, listen patiently, and welcome feedback in order to deliver the best results for my clients.
              </p>
            </div>
            <hr></hr>
            <div className={classes.ParagraphTwo}>
              <p>
              Based in Portland, Oregon, I'm a front-end developer passionate about building accessible web apps that users love.
              </p>
            </div>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={me} alt="me"></img>
        </div>
      </div>
    </div>
  );
}

export default About;