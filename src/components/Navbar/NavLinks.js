import { motion } from 'framer-motion'
import React from 'react';


const NavLinks = (props) => {
    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }
    return (
        <ul>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.05}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">Home</a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.10}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">About Me</a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.20}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">Skills</a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.30}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">Projects</a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.40}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">Accomplishments</a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.50}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">Contact</a>
            </motion.li>
        </ul>
    );
}
export default NavLinks;