import React from 'react';
import PropTypes from 'prop-types';

const DestinationCard = ({ imageUrl, title, description }) => {
    const handleRightClick = (event) => {
        event.preventDefault(); // Prevent the default context menu
        alert('You cannot right-click on this element.');
    };
    return (
        <div
            className="destination2"
            style={{ backgroundImage: `url(${imageUrl})` }} 
            onContextMenu={handleRightClick}
        >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

DestinationCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default DestinationCard;