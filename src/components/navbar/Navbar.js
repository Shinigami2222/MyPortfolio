import { useState } from "react";
import { Link } from "react-scroll";
import { useEffect } from "react";

import classes from "./Navbar.module.css";

function Navbar() {
  const [home, setHome] = useState("< Home / >");
  const [about, setAbout] = useState("About");
  const [skills, setSkills] = useState("Skills");
  const [projects, setProjects] = useState("Projects");
  const [contact, setContact] = useState("Contact");

  const listenScrollEvent = (event) => {
    if (window.scrollY <= 200) {
      setHome("< Home / >");
      setAbout("About");
      setContact("Contact");
      setProjects("Projects");
      setSkills("Skills");
    } else if (window.scrollY > 400 && window.scrollY < 900) {
      setAbout("< About / >");
      setHome("Home");
      setContact("Contact");
      setProjects("Projects");
      setSkills("Skills");
    } else if (window.scrollY > 900 && window.scrollY < 1500) {
      setSkills("< Skills / >");
      setAbout("About");
      setContact("Contact");
      setProjects("Projects");
      setHome("Home");
    } else if (window.scrollY > 1500 && window.scrollY < 2500) {
      setProjects("< Projects / >");
      setAbout("About");
      setContact("Contact");
      setHome("Home");
      setSkills("Skills");
    } else if (window.scrollY > 2500) {
      setContact("< Contact / >");
      setAbout("About");
      setHome("Home");
      setProjects("Projects");
      setSkills("Skills");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={classes.navbar}>
      <Link to="home" activeClass="active" spy={true} smooth={true}>
        <div className={classes.name}>
          <p className={classes.firstName}>Supandeep </p>
          <p className={classes.lastName}>Singh</p>
        </div>
      </Link>

      <div className={classes.options}>
        <Link to="home" activeClass="active" spy={true} smooth={true}>
          <p
            className={classes.option}
            style={{
              color: home === "< Home / >" ? "#64f4ac" : "",
              fontWeight: home === "< Home / >" ? "bold" : "",
            }}
          >
            {home}
          </p>
        </Link>

        <Link to="about" activeClass="active" spy={true} smooth={true}>
          <p
            className={classes.option}
            style={{
              color: about === "< About / >" ? "#64f4ac" : "",
              fontWeight: about === "< About / >" ? "bold" : "",
            }}
          >
            {about}
          </p>
        </Link>

        <Link to="skills" activeClass="active" spy={true} smooth={true}>
          <p
            className={classes.option}
            style={{
              color: skills === "< Skills / >" ? "#64f4ac" : "",
              fontWeight: skills === "< Skills / >" ? "bold" : "",
            }}
          >
            {skills}
          </p>
        </Link>

        <Link to="latestWork" activeClass="active" spy={true} smooth={true}>
          <p
            className={classes.option}
            style={{
              color: projects === "< Projects / >" ? "#64f4ac" : "",
              fontWeight: projects === "< Projects / >" ? "bold" : "",
            }}
          >
            {projects}
          </p>
        </Link>

        <Link to="contact" activeClass="active" spy={true} smooth={true}>
          <p
            className={classes.option}
            style={{
              color: contact === "< Contact / >" ? "#64f4ac" : "",
              fontWeight: contact === "< Contact / >" ? "bold" : "",
            }}
          >
            {contact}
          </p>
        </Link>
      </div>
      <div className={classes.contact}>
        <a
          className={classes.option}
          href="https://www.linkedin.com/in/supandeep-singh-a13358194/"
        >
          LinkedIn
        </a>
        <a className={classes.option} href="https://github.com/Shinigami2222">
          Github
        </a>
        <a className={classes.option} href="mailto:supandeepsingh222@gmail.com">
          Email
        </a>
      </div>
    </div>
  );
}

export default Navbar;
