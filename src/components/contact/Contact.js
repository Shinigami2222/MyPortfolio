import classes from "./Contact.module.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { useEffect } from "react";

function Contact() {
  const [home, setHome] = useState("Home");
  const [about, setAbout] = useState("About");
  const [skills, setSkills] = useState("Skills");
  const [projects, setProjects] = useState("Projects");
  const [contact, setContact] = useState("< Contact / >");

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
    <div className={classes.contact} id="contact">
      <div className={classes.col1}>
        <div className={classes.sayHi}>
          <p className={classes.make}>Let's make something amazing together.</p>
          <p className={classes.hi_p}>
            Start by{" "}
            <a
              className={classes.hi_span}
              href="mailto:supandeepsingh222@gmail.com"
            >
              Saying Hi
            </a>
          </p>
        </div>
        <div className={classes.copyright}>
          <Link to="home" activeClass="active" spy={true} smooth={true}>
            <p className={classes.name}>
              Supandeep <span>Singh</span>
            </p>
          </Link>

          <p className={classes.rights}>© 2023. All Rights Reserved</p>
        </div>
      </div>
      <div className={classes.col2}>
        <p className={classes.info}>Information</p>
        <p className={classes.address}>
          #694 18 Darshan Nagar, Patiala, Punjab, India
        </p>
        <p className={classes.email}>supandeepsingh222@gmail.com</p>
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
        <a href="https://twitter.com/supandeep2002">
          <img
            className={classes.social}
            src="https://img.icons8.com/color/480/twitter--v1.png"
            alt="twitter--v1"
          />
        </a>
        <a href="https://github.com/Shinigami2222">
          <img
            className={classes.social}
            src="https://img.icons8.com/ios-glyphs/480/github.png"
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/supandeep-singh-a13358194/">
          <img
            className={classes.social}
            src="https://img.icons8.com/fluency/240/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a href="https://www.instagram.com/supandeep.singh.771/">
          <img
            className={classes.social}
            src="https://img.icons8.com/fluency/240/instagram-new.png"
            alt="instagram-new"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
