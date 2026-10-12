import React from 'react';

function Navbar() {
    return (
        <nav>
            <h2>Thakshila.</h2>

            <div>
                <a href="#home"><i className="bx bx-home-alt-2"></i> Home</a>
                <a href="#about"><i className="bx bx-user"></i> About</a>
                <a href="#skills"><i className="bx bx-receipt"></i> Skills</a>
                <a href="#projects"><i className="bx bx-briefcase-alt-2"></i> Projects</a>
                <a href="#services"><i className="bx bx-cog"></i> Services</a>

                <a href="#contact"><i className="bx bx-envelope"></i> Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;