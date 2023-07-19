import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home} id="home">
      <div>
        <p className={classes.p}>
          &lt;p&gt;<span>This is</span>&lt;/p&gt;
        </p>
        <p className={classes.h1}>&lt;h1&gt;</p>
        <h1 className={classes.name}>Supandeep</h1>
        <h1 className={classes.name}>Singh</h1>
        <p className={classes.h1}>&lt;/h1&gt;</p>
        <p className={classes.p}>
          &lt;p&gt;<span>Full Stack Developer and Competitive Programmer</span>
          &lt;/p&gt;
        </p>
      </div>
      <a href="https://drive.google.com/file/d/1kzCad2vvs64johmWBF7gOsmDA5OC_Tq0/view">
        <button className={classes.resume}>&lt; Resume / &gt;</button>
      </a>
      <div className={classes.circle}></div>
    </div>
  );
}

export default Home;
