import React, { useState } from 'react';
 
import heroVideo from '../assets/videos/sydney.mp4';
import parisImg from '../assets/images/paris.jpg';
import tokyoImg from '../assets/images/tokyo.jpg';
import newYorkImg from '../assets/images/new-york.jpg';
import sydneyImg from '../assets/images/sydney.jpg';
//import CityModal from './CityModal';

const Home = () => {
    const [cityModalOpen, setCityModalOpen] = useState(false);
    const [destinationModalOpen, setDestinationModalOpen] = useState(false);
    const [destinationDescription, setDestinationDescription] = useState('');
  
    const openCityModal = () => setCityModalOpen(true);
    const closeCityModal = () => setCityModalOpen(false);
  
    const openDestinationModal = (description) => {
      setDestinationDescription(description);
      setDestinationModalOpen(true);
    };
    const closeDestinationModal = () => setDestinationModalOpen(false);
    
    const CityModal = ({ closeCityModal }) => {
      return (
        <div id="cityModal" className="modal" style={{ display: 'block' }}>
          <div className="modal-content2">
            <div className="city-list">
              <h3>Select Cities</h3>
              <div className="cities">
                <label><input type="checkbox" id="paris" /> Paris, France</label>
                <label><input type="checkbox" id="tokyo" /> Tokyo, Japan</label>
                <label><input type="checkbox" id="newYork" /> New York, USA</label>
                <label><input type="checkbox" id="sydney" /> Sydney, Australia</label>
                <label><input type="checkbox" id="capeTown" /> Cape Town, South Africa</label>
                <label><input type="checkbox" id="dubai" /> Dubai, UAE</label>
                <label><input type="checkbox" id="london" /> London, UK</label>
                <label><input type="checkbox" id="rome" /> Rome, Italy</label>
                <label><input type="checkbox" id="istanbul" /> Istanbul, Turkey</label>
                <label><input type="checkbox" id="toronto" /> Toronto, Canada</label>
                <label><input type="checkbox" id="lagos" /> Lagos, Nigeria</label>
                <label><input type="checkbox" id="saoPaulo" /> Sao Paulo, Brazil</label>
              </div>
            </div>
            <button className="explore-btn" onClick={closeCityModal}>Explore</button>
          </div>
        </div>
      );
    }; 
      const Destination = ({ title, image, description, onOpenModal }) => {
        return (
          <div
            className="destination"
            title={description}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => onOpenModal(description)}
          >
            {title}
          </div>
        );
      };
      
      const DestinationModal = ({ description, closeModal }) => {
        return (
          <div id="destinationModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <p>{description}</p>
            </div>
          </div>
        );
      };
      
      const Testimonials = () => (
        <section className="testimonials">
          <h2>What Our Clients Say</h2>
          <article className="testimonial">
            <blockquote>"Best travel experience ever! Everything was perfectly organized."</blockquote>
            <p>- Jane Doe</p>
          </article>
          <article className="testimonial">
            <blockquote>"A memorable trip that we will cherish forever. Thank you, TravelAgent!"</blockquote>
            <p>- John Smith</p>
          </article>
        </section>
      );
      
      const FeaturedArticle = () => (
        <section className="featured-article">
          <h2>Travel Tips & Articles</h2>
          <article>
            <h3>5 Tips for First-Time Travelers</h3>
            <p>Discover essential tips for making the most out of your first travel experience.</p>
            <a href="/articles/tips" className="read-more">Read More</a>
          </article>
        </section>
      );
      
      const NewsletterSignup = () => (
        <section className="newsletter">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest travel news and offers directly to your inbox.</p>
          <form action="#" method="post">
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="button">Subscribe</button>
          </form>
        </section>
      );
      
    return (
      <main>
        <section className="hero">
          <video autoPlay muted loop>
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero-text" onClick={openCityModal}>
            <h1>Explore the World with Us!</h1>
            <p>Your dream vacation is just a click away.</p>
          </div>
  
          {cityModalOpen && (
            <CityModal closeCityModal={closeCityModal} />
          )}
        </section>
  
        <section className="popular-destinations">
          <h2>Popular Destinations</h2>
          <div className="destination-grid">
            <Destination
              title="Paris"
              image={parisImg}
              description="Known for its iconic Eiffel Tower, art museums, and café culture, Paris offers a romantic atmosphere with a rich history."
              onOpenModal={openDestinationModal}
            />
            <Destination
              title="Tokyo"
              image={tokyoImg}
              description="A dazzling mix of tradition and futurism, Tokyo captivates with its shrines, tech, anime culture, and vibrant food scene."
              onOpenModal={openDestinationModal}
            />
            <Destination
              title="New York"
              image={newYorkImg}
              description="From Broadway to Times Square, New York offers a nonstop energy with endless entertainment, dining, and shopping options."
              onOpenModal={openDestinationModal}
            />
            <Destination
              title="Sydney"
              image={sydneyImg}
              description="Famous for its Opera House, Sydney combines coastal beauty, wildlife, and a vibrant nightlife in the Land Down Under."
              onOpenModal={openDestinationModal}
            />
          </div>
  
          {destinationModalOpen && (
            <DestinationModal
              description={destinationDescription}
              closeModal={closeDestinationModal}
            />
          )}
        </section>
  
        <Testimonials />
        <FeaturedArticle />
        <NewsletterSignup />
      </main>
    );
  };
  
  export default Home;