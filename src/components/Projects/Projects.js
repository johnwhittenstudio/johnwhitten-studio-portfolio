import classes from './Projects.module.css'
import PageHeader from './../PageHeader/PageHeader'
import thunderstruck from './../../img/thunderstruck.png'
import taproom from './../../img/taproom.png'
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


const portfolioImage = (url, thumbnail, description) => {
  return(
    <div className={classes.ImageContainer}>
      <div className={classes.Thumbnail} onClick={handleURL(url)}>
        {/* {playBtnSvg(url)} */}
        
          <img src={thumbnail} alt="thumbnail" ></img>
          
      </div>
      <div className={classes.Text}>
        <p>{description}</p>
      </div>
    </div>
  )
}

const thunderstruckImageDescription = `React website with interactive components for an artist residency called Thunderstruck Collective.`;

const taproomImageDescription = `React website with full CRUD capability for a fictitious tap room called Michelob Angelo's Pietàproom.`;

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
          {portfolioImage("https://www.johnwhitten.com/", thunderstruck, thunderstruckImageDescription )}
          {portfolioImage("https://johnwhittenstudio.github.io/tap-room/", taproom, taproomImageDescription )}
        </div>
      </div>
    </div>
  );
}

export default Projects;