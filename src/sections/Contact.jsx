import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("");

        // Validate input fields
        if (
            !name.trim() ||
            !email.trim() ||
            !subject.trim() ||
            !message.trim()
        ) {
            setStatus("Please fill in all fields.");
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.trim())) {
            setStatus("Please enter a valid email address.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(
                "https://portpolio-be.vercel.app/api/contact",
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

            setStatus("Your message was sent successfully! Thank you.");

            // Clear form after successful submission
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } catch (error) {
            console.error("Contact form error:", error);

            setStatus(
                error.message ||
                "Unable to send your message. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-heading">
                    <p className="contact-subtitle">GET IN TOUCH</p>

                    <h2>
                        Contact <span>Me</span>
                    </h2>

                    <p className="contact-description">
                        Have a project in mind or want to work together?
                        Feel free to send me a message. I would love to hear
                        from you!
                    </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message here..."
                            rows="6"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    {status && (
                        <p
                            className={`contact-status ${
                                status.includes("successfully")
                                    ? "success"
                                    : "error"
                            }`}
                            role="status"
                        >
                            {status}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="contact-submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>

            <style>{`
                .contact-section {
                    padding: 80px 20px;
                    background: #070a12;
                    color: #ffffff;
                }

                .contact-container {
                    max-width: 760px;
                    margin: 0 auto;
                }

                .contact-heading {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .contact-subtitle {
                    color: #e879f9;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 3px;
                    margin-bottom: 12px;
                }

                .contact-heading h2 {
                    font-size: clamp(32px, 5vw, 48px);
                    font-weight: 800;
                    margin-bottom: 16px;
                }

                .contact-heading h2 span {
                    color: #e879f9;
                }

                .contact-description {
                    color: #a1a1aa;
                    line-height: 1.8;
                    max-width: 580px;
                    margin: 0 auto;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 22px;
                    padding: 30px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(232, 121, 249, 0.18);
                    border-radius: 18px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 9px;
                }

                .form-group label {
                    color: #e4e4e7;
                    font-size: 14px;
                    font-weight: 600;
                }

                .form-group input,
                .form-group textarea {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 14px 16px;
                    border: 1px solid #272735;
                    border-radius: 10px;
                    outline: none;
                    background: #0c0f19;
                    color: #ffffff;
                    font-size: 14px;
                    font-family: inherit;
                    transition: border-color 0.2s ease;
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    border-color: #d946ef;
                }

                .form-group textarea {
                    resize: vertical;
                    min-height: 140px;
                }

                .contact-submit {
                    padding: 15px 22px;
                    border: none;
                    border-radius: 10px;
                    background: linear-gradient(135deg, #d946ef, #9333ea);
                    color: #ffffff;
                    font-size: 15px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: opacity 0.2s ease;
                }

                .contact-submit:hover {
                    opacity: 0.88;
                }

                .contact-submit:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .contact-status {
                    padding: 12px;
                    border-radius: 8px;
                    font-size: 14px;
                    line-height: 1.6;
                }

                .contact-status.success {
                    color: #86efac;
                    background: rgba(34, 197, 94, 0.1);
                    border: 1px solid rgba(34, 197, 94, 0.25);
                }

                .contact-status.error {
                    color: #fca5a5;
                    background: rgba(239, 68, 68, 0.1);
                    border: 1px solid rgba(239, 68, 68, 0.25);
                }

                @media (max-width: 600px) {
                    .contact-section {
                        padding: 60px 16px;
                    }

                    .contact-form {
                        padding: 20px;
                    }
                }
            `}</style>
        </section>
    );
}

export default Contact;