import classes from './YouTube.module.css'
import PageHeader from './../PageHeader/PageHeader'
import littlePigeon from './../../img/littlePigeon.png'
import mooningNancy from './../../img/mooningNancy.png'
import background from './../../img/ut-desert.jpg'

const playBtnSvg = (url => {
  return (
    <div className={classes.PlayButton}
    onClick={(e) => window.open(url, "_blank").focus}
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
      <path 
      d="M13 17.167c0-6.116 6.584-9.97 11.917-6.975l37.555 21.089c6.805 3.821 6.805 13.617 0 17.438L24.917 69.808C19.584 72.803 13 68.949 13 62.833z"
      fill="white"></path>
    </svg>
    </div>
  )
})


const youtubeVideo = (url, thumbnail, description) => {
  return(
    <div className={classes.VideoContainer}>
      <div className={classes.Thumbnail}>
        {playBtnSvg(url)}
          <img src={thumbnail} alt="thumbnail"></img>
      </div>
      <div className={classes.Text}>
        <p>{description}</p>
      </div>
    </div>
  )
}

const littlePigeonVideoDescription = `Little Pigeon, 2021, Clay, HD Video on tablet with sound, 14 x 12 x 6 inches, Katherine Spinella and John Whitten`;

const mooningNancyVideoDescription = `Mooning Nancy, 2021, HD Video on monitor & spell-casting salt on acrylic, Collaboration among John Whitten, Katherine Spinella, Dr. Jessi DiTillio, and Michael E. Stephen`;

const YouTube = () => {
  return ( 
    <div className={classes.YouTube} id="youtube">
      <img className={classes.Background} src={background} alt="background image"/>
      <PageHeader title={"Find me on YouTube"} />
      <div className={classes.YouTubeContent}>
        <div className={classes.Paragraph}>
          <p>
            On my channel you will find videos from my studio art practice.
          </p>
        </div>
        <div className={classes.Videos}>
          {youtubeVideo("https://www.youtube.com/watch?v=xSSyWCnXYGs", littlePigeon, littlePigeonVideoDescription )}
          {youtubeVideo("https://www.youtube.com/watch?v=kkc1VzzU8Os&t=3s", mooningNancy, mooningNancyVideoDescription )}
        </div>
      </div>
    </div>
  );
}

export default YouTube;