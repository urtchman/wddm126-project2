import React from 'react';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';

const About = () => {
    return (
        <main>
            {/* About Us Section */}
            <section className="about">
                <h1>About UMK Travels</h1>
                <p>At UMK Travel, we are dedicated to turning your travel dreams into reality. With over a decade of experience in the travel industry, our mission is to offer exceptional travel experiences that are tailored to meet the individual needs of each of our clients. Whether you’re planning a family holiday, a romantic getaway, or an adventure-filled journey, our team is here to guide you every step of the way.</p>
            </section>

            {/* Mission Statement */}
            <section className="mission">
                <h2>Our Mission</h2>
                <p>Our mission is to create unforgettable experiences by offering expertly crafted travel itineraries, personalized services, and a commitment to quality. We strive to inspire and connect people through travel, making every trip a remarkable journey filled with lasting memories.</p>
            </section>

            {/* Our Services Section */}
            <section className="services">
                <h2>What We Offer</h2>
                <ul>
                    <li><strong>Personalized Travel Planning:</strong> Customized itineraries that match your travel style, preferences, and budget.</li>
                    <li><strong>Group Tours and Packages:</strong> Exciting group travel options and packages to top destinations around the world.</li>
                    <li><strong>Luxury and Adventure Travel:</strong> From five-star resorts to rugged adventure excursions, we cover it all.</li>
                    <li><strong>Corporate Travel Management:</strong> Comprehensive travel solutions for businesses and professionals.</li>
                    <li><strong>24/7 Customer Support:</strong> Assistance anytime, anywhere to ensure your travel experience is smooth and enjoyable.</li>
                </ul>
            </section>

            {/* Meet Our Team Section */}
            <section className="team">
                <h2>Meet Our Team</h2>
                <p>Our team of travel experts is passionate about discovering the world and bringing that passion to you. Each member of our team has years of experience and a unique set of skills, from destination expertise to travel logistics and customer service. We’re here to take care of the details, so you can focus on making memories.</p>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={team1} alt="Jane Doe - Founder" />
                        <h3>Jane Doe</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src={team2} alt="John Smith - Travel Specialist" />
                        <h3>John Smith</h3>
                        <p>Travel Specialist</p>
                    </div>
                    <div className="team-member">
                        <img src={team3} alt="Emily Jackson - Customer Relations" />
                        <h3>Emily Jackson</h3>
                        <p>Customer Relations Manager</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonial">
                    <blockquote>"UMK Travels made our honeymoon unforgettable. Every detail was perfect, from the accommodation to the activities planned. We couldn’t have asked for a better experience!"</blockquote>
                    <p>- Sarah and James</p>
                </div>
                <div className="testimonial">
                    <blockquote>"The best travel agency we've ever worked with. They took care of everything and made our vacation stress-free and enjoyable. Highly recommend!"</blockquote>
                    <p>- Alex M.</p>
                </div>
            </section>
        </main>
    );
};

export default About;
