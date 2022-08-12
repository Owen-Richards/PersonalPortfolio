import React from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

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
      minHeight: 700.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x181818,
      colorMode: "variance",
      birdSize: 1.20,
      wingSpan: 19.00,
      speedLimit: 4.00,
      separation: 36.00,
      quantity: 4.00
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef}>
      <Welcome/>
      <About/>
    </div>
  }
}
export default Background;