import React from 'react';
import classes from './NavBar.module.css'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <Navigation/>
      <MobileNavigation/>

    </div>
  );
}
export default NavBar;


// import React, { Component } from 'react';
// import { MenuItems } from "./menu";
// import './style.css'

// class Navbar extends Component {
//   state = {clicked: false}

//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked})
//   }

//   render() {
//     return (
//       <nav className='NavbarItems'>
//         {/* <h1 className='navbar-logo'>Owen Richards</h1> */}
//         <div className='menu-icon' onClick={this.handleClick}>
//           <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </div>
//         <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <a className={item.cName} href={item.url}>
//                   {item.title}
//                 </a>
//               </li>
//             )
//           })}
//         </ul>
//       </nav>
//     )
//   }
// }

// export default Navbar
