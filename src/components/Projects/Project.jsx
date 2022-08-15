import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";
import "./Project.css";
import pic from "../../media/Purposed_template.jpeg";

export default function Project() {
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
            <SectionHeader title="Projects" />
            <div className="projectContainer">
                <div className="wrapper">
                    <div className="card">
                        <img src={pic} alt="test"></img>
                        <div className="descriptions">
                            <div className="textcard">
                                <h1>Architecture Graduate Web Portfolio</h1>
                                <h2>
                                    Worked with a Architecture Graduate student to design, code and deploy
                                    a personal portfolio website to host some recent work.
                                </h2>
                            </div>
                            <div className="imgcard">
                                <div className="GitHub">
                                    <a href="https://github.com/Owen-Richards/joshua-web" target="_blank" rel="noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={pic} alt="test"></img>
                        <div className="descriptions">
                            <div className="textcard">
                                <h1>Architecture Graduate Web Portfolio</h1>
                                <h2>
                                    Worked with a Architecture Graduate student to design, code and deploy
                                    a personal portfolio website to host some recent work.
                                </h2>
                            </div>
                            <div className="imgcard">
                                <div className="GitHub">
                                    <a href="https://github.com/Owen-Richards/joshua-web" target="_blank" rel="noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={pic} alt="test"></img>
                        <div className="descriptions">
                            <div className="textcard">
                                <h1>Architecture Graduate Web Portfolio</h1>
                                <h2>
                                    Worked with a Architecture Graduate student to design, code and deploy
                                    a personal portfolio website to host some recent work.
                                </h2>
                            </div>
                            <div className="imgcard">
                                <div className="GitHub">
                                    <a href="https://github.com/Owen-Richards/joshua-web" target="_blank" rel="noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={pic} alt="test"></img>
                        <div className="descriptions">
                            <div className="textcard">
                                <h1>Architecture Graduate Web Portfolio</h1>
                                <h2>
                                    Worked with a Architecture Graduate student to design, code and deploy
                                    a personal portfolio website to host some recent work.
                                </h2>
                            </div>
                            <div className="imgcard">
                                <div className="GitHub">
                                    <a href="https://github.com/Owen-Richards/joshua-web" target="_blank" rel="noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={pic} alt="test"></img>
                        <div className="descriptions">
                            <div className="textcard">
                                <h1>Architecture Graduate Web Portfolio</h1>
                                <h2>
                                    Worked with a Architecture Graduate student to design, code and deploy
                                    a personal portfolio website to host some recent work.
                                </h2>
                            </div>
                            <div className="imgcard">
                                <div className="GitHub">
                                    <a href="https://github.com/Owen-Richards/joshua-web" target="_blank" rel="noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={pic} alt="test"></img>
                        <div className="descriptions">
                            <div className="textcard">
                                <h1>Architecture Graduate Web Portfolio</h1>
                                <h2>
                                    Worked with a Architecture Graduate student to design, code and deploy
                                    a personal portfolio website to host some recent work.
                                </h2>
                            </div>
                            <div className="imgcard">
                                <div className="GitHub">
                                    <a href="https://github.com/Owen-Richards/joshua-web" target="_blank" rel="noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}