import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [showNavItems, setShowNavItems] = useState(false); // State to track visibility of navigation items

    // Function to toggle visibility of navigation items
    const toggleNavItems = () => {
        setShowNavItems(!showNavItems);
    }


    return (
        <nav className="navigation">
            <div className="container">
                <div className="logo">Logo</div>
                <div className="burger-menu" onClick={toggleNavItems}>
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </div>
                <ul className={showNavItems ? 'nav-links active' : 'nav-links'}>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#WhatWeOffer">WhatWeOffer</a></li>
                    <li><a href="#Blogs">Blogs</a></li>
                    <li><a href="#Connect">Connect</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
