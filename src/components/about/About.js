import dpImg from "../../assets/images/dp.jpg";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.about} id="about">
      <p className={classes.h2_1}>&lt;h2&gt;</p>
      <h1 className={classes.heading}>About</h1>
      <p className={classes.h2_2}>&lt;/h2&gt;</p>
      <div className={classes.aboutContent}>
        <img src={dpImg} alt="dpImg" className={classes.dpImg} />
        <div className={classes.intro}>
          <p className={classes.hello}>Hello! I'm Supandeep Singh</p>
          <p className={classes.quote}>
            Every great code beign with an even better story
          </p>
          <p className={classes.data}>
            During my Software Development Internship at DMI Finance, I honed my
            skills in Apex, Salesforce's programming language. I successfully
            implemented validation rules and workflows, enhancing the software's
            functionality. Additionally, I excelled in coding competitions,
            achieving top ratings on platforms like CodeChef and Codeforces. I
            showcased my web development expertise through projects like AnimeDB
            and the Notes Keepr App, utilizing HTML, CSS, JavaScript, React.js,
            Redux, and Node.js. With proficiency in languages such as C, C++,
            HTML, CSS, JavaScript, Apex, and experience with Redux, I'm eager to
            contribute my skills to new opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
