import "./style.scss";
import { init } from "ityped";
import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import cn from "classnames";


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Computer Science Major", "Database Teachers Assistant", "Web Developer", "DevOps Intern", "Software Developer Essentails Teachers Assistant"],
    });
  }, []);

  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      });
      // const splitParent = new SplitText("#location-text", {
      //   type: "lines",
      //   linesClass: "lineParent",
      // });
      gsap.fromTo(
        split.lines,
        { y: 0 },
        {
          duration: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);

  return (
    <section data-scroll-section>
      <h1
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
        ref={ref}
      >
        <div className="intro" id="intro">
          <div className="right">
            <div className="wrapper">
              <h2>Hello, I am</h2>
              <h1>Owen Richards</h1>
              <h3>
                I'm a <span ref={textRef}></span>
              </h3>
              <p>Scroll Down to see more</p>
            </div>
          </div>
        </div>
      </h1>
    </section>
  );
}