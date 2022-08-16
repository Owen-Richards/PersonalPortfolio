import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";
import "./Skills.scss";
import IconCloud from "../iconCloud/iconcloud";

export default function Skills() {
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
      className={cn("skill-section")}
    >
      <SectionHeader title="skills" />
      <div className="skill-container">
        <div className="text">
          <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
            Through internships, research postions, teachers assistant jobs and computer science coursework, 
            I have been fortunate to work with a plethora of languages, softwares and IT services. In my internship
            with the cloud banking company nCino, I was a part of the DevOps team where I used AWS cloud, Datadog, Orca security,
            Microsoft Azure, Docker, Python, Typescript, Apex, GitHub, NPM, Prettier, Homebrew as well as multiple CLI tools which as mircoplane.
            Though this experience I was able to learn a lot about DevOps along with practice knowledge of multiple skills. Currently, I 
            am practicing for the AWS DevOps Engineer certification and writing a technical research paper on cloud infrastruture. Through 
            my research postions, I have used GPU virtual machines and python to run machine learning algorithms. Additional, though my research
            in creating an app for a UVA medical professor, I refined my react, javascript, css, html, typescript and GitHub skills. My teachers 
            assistant roles have been on web development, databases and software developer essentials. Through this I have taught students Javascript,
            Angular, PHP, SQL, MySQL, relational database, html, css, scss, JSON, XML, Java, Heroku, Travis CI along with Design patterns, UML diagrams 
            and other fundamental concepts and algorithms. Finally, I have had the honor to learn from fantastic professors where I have done coursework 
            in embedded circuits, algorithms, data structures, computer achitecture, machine learning, software development and more. This coursework 
            has provided me experience with laguages and software like C, C++, Python, Java, x86 Assembly, C#, .NET, JSON, linus, Heroku, Bootstrap, etc. 
            I hope to continue to learn from my peers as there is still a lot to learn, but hope that my experience with this tools help my teams to grow and 
            succeed.
          </p>
        </div>
        <IconCloud />
      </div>
    </section>
  );
}