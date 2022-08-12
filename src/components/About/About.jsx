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
        y: -40,
        opacity: 1,
        stagger: 0.3,
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
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        I am a BS computer science major and business engineer minor student at
        the University of Virginia graduating in 2023. Currently located in the 
        United States; however, interested in working anywhere since I am both a
        citizen of the United States and United Kingdom, living in England for 15 years.
        A strong work ethic, grit and creativity are the most important soft skills to have.
        I placed first in England nationals for cross country, second in British schools rowing
        championship, winning multiple state running titles.
      </p>
    </section>
  );
}