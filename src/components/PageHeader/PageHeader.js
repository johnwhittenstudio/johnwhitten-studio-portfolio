import classes from './PageHeader.module.css'

const PageHeader = (props) => {
  return ( 
    <div className={classes.Container}>
      <div className={classes.HR}><hr /></div>
        <div className={classes.Title}>
          <h1>{props.title}</h1>
        </div>
    </div>
  );

}

export default PageHeader;