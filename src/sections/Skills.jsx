import React from 'react';

function Skills() {

    const skills = [
        {
            name: "Java",
            icon: "bxl-java", // Boxicons class
            description: "Object-oriented programming and backend application development.",
            rating: 85
        },
        {
            name: "JavaScript",
            icon: "bxl-javascript",
            description: "Building interactive and dynamic web applications.",
            rating: 85
        },
        {
            name: "TypeScript",
            icon: "bxl-typescript",
            description: "Writing scalable and type-safe React applications.",
            rating: 75
        },
        {
            name: "React",
            icon: "bxl-react",
            description: "Creating modern, responsive and component-based user interfaces.",
            rating: 85
        },
        {
            name: "Node.js",
            icon: "bxl-nodejs",
            description: "Developing backend APIs and server-side applications.",
            rating: 80
        },
        {
            name: "Express.js",
            icon: "bx-server", // Express සඳහා පොදු server icon එකක්
            description: "Building REST APIs and backend services with Node.js.",
            rating: 80
        },
        {
            name: "MongoDB",
            icon: "bxl-mongodb",
            description: "Working with NoSQL databases and application data.",
            rating: 75
        },
        {
            name: "MySQL",
            icon: "bx-data", // Database icon එකක්
            description: "Designing databases and writing SQL queries.",
            rating: 80
        },
        {
            name: "Git",
            icon: "bxl-git",
            description: "Managing source code and tracking project changes.",
            rating: 80
        },
        {
            name: "GitHub",
            icon: "bxl-github",
            description: "Collaborating, managing repositories and publishing projects.",
            rating: 80
        }
    ];

    return (
        <section id="skills" className="skills">

            <h2 className="heading">
                My <span>Skills</span>
            </h2>

            <div className="skills-container">

                {skills.map((skill) => (

                    <div className="skill-box" key={skill.name}>

                        {/* Title le Icon එක */}
                        <div className="skill-header">
                            <i className={`bx ${skill.icon} skill-icon`}></i>
                            <h3>{skill.name}</h3>
                        </div>

                        <p>{skill.description}</p>

                        {/* Rating Bar */}
                        <div className="skill-rating">

                            <div className="rating-info">
                                <span>Skill Level</span>
                                <span>{skill.rating}%</span>
                            </div>

                            <div className="rating-bar">
                                <div
                                    className="rating-progress"
                                    style={{
                                        width: `${skill.rating}%`
                                    }}
                                ></div>
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Skills;