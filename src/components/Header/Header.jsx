import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/features/theme/themeSlice';
import './Header.scss';

import { Squash as Hamburger } from 'hamburger-react';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import WorkIcon from '@mui/icons-material/Work';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


const Header = () => {
    const theme = useSelector((state) => state.theme.theme);
    const [isOpen, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navItemsRef = useRef(null);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }
    return (
        <header className="header">
            <div className="logo">
                <span>{'{r.r}'}</span>
                <Hamburger className='hamburger' toggled={isOpen} size={20} toggle={toggleMenu} />
            </div>
            <nav ref={navItemsRef} className={`nav-items ${isOpen ? 'open' : 'close'}`}>
                <ul className="nav-links">
                    <li onClick={toggleMenu}>
                        <HomeIcon />
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <SchoolIcon />
                        <NavLink to="/education">Education</NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <WorkIcon />
                        <NavLink to="/experience">Experience</NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <ScienceIcon />
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <PermContactCalendarIcon />
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <button className="theme-toggle card" style={{ border:'none'}} onClick={() => dispatch(toggleTheme())}>
                    {theme === 'dark' ? (
                        <LightModeSharpIcon />
                    ) : (
                        <DarkModeSharpIcon />
                    )}
                </button>
            </nav>
        </header>
    );
};

export default Header;
