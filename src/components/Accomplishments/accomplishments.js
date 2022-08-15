import React from "react";
import cn from "classnames";
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
                            <p> Pinterest helps you discover and do what you love. Find recipes, style inspiration, projects for your home and...</p>
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
                            <p>Instagram online search engine and post viewer. Discover and explore users and hashtags and view recent activity.</p>
                        </div>
                    </div>
                </div>
                <div className="accomplishcard">
                    <div className="face face1">
                        <div className="content">
                            <i className="fa-solid fa-hand-holding-heart"></i>
                            <h3>Community</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Instagram online search engine and post viewer. Discover and explore users and hashtags and view recent activity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}