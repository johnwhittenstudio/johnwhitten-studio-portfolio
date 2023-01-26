import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'

// const backendSkills =
// <ul>
//   <li>BACKEND</li>
//   <li>C# - Java - SQL</li>
// </ul>

// const frontendSkills =
// <ul>
//   <li>FRONTEND</li>
//   <li>ReactJS - HTML - CSS - Redux</li> 
// </ul>

const Skills = () => {
  return ( 
    <div className={classes.Skills} id="skills">
      <PageHeader title={'Skills'}/>
      <br/>
      <hr className={classes.SkillsHr} color="grey"/>
      <div className={classes.Container}>
      {/* <h2><strong>What I can bring to your team</strong></h2> */}
        <div className={classes.Skill}>
          <h2>HTML</h2>
          <p>2 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>CSS</h2>
          <p>2 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>Javascript</h2>
          <p>2 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>Accessibility</h2>
          <p>5 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>React</h2>
          <p>2 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>WordPress</h2>
          <p>1 Year Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>PHP</h2>
          <p>1 Year Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>C#</h2>
          <p>2 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>.NET</h2>
          <p>2 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>SQL</h2>
          <p>2 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>CMS</h2>
          <p>10 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>Photoshop</h2>
          <p>14 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>Premiere</h2>
          <p>10 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>InDesign</h2>
          <p>8 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>Illustrator</h2>
          <p>4 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>Lightroom</h2>
          <p>5 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>AfterEffects</h2>
          <p>2 Years Experience</p>
        </div>
        <div className={classes.Skill}>
          <h2>Audition</h2>
          <p>4 Years Experience</p>
        </div>
      </div>
      <hr className={classes.SkillsHr} color="grey"/>
    </div>
  );
}

export default Skills;