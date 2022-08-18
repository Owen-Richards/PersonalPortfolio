import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";
import "./About.scss";

export default function About() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
      });
    }
  }, [reveal]);

  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <SectionHeader title="about me" />
      <div className="about-info">
          <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
            I am a BS computer science major and business engineer minor student at
            the University of Virginia graduating in 2023. I am currently located in the
            United States; however, interested in working anywhere since I am both a
            citizen of the United States and United Kingdom, living in England for 15 years.
            I am constantly trying to become a better programmer, peer and leader and continuously 
            search for mentors and opportunities to learn. Outside of school, programming and side 
            computer sience projects, I love being outdoors. Often camping on the weekends and going for 
            runs or other outdoor activites when I get the chance. The most valuable softs skills to me is 
            collaboration, creativity and grit.
            <br></br>
            <br></br>
            I am currently looking for a job within software enginneering or a software management 
            role where I can help a team grow and succeed. I am looking for a work culture that values 
            collaboration and creativity with a positive environment that aims for success. I will be 
            finishing my last semester of course work in Fall 2022 and planning to start work in the 
            new year of 2023 in January. Please reach out with any opportunities or questions.
            <br></br>
            <br></br>
          </p>
          <h2>
          I am looking forward to hearing from you!!!
          </h2>
      </div>
    </section>
  );
}