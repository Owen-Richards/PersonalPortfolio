import React from "react";
import SectionHeader from "../SectionHeader";
import "./accomplishments.css";

export default function Accomplishments() {
    return (
        <section
            className={cn("accomplish-section")}
        >
            <SectionHeader title="Achievements" />
            <div className="container">
                <div className="accomplishcard">
                    <div className="face face1">
                        <div className="content">
                            <i className="fa-solid fa-medal"></i>
                            <h3>Athletics</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <li> 8 x Tidewater conference of independent schools cross country and
                                track champion.
                            </li>
                            <li> 2nd Place at the Bristish Schools Rowing Championships hosted in Scotland
                            </li>
                            <li> State Champion in cross country, 3200m and 1600m. Captained 7 seasons of cross country and track.
                            </li>
                            <li>
                                1st place in UK Private school nationals for cross country and 18th in UK nationals for cross country
                            </li>
                            <li>
                                Enjoy all outdoor activities!
                            </li>
                        </div>
                    </div>
                </div>
                <div className="accomplishcard">
                    <div className="face face1">
                        <div className="content">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <h3>Academic</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <li> Been on Dean's list for UVA every semester
                            </li>
                            <li> Member of Cum Laude Society
                            </li>
                            <li> National Honors Society President
                            </li>
                            <li>
                                National French Honors Society
                            </li>
                            <li>
                                Reasearch Assistant in a Machine Learning as well as
                                designing a application for a UVA medical doctor. Both
                                projects I worked with PhD students.
                            </li>
                            <li>
                                Have a passion for learning and growth
                            </li>
                        </div>
                    </div>
                </div>
                <div className="accomplishcard">
                    <div className="face face1">
                        <div className="content">
                            <i className="fa-solid fa-hand-holding-heart"></i>
                            <h3>Growth</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <li>
                                Student director at Madison House for UVA which is a
                                multifaceted organization which aims to help the local community
                                through charity and events.
                            </li>
                            <li>
                                Director at community garden.
                            </li>
                            <li>
                                Big brother volunteer for a student in local community
                            </li>
                            <li>
                                Volunteer at Salvation Army at Christmas to help pack items for local families
                            </li>
                            <li>
                                Student tutor 
                            </li>
                            <li>
                                Always looking for meaningful ways to help the communtiy and grow as a person
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
