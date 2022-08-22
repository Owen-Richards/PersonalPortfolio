import React, { useState, useEffect } from "react";
import Loader from "./components/Loader/loader";
import Background from "./components/Background/Background";
import CustomCursor from "./CustomCursor/index";
import "./styles/home.scss";
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Accomplishments from './components/Accomplishments/accomplishments';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2500); 
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      {
      !loaded ? (
        <Loader />
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
        >
          <Background/>
          <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="about">
        <About />
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="skill">
        <Skills />
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="project">
        <Project />
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="experience">
        <Experience />
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="achievements">
        <Accomplishments />
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="contact">
        <Contact />
      </section>
        </div>
      )}
    </>
  );
};
export default App;