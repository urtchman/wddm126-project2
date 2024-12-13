import React, { useState } from "react";
import "../assets/css/contact.css"; // Assuming you have corresponding CSS for styling

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);

    const sendContactMessage = (event) => {
        event.preventDefault(); // Prevent default form submission

        // Display the loader modal
        setIsLoading(true);

        // Simulate a delay for sending the message
        setTimeout(() => {
            // Hide the loader modal
            setIsLoading(false);

            // Display success message
            alert("Your message has been sent successfully!");

            // Clear the form
            event.target.reset();
        }, 2000); // 2-second delay
    };

    return (
        <main>
            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>
                    We'd love to hear from you! Whether you have a question about
                    destinations, services, or anything else, our team is ready to
                    answer all your questions.
                </p>

                <div className="contact-info">
                    <p>
                        <strong>Address:</strong> 123 Travel Way, Toronto, ON
                    </p>
                    <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:support@umktravels.com">
                            support@umktravels.com
                        </a>
                    </p>
                    <p>
                        <strong>Phone:</strong> +1 (800) 123-4567
                    </p>
                </div>
                <hr />
                <hr />

                {/* Contact Form */}
                <form id="contactForm" onSubmit={sendContactMessage}>
                    <h2>You can also fill out the form to reach us</h2>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-submit">
                        Send Message
                    </button>
                </form>

                {/* Map Section */}
                <div className="map-container">
                    <h3>Find Us Here</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.737224150892!2d-79.38393438451023!3d43.65390867912157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d8e55d24b5%3A0x6f6f2a1bdf5745a5!2s123%20Travel%20Way%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1600291234433!5m2!1sen!2sca"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Loader Modal */}
                {isLoading && (
                    <div id="loaderModal" className="modal" style={{ display: 'block' }}>
                        <div className="modal-content">
                            <div className="loader"></div>
                            <p>Sending your message...</p>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default Contact;
