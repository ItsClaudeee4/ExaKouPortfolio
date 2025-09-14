import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main.jsx";
import { Element } from "react-scroll";
import OrangeCursor from "./components/OrangeCursor";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Comments from "./components/Comments.jsx";
import NextProject from "./components/NextProject.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <OrangeCursor />
      <header>
        {" "}
        <Navbar />
      </header>

      <Element id="home" name="home" className="section">
        <Main />
      </Element>
      <Element id="project" name="project" className="section">
        <Projects />
      </Element>
      <Element id="skills" name="skills" className="section">
        <Skills />
      </Element>
      <Element id="about" name="about" className="section">
        <About />
      </Element>
      <Element id="comment" name="comment" className="section">
        <Comments />
      </Element>
      <Element id="NextProject" name="NextProject" className="section">
        <NextProject />
      </Element>
      <Element id="contact" name="contact" className="section">
        <Contact />
      </Element>
      <Element id="footer" name="footer" className="section">
        <Footer />
      </Element>
    </>
  );
}

export default App;
