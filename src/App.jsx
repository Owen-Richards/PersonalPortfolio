import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import About from "./components/About/index";
// import Featured from "./components/Featured/index";
import Footer from "./components/Footer/index";
import Gallery from "./components/Gallery/index";
import Header from "./components/Header/index";
import Navbar from "./components/Navbar/index";
import CustomCursor from "./CustomCursor/index";

import useLocoScroll from "./hooks/useLocoScroll";

import "./styles/home.scss";

const App = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Owen Richards</h1>
          <h2>BS Computer Scince</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Navbar />
          <Header />
          {/* <Featured /> */}
          <About />
          {/* <Gallery /> */}
          <Footer />
        </div>
      )}
    </>
  );
};
export default App;