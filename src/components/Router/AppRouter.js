import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Project from '../Projects/Project';
import Accomplishments from '../Accomplishments/accomplishments';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={
                    <Welcome />
                } />
                <Route path="/about" element={
                    <About />
                } />
                <Route path="/skill" element={
                    <Skills />
                } />
                <Route path="/project" element={
                    <Project />
                } />
                <Route path="/achievements" element={
                    <Accomplishments />
                } />
                <Route path="/experience" element={
                    <Experience />
                } />
                <Route path="/contact" element={
                    <Contact />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;