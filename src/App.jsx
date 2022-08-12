import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar/NavBar";
import Loader from "./components/Loader/loader";
import Background from "./components/Background/Background";
import CustomCursor from "./CustomCursor/index";
import "./styles/home.scss";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 4000); 
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
          <NavBar />
          <Background/>
        </div>
      )}
    </>
  );
};
export default App;