import "./style.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Computer Science Major", "Database Teachers Assistant", "Web Developer", "DevOps Intern", "Software Developer Essentails Teachers Assistant"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I am</h2>
          <h1>Owen Richards</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}