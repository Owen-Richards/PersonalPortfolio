import React from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import Welcome from '../Welcome/Welcome';
// import About from '../About/About';
// import Skills from '../Skills/Skills';
// import Project from '../Projects/Project';
// import Accomplishments from '../Accomplishments/accomplishments';
// import Experience from '../Experience/Experience';
// import Contact from '../Contact/Contact';
import NavBar from '../Navbar/NavBar';
import "./background.css";

class Background extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 10.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x181818,
      colorMode: "variance",
      birdSize: 1.30,
      wingSpan: 19.00,
      speedLimit: 4.00,
      separation: 36.00,
      quantity: 3.00
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef}>
      <NavBar />
      <section id="home">
        <Welcome />
      </section>
    </div>
  }
}
export default Background;