import classes from './NavBar.module.css'
import NavLinks from "./NavLinks";
import React from 'react';

const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <NavLinks />
        </nav>
    );
}

export default Navigation