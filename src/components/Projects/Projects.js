import classes from './Projects.module.css'
import PageHeader from './../PageHeader/PageHeader'
import thunderstruck from './../../img/thunderstruck.png'
import taproom from './../../img/taproom.png'
import spaceage from './../../img/spaceage.png'
import nasaApi from './../../img/nasa-api.png'

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


const portfolioImage = (url, thumbnail, title, description, github, livesite ) => {
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
        <div className={classes.LinkContainer} >
          <a href={github}><p>View on GitHub</p></a>
          <hr color="c5d248"></hr>
          <a href={livesite}><p>View Live Site</p></a>
        </div>
        <br></br>
        <hr color="c5d248"></hr>
      </div>
    </div>
  )
}

// thunderstruck
const thunderstruckTitle = `Thunderstruck`;
const thunderstruckImageDescription = `React website with interactive components for an artist collective.`;
const thunderstruckGitHub = `https://github.com/johnwhittenstudio/thunderstruck`;
const thunderstruckLiveSite = `https://thunderstruckcollective.com`;

// michelob angelos taproom
const maTaproomTitle = `Michelob Angelo's Pietàproom`;
const maTaproomImageDescription = `React website with full CRUD capability for a fictitious tap room.`;
const maTaproomGitHub = `https://github.com/johnwhittenstudio/tap-room`;
const maTaproomLiveSite = `https://johnwhittenstudio.github.io/tap-room/`;

// space age calculalor
const spaceAgeTitle = `Space Age Calculator`;
const spaceAgeImageDescription = `Javascript/HTML/CSS web app that calculates age and life expectancy on different planets.`;
const spaceAgeGitHub = `https://github.com/johnwhittenstudio/project-5`;
const spaceAgeLiveSite = `https://johnwhittenstudio.github.io/project-5/`;

// nasa api
const nasaApiTitle = `NASA Photo of the Day API`;
const nasaApiImageDescription = `Javascript/HTML/CSS web app that uses NASA Photo of the Day API.`;
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
          {portfolioImage("https://github.com/johnwhittenstudio/thunderstruck", thunderstruck, thunderstruckTitle, thunderstruckImageDescription, thunderstruckGitHub, thunderstruckLiveSite )}
          {portfolioImage("https://johnwhittenstudio.github.io/tap-room/", taproom, maTaproomTitle, maTaproomImageDescription, maTaproomGitHub, maTaproomLiveSite )}
          {portfolioImage("https://johnwhittenstudio.github.io/tap-room/", spaceage, spaceAgeTitle, spaceAgeImageDescription, spaceAgeGitHub, spaceAgeLiveSite )}
          {portfolioImage("https://johnwhittenstudio.github.io/nasa_api/", nasaApi, nasaApiTitle, nasaApiImageDescription, nasaApiGitHub, nasaApiLiveSite )}
        </div>
      </div>
    </div>
  );
}

export default Projects;