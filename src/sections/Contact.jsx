import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    // Submit contact form
    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus({
            type: "",
            message: "",
        });

        const { name, email, subject, message } = formData;

        if (
            !name.trim() ||
            !email.trim() ||
            !subject.trim() ||
            !message.trim()
        ) {
            setStatus({
                type: "error",
                message: "Please fill in all fields.",
            });
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name.trim(),
                        email: email.trim(),
                        subject: subject.trim(),
                        message: message.trim(),
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Unable to send your message."
                );
            }

            setStatus({
                type: "success",
                message:
                    "Your message has been sent successfully! Thank you for contacting me.",
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("Contact form error:", error);

            setStatus({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <p className="contact-subtitle">GET IN TOUCH</p>

                    <h2 className="contact-title">
                        Let's Work <span>Together</span>
                    </h2>

                    <p className="contact-description">
                        Have a project in mind, an internship opportunity,
                        or just want to say hello? Send me a message.
                        I would love to hear from you!
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <h3>Contact Information</h3>

                        <p>
                            Feel free to contact me regarding projects,
                            collaborations, or career opportunities.
                        </p>

                        <div className="contact-info-item">
                            <div className="contact-icon">✉</div>

                            <div>
                                <h4>Email</h4>
                                <p>Your email address will be displayed here</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">📍</div>

                            <div>
                                <h4>Location</h4>
                                <p>Sri Lanka</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">💼</div>

                            <div>
                                <h4>Opportunities</h4>
                                <p>Open to internships and collaborations</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <h3>Send Me a Message</h3>

                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                maxLength={100}
                                autoComplete="name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                                maxLength={254}
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Enter the subject"
                                value={formData.subject}
                                onChange={handleChange}
                                maxLength={150}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                maxLength={5000}
                                required
                            />
                        </div>

                        {/* Success and Error Messages */}
                        {status.message && (
                            <div
                                className={`contact-status ${
                                    status.type === "success"
                                        ? "success"
                                        : "error"
                                }`}
                                role="status"
                            >
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="contact-submit-btn"
                            disabled={loading}
                        >
                            {loading
                                ? "Sending Message..."
                                : "Send Message →"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;