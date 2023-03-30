import classes from './Projects.module.css'
import PageHeader from './../PageHeader/PageHeader'
import digitalart from './../../img/core-digitalart.png'
import thunderstruck from './../../img/thunderstruck.png'
import taproom from './../../img/taproom.png'
import artportfolio from './../../img/art-portfolio.png'
import spaceage from './../../img/spaceage.png'
import nasaApi from './../../img/nasa-api.png'
import campy from './../../img/campy.gif'

// import { FaGithub } from "react-icons/fa";
// import background from './../../img/ut-desert.jpg'

// const playBtnSvg = (url => {
//   return (
//     <div className={classes.PlayButton}
//     onClick={(e) => window.open(url, "_blank").focus}
//     >
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
//       <path 
//       d="M13 17.167c0-6.116 6.584-9.97 11.917-6.975l37.555 21.089c6.805 3.821 6.805 13.617 0 17.438L24.917 69.808C19.584 72.803 13 68.949 13 62.833z"
//       fill="white"></path>
//     </svg>
//     </div>
//   )
// })

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}


const portfolioImage = (url, thumbnail, title, description, tech, github, livesite ) => {
  return(
    <div className={classes.ImageContainer}>
      <div className={classes.Thumbnail} onClick={handleURL(url)}>
        {/* {playBtnSvg(url)} */}
        
          <img src={thumbnail} alt="thumbnail" ></img>
          
      </div>
      <div className={classes.Text}>
        <h2><i>{title}</i></h2>
        <br></br>
        <p>{description}</p>        
        <br></br>
        <p>{tech}</p>
        <br></br>
        <div className={classes.LinkContainer} >
          <div className={classes.Button}><a href={livesite}><p>View Project</p></a></div>
          <span>&nbsp;&nbsp;</span>
          <hr color="4de29d"></hr>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <hr color="4de29d"></hr>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <hr color="4de29d"></hr>
          <span>&nbsp;&nbsp;</span>
          <div className={classes.Button}><a href={github}><p>View Code</p></a></div>
        </div>
        <br></br>
        {/* <hr className={classes.Hr} color="4de29d"></hr> */}
      </div>
    </div>
  )
}

// core: digital art
const coreDigitalTitle = `Core: Digital Studio`;
const coreDigitalImageDescription = `Student learning supplement website for college-level digital art course.`;
const coreDigitalTech = `WordPress • • • PHP • • • JavaScript • • • CSS`;
const coreDigitalGitHub = `https://github.com/johnwhittenstudio/core-digital-studio`;
const coreDigitalLiveSite = `https://dll.qxo.mybluehost.me/`;

// thunderstruck
const thunderstruckTitle = `Thunderstruck`;
const thunderstruckImageDescription = `Portfolio website with interactive components for an artist collective.`;
const thunderstruckTech = `React • • • MaterialUI • • • CSS`;
const thunderstruckGitHub = `https://github.com/johnwhittenstudio/thunderstruck`;
const thunderstruckLiveSite = `https://thunderstruckcollective.com`;

// michelob angelos taproom
const maTaproomTitle = `Michelob Angelo's Pietàproom`;
const maTaproomImageDescription = `Vendor App with full CRUD capability for a fictitious tap room.`;
const maTaproomTech = `React • • • Bootstrap • • • CSS`;
const maTaproomGitHub = `https://github.com/johnwhittenstudio/tap-room`;
const maTaproomLiveSite = `https://johnwhittenstudio.github.io/tap-room/`;

// studio art portfolio
const artPortfolioTitle = `Studio Art Portfolio`;
const artPortfolioImageDescription = `Studio art portfolio site built using CMS.`;
const artPortfolioTech = `Squarespace`;
const artPortfolioLiveSite = `https://www.johnwhitten.com/`;

// campy
const campyTitle = `Campy: Camping Planner App`;
const campyImageDescription = `Web app that helps someone plan a camping trip.`;
const campyTech = `JavaScript • • • HTML5 • • • CSS • • • API`;
const campyGitHub = `https://github.com/johnwhittenstudio/campy`;
const campyLiveSite = `https://campy-app.netlify.app/index.html`;

// space age calculalor
const spaceAgeTitle = `Space Age Calculator`;
const spaceAgeImageDescription = `Web app that calculates age and life expectancy on different planets.`;
const spaceAgeTech = `JavaScript • • • HTML5 • • • CSS`;
const spaceAgeGitHub = `https://github.com/johnwhittenstudio/project-5`;
const spaceAgeLiveSite = `https://johnwhittenstudio.github.io/project-5/`;

// nasa api
const nasaApiTitle = `NASA Photo of the Day API`;
const nasaApiImageDescription = `Web app that uses NASA Photo of the Day API.`;
const nasaApiTech = `JavaScript • • • HTML5 • • • CSS • • • API`;
const nasaApiGitHub = `https://johnwhittenstudio.github.io/nasa_api/`;
const nasaApiLiveSite = `https://johnwhittenstudio.github.io/nasa_api/`;


const Projects = () => {
  return ( 
    <div className={classes.Projects} id="projects">
      {/* <img className={classes.Background} src={background} alt="background image"/> */}
      <PageHeader title={"Projects"} />
      <div className={classes.ProjectsContent}>
        <div className={classes.Paragraph}>
          {/* <p>
            Here are some of my projects.
          </p> */}
        </div>
        <div className={classes.Images}>
          {portfolioImage("https://dll.qxo.mybluehost.me", digitalart, coreDigitalTitle, coreDigitalImageDescription, coreDigitalTech, coreDigitalGitHub, coreDigitalLiveSite )}
          {portfolioImage("https://thunderstruckcollective.com/", thunderstruck, thunderstruckTitle, thunderstruckImageDescription, thunderstruckTech, thunderstruckGitHub, thunderstruckLiveSite )}
          {portfolioImage("https://johnwhittenstudio.github.io/tap-room/", taproom, maTaproomTitle, maTaproomImageDescription, maTaproomTech, maTaproomGitHub, maTaproomLiveSite )}
          {portfolioImage("https://www.johnwhitten.com/", artportfolio, artPortfolioTitle, artPortfolioImageDescription, artPortfolioTech, artPortfolioLiveSite )}
          {portfolioImage("https://campy-app.netlify.app/index.html/", campy, campyTitle, campyImageDescription, campyTech, campyGitHub, campyLiveSite )}
          {portfolioImage("https://johnwhittenstudio.github.io/project-5/", spaceage, spaceAgeTitle, spaceAgeImageDescription, spaceAgeTech, spaceAgeGitHub, spaceAgeLiveSite )}
          {portfolioImage("https://johnwhittenstudio.github.io/nasa_api/", nasaApi, nasaApiTitle, nasaApiImageDescription, nasaApiTech, nasaApiGitHub, nasaApiLiveSite )}
        </div>
      </div>
    </div>
  );
}

export default Projects;