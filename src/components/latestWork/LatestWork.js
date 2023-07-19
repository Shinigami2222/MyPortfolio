import Card from "../card/Card";
import classes from "./LatestWork.module.css";
import AnimeDBImg from "../../assets/images/AnimeDB.jpg";
import NotesAppImg from "../../assets/images/NotesApp.jpg";
import PortFolioImg from "../../assets/images/Portfolio.jpg";

const projects = [
  {
    projectName: "AnimeDB",
    techList: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Node.js",
      "Redux",
      "API",
      "Express.js",
    ],
    description:
      "This anime project leverages HTML, CSS, JS, React, Node.js, Redux, and an API. It provides a user-friendly interface, search functionality, and detailed anime information like synopsis, genre, episode count, and studio details.",
    img: { AnimeDBImg },
  },
  {
    projectName: "Notes App",
    techList: ["HTML", "CSS", "Javascript", "React.js", "Node.js"],
    description:
      "This app is a frontend clone of Google Keep, built with HTML, CSS, React.js, and Node.js. Users can create/manage notes and customize the theme. It offers an intuitive UI and seamless integration for a personalized note-taking experience.",
    img: { NotesAppImg },
  },
  {
    projectName: "Portfolio Website",
    techList: ["HTML", "CSS", "Javascript", "React.js", "Node.js"],
    description:
      "This project is a visually appealing portfolio website built using React.js. It showcases my skills, experience, and projects, featuring responsive design, interactive elements, and sections like About Me, Skills, Projects, and Contact.",
    img: { PortFolioImg },
  },
];

function LatestWork() {
  return (
    <div className={classes.latestWork} id="latestWork">
      <p className={classes.h2_1}>&lt;h2&gt;</p>
      <h1 className={classes.heading}>Latest Work</h1>
      <p className={classes.h2_2}>&lt;/h2&gt;</p>
      <div className={classes.content}>
        <div className={classes.col1}>
          <a href="https://shinigami2222.github.io/MyPortfolio">
            <Card
              projectName={projects[2].projectName}
              techList={projects[2].techList}
              description={projects[2].description}
              img={PortFolioImg}
            />
          </a>
        </div>
        <div className={classes.col2}>
          <a href="https://shinigami2222.github.io/AnimeDB">
            <Card
              projectName={projects[0].projectName}
              techList={projects[0].techList}
              description={projects[0].description}
              img={AnimeDBImg}
            />
          </a>
          <a href="https://shinigami2222.github.io/NotesApp/">
            <Card
              projectName={projects[1].projectName}
              techList={projects[1].techList}
              description={projects[1].description}
              img={NotesAppImg}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LatestWork;
