import React from 'react';

function About() {
    // CV file එක public folder එකේ තියෙන path එක
    const cvPath = "/Thakshila Kavindi-ATS Resume.pdf";

    return (
        <section id="about">
            <h2 className="heading">
                <i className='bx bx-user'></i> About <span>Me</span>
            </h2>

            <div className="about-container">


                {/* About Content */}
                <div className="about-content-text">
                    <p>
                        Hello! I'm <span className="highlight-name">Thakshila Kavindi</span>, a passionate Frontend Developer and Designer who loves creating visually stunning, user-friendly web applications. My mission is to craft digital experiences that are not only functional but beautiful.
                    </p>

                    <p>
                        I specialize in clean UI design, smooth animations, and responsive layouts using HTML, CSS, JavaScript, and frameworks like React.
                    </p>

                    <ul className="details">
                        <li><strong>School:</strong> G/Karandeniya Central College</li>
                        <li><strong>Age:</strong> 23 years old</li>
                        <li><strong>Currently Studying:</strong> BSc (Hons) in Software Engineering at <span>IJSE - Institute of Software Engineering</span></li>
                    </ul>

                    {/* View CV and Download CV Buttons */}
                    <div className="cv-btn-container">
                        {/* Open CV in new tab */}
                        <a
                            href={cvPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn cv-btn cv-view-btn"
                        >
                            <i className='bx bx-show'></i> View CV
                        </a>

                        {/* Download CV */}
                        <a
                            href={cvPath}
                            download="Thakshila Kavindi-ATS Resume.pdf"
                            className="btn cv-btn"
                        >
                            <i className='bx bx-download'></i> Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;