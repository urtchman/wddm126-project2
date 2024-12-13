import React, { useState } from 'react';

const CityModal = (closeCityModal) => {
  const [selectedCities, setSelectedCities] = useState([]);

  const cities = [
    { id: 'paris', name: 'Paris, France' },
    { id: 'tokyo', name: 'Tokyo, Japan' },
    { id: 'newYork', name: 'New York, USA' },
    { id: 'sydney', name: 'Sydney, Australia' },
    { id: 'capeTown', name: 'Cape Town, South Africa' },
    { id: 'dubai', name: 'Dubai, UAE' },
    { id: 'london', name: 'London, UK' },
    { id: 'rome', name: 'Rome, Italy' },
    { id: 'istanbul', name: 'Istanbul, Turkey' },
    { id: 'toronto', name: 'Toronto, Canada' },
    { id: 'lagos', name: 'Lagos, Nigeria' },
    { id: 'saoPaulo', name: 'Sao Paulo, Brazil' },
  ];

  const handleCheckboxChange = (event) => {
    const cityId = event.target.id;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCities([...selectedCities, cityId]);
    } else {
      setSelectedCities(selectedCities.filter((id) => id !== cityId));
    }
  };

  const renderCityCheckbox = (city) => (
    <label key={city.id}>
      <input
        type="checkbox"
        id={city.id}
        checked={selectedCities.includes(city.id)}
        onChange={handleCheckboxChange}
      />
      {city.name}
    </label>
  );

  return (
    <div id="cityModal" className="modal" stlye={{display:'block'}}>
      <div className="modal-content2">
        <div className="city-list">
          <h3>Select Cities</h3>
          <div className="cities">
            {cities.map(renderCityCheckbox)}
          </div>
        </div>
        <div className="selected-cities">
          <h3>Selected Cities</h3>
          <table id="selectedCitiesTable">
            <thead>
              <tr>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {selectedCities.map((cityId) => (
                <tr key={cityId} className="city-row">
                  <td>{cities.find((city) => city.id === cityId).name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="explore-btn" >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityModal;

// Function exploreCities() needs to be implemented in your main component
//function exploreCities() {
  // Implement your logic to explore selected cities here
  //console.log('Exploring cities:', selectedCities);
//}