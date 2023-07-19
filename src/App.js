import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import LatestWork from "./components/latestWork/LatestWork";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <LatestWork />
      <Contact />
    </div>
  );
}

export default App;
