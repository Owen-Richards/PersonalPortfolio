import "./Welcome.scss";
import Typewriter from 'typewriter-effect'

export default function Welcome() {
    return (
        <div className="intro" id="intro">
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I am</h2>
                    <h1>Owen Richards</h1>
                    <h3>
                        <span>
                            <Typewriter
                                options={{
                                    strings: ["Computer Science Major", "Database Teachers Assistant", "Web Developer", "DevOps Intern", "Software Developer Essentails Teachers Assistant"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h3>
                </div>
            </div>
        </div>
    );
}