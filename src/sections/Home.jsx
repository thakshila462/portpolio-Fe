import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpeg';
import RoboAvatar from '../components/RoboAvatar';

function Home() {
    const roles = [
        "Frontend Developer",
        "Backend Developer",
        "Software Engineer",
        "Web Designer"
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Profile image hover karama Robo Avatar eka pennana state eka
    const [isHovered, setIsHovered] = useState(false);

    // Typing animation
    useEffect(() => {
        const currentFullText = roles[currentRoleIndex];
        const typingSpeed = isDeleting ? 50 : 100;

        const handleTyping = () => {
            if (!isDeleting) {
                setDisplayText(
                    currentFullText.substring(0, displayText.length + 1)
                );

                if (displayText === currentFullText) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setDisplayText(
                    currentFullText.substring(0, displayText.length - 1)
                );

                if (displayText === '') {
                    setIsDeleting(false);
                    setCurrentRoleIndex(
                        (prev) => (prev + 1) % roles.length
                    );
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex]);

    // Social Media Links
    // Me URLs tika oyage profile links walin replace karanna
    const socialLinks = {
        github: "https://github.com/thakshila462",

        linkedin: "https://www.linkedin.com/in/thakshila-kavindi-23164b368/",

        instagram: "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/",

        facebook: "https://www.facebook.com/share/1Df1BXfkmD/"
    };

    return (
        <section id="home">

            {/* Home Content */}
            <div className="home-content">

                <p className="greeting">
                    Hello, It's Me
                </p>

                <h1 className="name">
                    Thakshila Kavindi
                </h1>

                <h3 className="role">
                    And I'm a{' '}
                    <span className="typed-text">
                        {displayText}
                    </span>

                    <span className="cursor">|</span>
                </h3>

                <p className="description">
                    I'm a passionate Software Engineering student
                    interested in web development and software design.
                    <br />
                    My expertise includes creating modern, responsive,
                    and user-friendly web applications.
                </p>

                {/* Contact Button */}
                <a href="#contact" className="btn">
                    Contact Me
                </a>

                {/* Social Media Icons */}
                <div className="social-icons">

                    {/* GitHub */}
                    <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        title="GitHub"
                    >
                        <i className="bx bxl-github"></i>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        title="LinkedIn"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    {/* Instagram */}
                    <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Profile"
                        title="Instagram"
                    >
                        <i className="bx bxl-instagram"></i>
                    </a>

                    {/* Facebook */}
                    <a
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook Profile"
                        title="Facebook"
                    >
                        <i className="bx bxl-facebook"></i>
                    </a>

                </div>

            </div>

            {/* Profile Image / Robo Avatar Container */}
            <div className="home-img-container">

                <div
                    className="img-glow"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >

                    {isHovered ? (
                        <RoboAvatar />
                    ) : (
                        <img
                            src={profileImg}
                            alt="Thakshila Kavindi"
                        />
                    )}

                </div>

            </div>

        </section>
    );
}

export default Home;