import { useEffect, useState } from "react";

import pixoraImage from "../assets/pixora.jpeg";
import ecosnapImage from "../assets/ecosnap.png";
import parkingImage from "../assets/parking.png";
import hotelImage from "../assets/hotel.jpg";
import cinnamonImage from "../assets/cinnamon.jpeg";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Pixora Studio",
            category: "Web Application",
            description:
                "A premium photography booking and AI photo editing platform designed to manage photography services, bookings and image editing.",
            technologies: [
                "React",
                "TypeScript",
                "Node.js",
                "Express.js",
                "MongoDB",
            ],
            image: pixoraImage,
            links: [
                {
                    name: "Frontend GitHub",
                    icon: "bxl-github",
                    url: "https://github.com/thakshila462/PIXORA-FE",
                },
                {
                    name: "Backend GitHub",
                    icon: "bxl-github",
                    url: "https://github.com/thakshila462/PIXORA-BE",
                },
                {
                    name: "Live Website",
                    icon: "bx-globe",
                    url: "https://pixora-fe.vercel.app",
                },
            ],
        },

        {
            title: "EcoSnap",
            category: "Mobile Application",
            description:
                "A mobile environmental journal application that allows users to create, manage and track their environmental experiences.",
            technologies: [
                "React Native",
                "Expo",
                "TypeScript",
                "Firebase",
            ],
            image: ecosnapImage,
            links: [
                {
                    name: "GitHub Repository",
                    icon: "bxl-github",
                    url: "https://github.com/thakshila462/Eco-snap-jurnal",
                },
            ],
        },

        {
            title: "Parking Management System",
            category: "Backend Development",
            description:
                "A parking management system designed to manage users, vehicles, parking spaces, orders and payments using a microservices architecture.",
            technologies: [
                "Java",
                "Spring Boot",
                "MySQL",
                "Microservices",
            ],
            image: parkingImage,
            links: [
                {
                    name: "GitHub Repository",
                    icon: "bxl-github",
                    url: "https://github.com/thakshila462/Smart_Parking_System",
                },
            ],
        },

        {
            title: "Hotel Website",
            category: "Web Development",
            description:
                "A modern and responsive hotel website created to showcase hotel facilities, rooms, services and contact information.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
            ],
            image: hotelImage,
            links: [
                {
                    name: "GitHub Repository",
                    icon: "bxl-github",
                    url: "https://github.com/thakshila462/hotelSite",
                },
                {
                    name: "Live Website",
                    icon: "bx-globe",
                    url: "https://thakshila462.github.io/hotelSite/",
                },
            ],
        },

        {
            title: "Cinnamon Plantation & Buyer Management System",
            category: "Full Stack Application",
            description:
                "A web-based system for managing cinnamon plantation services, buyers, products, service requests, payments and delivery management.",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
            ],
            image: cinnamonImage,
            links: [
                {
                    name: "GitHub Repository",
                    icon: "bxl-github",
                    url: "https://github.com/thakshila462/Cinnamon-Buying-_AND_Plantation_Service_System",
                },
                {
                    name: "YouTube Demo",
                    icon: "bxl-youtube",
                    url: "https://youtu.be/H_rxufjPCEs?si=5V7DUjvOIDdslRuQ",
                },
            ],
        },
    ];

    // Close the modal using the Escape key.
    useEffect(() => {
        if (!selectedProject) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
        };

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="projects">
            {/* Section Heading */}
            <div className="projects-header">
                <span className="projects-subtitle">
                    <span className="subtitle-line"></span>
                    MY WORK
                    <span className="subtitle-line"></span>
                </span>

                <h2 className="heading">
                    My <span>Projects</span>
                </h2>

                <p className="projects-intro">
                    Here are some of the projects I've built, showcasing
                    my skills in web and mobile development, problem
                    solving and creativity.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="projects-container">
                {projects.map((project, index) => (
                    <article
                        className="project-box"
                        key={project.title}
                        style={{ "--project-index": index }}
                    >
                        {/* Project Image */}
                        <div className="project-image-wrapper">
                            <img
                                className="project-image"
                                src={project.image}
                                alt={`${project.title} project preview`}
                                loading="lazy"
                            />

                            <span className="project-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="project-category">
                                {project.category}
                            </span>
                        </div>

                        {/* Project Information */}
                        <div className="project-content">
                            <h3 className="project-title">
                                {project.title}
                            </h3>

                            <p className="project-description">
                                {project.description}
                            </p>

                            {/* Technology Tags */}
                            <div className="project-technologies">
                                {project.technologies.map((technology) => (
                                    <span
                                        className="technology-tag"
                                        key={technology}
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            {/* Project Footer */}
                            <div className="project-footer">
                                <div className="project-link-icons">
                                    {project.links.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-icon-link"
                                            aria-label={link.name}
                                            title={link.name}
                                        >
                                            <i
                                                className={`bx ${link.icon}`}
                                            ></i>
                                        </a>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    className="project-view-btn"
                                    onClick={() =>
                                        setSelectedProject(project)
                                    }
                                    aria-label={`View details for ${project.title}`}
                                >
                                    <span>View Details</span>
                                    <i className="bx bx-right-arrow-alt"></i>
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div
                    className="project-modal-overlay"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setSelectedProject(null);
                        }
                    }}
                >
                    <div
                        className="project-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                    >
                        {/* Modal Header */}
                        <div className="modal-header">
                            <span className="modal-category">
                                {selectedProject.category}
                            </span>

                            <button
                                type="button"
                                className="modal-close"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Close project details"
                            >
                                <i className="bx bx-x"></i>
                            </button>
                        </div>

                        {/* Modal Project Image */}
                        <div className="modal-image-wrapper">
                            <img
                                src={selectedProject.image}
                                alt={`${selectedProject.title} preview`}
                                className="modal-project-image"
                            />
                        </div>

                        {/* Modal Information */}
                        <h3 id="project-modal-title">
                            {selectedProject.title}
                        </h3>

                        <p className="modal-description">
                            {selectedProject.description}
                        </p>

                        {/* Technologies */}
                        <div className="modal-section">
                            <h4>
                                <i className="bx bx-code-alt"></i>
                                Technologies Used
                            </h4>

                            <div className="modal-tech">
                                {selectedProject.technologies.map(
                                    (technology) => (
                                        <span
                                            className="modal-tech-tag"
                                            key={technology}
                                        >
                                            {technology}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Project Links */}
                        <div className="modal-section modal-links-section">
                            <h4>
                                <i className="bx bx-link-alt"></i>
                                Project Links
                            </h4>

                            <div className="modal-links">
                                {selectedProject.links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="modal-link"
                                    >
                                        <span className="modal-link-icon">
                                            <i
                                                className={`bx ${link.icon}`}
                                            ></i>
                                        </span>

                                        <span className="modal-link-text">
                                            <strong>{link.name}</strong>
                                            <small>
                                                Open project resource
                                            </small>
                                        </span>

                                        <i className="bx bx-up-right-arrow-alt modal-external-icon"></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="modal-done-btn"
                                onClick={() => setSelectedProject(null)}
                            >
                                <i className="bx bx-x"></i>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;