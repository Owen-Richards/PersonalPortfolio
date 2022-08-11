import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar/NavBar";
import Loader from "./components/Loader/loader";
import MyComponent from "./components/Background/Background";
import Welcome from "./components/Welcome/Welcome";
import CustomCursor from "./CustomCursor/index";
import "./styles/home.scss";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 4000); 
    // 4000
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
          <MyComponent/>
          <Welcome/>
        </div>
      )}
    </>
  );
};
export default App;