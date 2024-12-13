import React from 'react';
import DestinationCard from './DestinationCard';
import paris from '../assets/images/paris.jpg';
import tokyo from '../assets/images/tokyo.jpg';
import newYork from '../assets/images/new-york.jpg';
import sydney from '../assets/images/sydney.jpg';
import capetown from '../assets/images/capetown.jpg';
import dubai from '../assets/images/dubai.jpg';
import london from '../assets/images/london.jpg';
import rome from '../assets/images/rome.jpg';
import istanbul from '../assets/images/istanbul.jpg';
import toronto from '../assets/images/toronto.jpg';
import lagos from '../assets/images/lagos.jpg';
import saopaulo from '../assets/images/saopaulo.jpg';

const Destinations = () => {
    const destinations = [
        {
            imageUrl: paris,
            title: 'Paris, France',
            description: 'Known for its iconic Eiffel Tower, art museums, and café culture, Paris offers a romantic atmosphere with a rich history.',
        },
        {
            imageUrl: tokyo,
            title: 'Tokyo, Japan',
            description: 'A dazzling mix of tradition and futurism, Tokyo captivates with its shrines, tech, anime culture, and vibrant food scene.',
        },
        {
            imageUrl: newYork,
            title: 'New York, USA',
            description: 'From Broadway to Times Square, New York offers a nonstop energy with endless entertainment, dining, and shopping options.',
        },
        {
            imageUrl: sydney,
            title: 'Sydney, Australia',
            description: 'Famous for its Opera House, Sydney combines coastal beauty, wildlife, and a vibrant nightlife in the Land Down Under.',
        },
        {
            imageUrl: capetown,
            title: 'Cape Town, South Africa',
            description: 'Enjoy breathtaking landscapes, beaches, and Table Mountain, with rich cultural heritage and scenic drives along the coast.',
        },
        {
            imageUrl: dubai,
            title: 'Dubai, UAE',
            description: 'A city of superlatives, Dubai boasts luxury, towering skyscrapers, endless shopping, and unique desert adventures.',
        },
        {
            imageUrl: london,
            title: 'London, UK',
            description: 'Historic landmarks like Big Ben and the Tower Bridge blend with modern arts, shopping, and diverse food in cosmopolitan London.',
        },
        {
            imageUrl: rome,
            title: 'Rome, Italy',
            description: 'From the Colosseum to the Vatican, Rome is a treasure trove of ancient history, exquisite art, and Italian cuisine.',
        },
        {
            imageUrl: istanbul,
            title: 'Istanbul, Turkey',
            description: 'A unique blend of East and West, Istanbul offers breathtaking mosques, bustling bazaars, and scenic views of the Bosphorus.',
        },
        {
            imageUrl: toronto,
            title: 'Toronto, Canada',
            description: 'Canada\'s largest city, Toronto offers a rich cultural mosaic, iconic landmarks like the CN Tower, and stunning lake views.',
        },
        {
            imageUrl: lagos,
            title: 'Lagos, Nigeria',
            description: 'Lagos is the largest and most populated city in Nigeria.',
        },
        {
            imageUrl: saopaulo,
            title: 'Sao Paulo, Brazil',
            description: 'São Paulo, Brazil’s vibrant financial center, is among the world\'s most populous cities, with numerous cultural institutions and a rich architectural tradition.',
        },
    ];

    return (
        <main>
            <section className="popular-destinations">
                <h1>Explore Our Top Destinations</h1>
                <div className="destination-grid">
                    {destinations.map((dest, index) => (
                        <DestinationCard
                            key={index}
                            imageUrl={dest.imageUrl}
                            title={dest.title}
                            description={dest.description}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Destinations;
