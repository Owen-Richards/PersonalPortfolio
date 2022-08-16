import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";

import "./Experience.scss";

export default function Experience() {
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
      className={cn("experience-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <SectionHeader title="Experience" />
      <div className="about-info">
        <div className="work-experience">
          <h2>DevOps Intern, nCino, May 2022 - Sepember 2022</h2>
          <div className="duties">
            <li> Worked on the DevOps team for the cloud banking company nCino.
              In this internship I worked with product design engineers to indtroduce
              tools and processes into the software development life cycle to produce
              better software.
            </li>
            <li> Though the internship I also helped maintain and update their appliciations.
              One improvement I made was update all their repositorys in AWS CDK v2 to better use the
              AWS Cloud Development Kit framework.
            </li>
            <li> Went through all the repositories and resolved any bandit security threats
              withing the infrastructure.
            </li>
            <li> The internship heavily utilized AWS, Datadog, and python. I created a AWS lambda function
              to handle errors that occur within the code build. I also made a lambda function which used the
              slack API to notify the DevOps team of any errors and provide the execution ID for better ease.
            </li>
            <li>
              Helped resolve deployment pipeline issues of application.
            </li>
            <li>
              Created a new repository for a Product Design team and integrated it with salesforce.
            </li>
            <li>
              Included readme.com CLI commands within the codebuild deplyment pipeline for appliciations
              so that changes or new api and markdown files are added to the developer portal. This helps consolidate
              information for developers to one place.
            </li>
          </div>
        </div>
        <div className="work-experience">
          <h2>Programming Languages for Web Development Teachers Assistant, Universiry of Virginia, March 2022 - June 2022</h2>
          <div className="duties">
            <li> I was the only teachers assistant for Professor Praphamontripong in the Programming Languages for Web Development course.
              The course teaches students a variety of languages that are used in web development along with best practices and UI design.
            </li>
            <li> Some of the languages covered in the course is JavaScript, HTML, CSS, PHP, SQL, SCSS, JSON, XML, LESS, SASS, Markdown, 
            Perl, Ruby, Go, NodeJS. Additionally, students learn about React and Angular and use these in their project.
            </li>
            <li> My duties of the course was to grade all of the students assignments including weekly activities, homeowrk, exams, quizzes
              and the final project. In addition to this I hosted 10 hours of office hours a week where I would help students refine their
              knowledge on these languages, help them with their project and homework assignments if assistance is needed.
            </li>
            <li> The course required a high level of efficency in all the languages to be able to help and teach students about any gaps in
              their knowledge. The final project was a semester long assignment where students were tasked to create a fully functional web
              application where they used PHP and SQL to handle the backend data using a relational database. Also, the frontend must have JavaScript,
              HTML, CSS along with being able to handle JSON data. Finally, there must be a Angular component to the application. There were 
              additional requirements such as a responsive design, UI, GET/POST and other tasks to the assignment.
            </li>
            <li> Thoughout the process, I learnt skills of simplifying and communicating concepts to help students better learn. 
              Also, I worked with the professor to refine the final exam to accurately test the students knowledge.
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}