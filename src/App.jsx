import React, { useState, useEffect } from "react";
import Loader from "./components/Loader/loader";
import Background from "./components/Background/Background";
import CustomCursor from "./CustomCursor/index";
import "./styles/home.scss";

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
        </div>
      )}
    </>
  );
};
export default App;