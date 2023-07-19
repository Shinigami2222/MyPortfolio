import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.card}>
      <img className={classes.projectImg} src={props.img} alt="jekjefvnkejn" />
      <div className={classes.content}>
        <p className={classes.projectName}>{props.projectName}</p>
        <ul className={classes.techList}>
          {props.techList.map((tech) => {
            return <li className={classes.tech}>{tech}</li>;
          })}
        </ul>
        <p className={classes.description}>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
