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
      <div className={classes.Container}>
      <h2><strong>What I can bring to your team</strong></h2>
      <hr className="skillsHr"/>
        <p>
          • Developing the latest user-facing features using React.js
          <br/>
          • Designing a modern highly responsive web-based user interface
          <br/>
          • Building reusable components and front-end libraries for future use
          <br/>
          • Translating designs and wireframes into high-quality code
          <br/>
          • Learn and understand user interactions
          <br/>
          • Optimizing components for maximum performance across a vast array of web-capable devices and browsers
          <br/>
          • Coordinating with various teams working on distinct layers
          <br/>
          • Full involvement from conception to completion with projects that are technologically sound and aesthetically impressive
          <br/>
          • Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model
          <br/>
          • Thorough understanding of React.js and its core principles
          <br/>
          • Prior experience with popular React.js workflows (such as Flux or Redux)
          <br/>
          • Familiarity with more current specifications of EcmaScript
          <br/>
          • Familiarity with RESTful APIs
          <br/>
          • Familiarity with HTML / CSS
          <br/>
          • GIT experience, Team work-flows, and remote coordination
          <br/>
          • Knowledge of modern authorization mechanisms, such as JSON Web Token
          <br/>
          • Familiarity with modern front-end build pipelines and tools
          <br/>
          • Experience with common front-end development tools such as Babel, Webpack, NPM, etc.
          <br/>
          • Ability to understand business requirements and translate them into technical requirements
        </p>
      </div>
    </div>
  );
}

export default Skills;