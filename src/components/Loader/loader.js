import React from "react";
import { GooeyCircleLoader } from "react-loaders-kit";
import Typed from "react-typed";
import "./loader.css";

function Loader() {

  const loaderProps = {
    loading: true,
    size: 275,
    duration: 3,
    colors: ["#99fffe", "#f4e400", "#36c27a"],
  };

  return (
    <div className="loader">
        <GooeyCircleLoader {...loaderProps} />
        <p> Owen Richards </p>
        <Typed
          className="loader-text"
          strings={["BS Computer Science"]}
          typeSpeed={60}
          backSpeed={0}
        />
    </div>
  );
}

export default Loader;