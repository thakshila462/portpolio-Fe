function Services() {
    const services = [
        {
            id: "01",
            title: "Web Application Development",
            description:
                "I develop modern, responsive, and user-friendly web applications tailored to business needs, with reliable frontend interfaces, backend systems, and database integration.",
            icon: "bx-code-alt",
            technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
        },
        {
            id: "02",
            title: "Mobile Application Development",
            description:
                "I build user-friendly mobile applications with smooth navigation and responsive interfaces, helping users access services conveniently from their mobile devices.",
            icon: "bx-mobile-alt",
            technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
        },
        {
            id: "03",
            title: "POS System Development",
            description:
                "I develop Point of Sale systems to help businesses manage sales transactions, product details, inventory, billing, and customer information efficiently.",
            icon: "bx-store",
            technologies: ["Java", "Spring Boot", "MySQL", "React"],
        },
        {
            id: "04",
            title: "Backend Development",
            description:
                "I build reliable backend applications, REST APIs, authentication systems, and database integrations to support secure and efficient web and mobile applications.",
            icon: "bx-server",
            technologies: ["Java", "Spring Boot", "Node.js", "Express.js"],
        },
        {
            id: "05",
            title: "UI/UX & Frontend Development",
            description:
                "I create attractive, responsive, and user-friendly interfaces with clean layouts, consistent styling, and smooth interactions across different screen sizes.",
            icon: "bx-palette",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
        },
        {
            id: "06",
            title: "Management System Development",
            description:
                "I develop customized management systems that help businesses organize users, bookings, products, orders, payments, and daily operations in one place.",
            icon: "bx-layer",
            technologies: [
                "React",
                "Node.js",
                "Spring Boot",
                "MySQL",
            ],
        },
    ];

    return (
        <section id="services" className="services-section">
            <div className="services-container">
                {/* Section Heading */}
                <div className="services-header">
                    <span className="services-subtitle">
                        <span className="services-subtitle-line"></span>
                        WHAT I DO
                        <span className="services-subtitle-line"></span>
                    </span>

                    <h2 className="services-heading">
                        My <span>Services</span>
                    </h2>

                    <p className="services-intro">
                        I provide development solutions that transform ideas
                        into practical digital experiences, from modern web
                        applications to mobile apps and business management
                        systems.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="services-grid">
                    {services.map((service, index) => (
                        <article
                            className="service-card"
                            key={service.id}
                            style={{ "--service-index": index }}
                        >
                            <div className="service-card-top">
                                <div className="service-icon">
                                    <i
                                        className={`bx ${service.icon}`}
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <span className="service-number">
                                    {service.id}
                                </span>
                            </div>

                            <h3 className="service-title">
                                {service.title}
                            </h3>

                            <p className="service-description">
                                {service.description}
                            </p>

                            <div className="service-technologies">
                                {service.technologies.map((technology) => (
                                    <span
                                        className="service-tech-tag"
                                        key={technology}
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="service-card-bottom">
                                <span className="service-bottom-text">
                                    Explore my expertise
                                </span>

                                <i
                                    className="bx bx-right-arrow-alt service-arrow"
                                    aria-hidden="true"
                                ></i>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="services-cta">
                    <div className="services-cta-content">
                        <span className="services-cta-label">
                            HAVE A PROJECT IN MIND?
                        </span>

                        <h3>
                            Let's build something <span>amazing.</span>
                        </h3>

                        <p>
                            Have an idea or need a development solution?
                            Let's discuss how I can help bring your project
                            to life.
                        </p>
                    </div>

                    <a href="#contact" className="services-cta-button">
                        Let's Talk
                        <i
                            className="bx bx-right-arrow-alt"
                            aria-hidden="true"
                        ></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Services;