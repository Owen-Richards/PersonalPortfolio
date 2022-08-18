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
          <h2>Software Development Essentials Teachers Assistant, University of Virginia, August 2022 - December 2022</h2>
          <div className="duties">
            <li> The course covers introductory topics in testing, 
              software design principles, design patterns, 
              functional programming, and data storage and manipulation.
            </li>
            <li> The technologies used in this position are Java, IntelliJ, git, gradle, 
              JavaFX Scenebuilder, SQLite3 and SQLite Studio. As a teachers assistant, I 
              am expected to have a in-depth knowledge of these tools so that I can help 
              students learn these softwares.
            </li>
            <li> The course builds on fundamental knowledge such as variables, functions, conditionals and loops. 
              Along with this, students are expects to come in understanding object oriented programming, polymorphism, 
              and common data structure with emphasis on ArrayList, HashMap, HashSet and TreeSet.
            </li>
            <li>
              This position has strengthened my knowlegde in these fundamental topics and aided me in 
              learning how to simple present new knowledge that is understandable to students of all levels.
            </li>
            <li>
              Being a TA for this SDE course strengthed my foundational knowledge.
            </li>
          </div>
        </div>
        <div className="work-experience">
          <h2>Database Systems Teachers Assistant, University of Virginia, August 2022 - December 2022</h2>
          <div className="duties">
            <li> The course focuses on five main concepts: Database Design, Query Languages, 
              Database System Implementation, Database Interfacing, Database Types.
            </li>
            <li>
              Databases are the heart of any data-driven software application. By being a 
              TA for this course I have reinforced my knowledge on database systems to understand 
              best design and implimentation practices when building these apps.
            </li>
            <li>
              The course also teaches students in students PHP, HTML, CSS and SQL. Additionally, 
              as a TA, I am expected to know google cloud to help students host websites on the google cloud. 
              This is on top of the concepts that are taught though the course.
            </li>
            <li>
              The course has a semester long project where students are expected to design and 
              impliment a database in a webapp or software that they create. The students are in cohorts of 
              3-5 students. In my role I oversee the teams and check up on their progress along with having office hours 
              where I help them in areas of trouble. The course taught me the skills of management and overseeing projects 
              as I kept track of multiple teams progress at once.
            </li>
          </div>
        </div>
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
        <div className="work-experience">
          <h2>Cloud-based Patient Outcome Platform Research Assistant, University of Virginia, December 2021 - May 2022</h2>
          <div className="duties">
            <li> 
              The research position was within the Pervasive Communications Labortory at the University of Virginia. 
              The research was a part of a NIH grant proposal being made in partnership with Emory and Harvard Univesity.
              UVA's role in the CPOP project was consisting with API and data services. I worked in a 
              team of UVA graduate students and reported to a masters student, Zhengkun Xiao.
            </li>
            <li>
              My first assignment was using npm, Javasript, HTML and CSS to create the UI for the patient survey. 
              The survey was for patients to feel in data for doctors to refernece. The information requested was 
              on generic health questions such as gender, weight, pre-existing conditions, current medication, etc.
            </li>
            <li>
              After this assignment where I purposed for survey UI, I then began research in web, application, database and storage 
              layers with cloud computing. The solution design for CPOP is based on the AWS reference achitecture for sensitive data 
              that that makes use of secured services using user-scoped IAM permissions and auditable logging and configuration 
              compliance controls.
            </li>
            <li>
              In the project I used Amazon Cognito for authentication and authorization, Amazon S3 / CloudFront 
              services for the web application layer, Amazon API Gateway / Lambda for the application layer, and 
              DynamoDB database services for that data layer.
            </li>
            <li>
              The project gave me experience using AWS and learning cloud computing concepts.
            </li>
          </div>
        </div>
        <div className="work-experience">
          <h2>Deep Learning Research Assistant, University of Virginia, August 2021 - December 2022</h2>
          <div className="duties">
            <li> 
              Worked in the Pervasive Communications Labortory under Prfessor Shen. The 
              research Labortory research interests include Cloud computing, dataceneters, 
              big data, cyper-physical systems, distributed systems, mobile computing, high performace computing, 
              and socail netwroks.
            </li>
            <li>
              My research was preformed under PhD student Suraiya Tairin. The research 
              required a deep knowledge on python, deep learning models, using GPU and 
              knowing how to use virtual environments.
            </li>
            <li>
              My first assignment to use both python and know how to run deep learning models 
              was to create deep learning code that takes in images of different flora species 
              and identifies what family they belong to. This project taught me machine learning 
              and machine learning libraries that are imported in python. One library in 
              particular I used was NumPy. 
            </li>
            <li>
              Following the project I accessed the schools GPU services to run deep learning 
              algorithms to study data parallelism and deep learning. Data parallelism splits up large 
              batasets into smaller batches. Each of the smaller batches are calculate on muliple GPU 
              servers then a result is found from these outputs. This is a immensely faster way to 
              run deep learning algorithms. 
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}