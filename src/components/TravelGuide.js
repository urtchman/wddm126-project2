import React from 'react';

const TravelGuide = ()=> {
    return (
        <main>
            {/*<!-- Travel Guide Section -->*/}
            <section class="travel-guide">
                <h2>Travel Guide</h2>
                <p>Explore our comprehensive travel guide for essential tips and advice to make the most of your journey. Whether you're an experienced traveler or exploring a new destination for the first time, we have you covered with practical information and insider tips.</p>

                {/*<!-- Travel Tips -->*/}
                <h3>Travel Preparation Tips</h3>
                <ul>
                    <li><strong>Research Your Destination:</strong> Learn about the culture, language, and local customs to ensure a smooth and respectful experience.</li>
                    <li><strong>Check Travel Requirements:</strong> Verify passport validity, visa requirements, and any health or vaccination guidelines before departure.</li>
                    <li><strong>Pack Smart:</strong> Make a checklist of essentials, and pack versatile clothing suited for the weather and activities planned. Don't forget travel-sized toiletries and medications.</li>
                    <li><strong>Keep Important Documents Secure:</strong> Make digital copies of your passport, travel insurance, and any other essential documents. Store them securely online and in a separate location from the originals.</li>
                </ul>

                {/*<!-- Safety Tips -->*/}
                <h3>Safety and Health Tips</h3>
                <ul>
                    <li><strong>Stay Aware of Your Surroundings:</strong> Keep an eye on your belongings, especially in crowded places, and stay vigilant for potential scams targeting tourists.</li>
                    <li><strong>Prioritize Health:</strong> Drink bottled water where necessary and choose reputable food vendors to avoid foodborne illnesses. Carry a small first-aid kit with essential items like band-aids and pain relievers.</li>
                    <li><strong>Have Travel Insurance:</strong> Ensure you're covered in case of medical emergencies, trip cancellations, or lost belongings.</li>
                </ul>

                {/*<!-- Money and Budgeting -->*/}
                <h3>Money and Budgeting Tips</h3>
                <ul>
                    <li><strong>Notify Your Bank:</strong> Inform your bank about your travel plans to avoid any unexpected card freezes.</li>
                    <li><strong>Use Local Currency:</strong> Opt for local currency to avoid unnecessary exchange fees and get better rates.</li>
                    <li><strong>Stick to a Budget:</strong> Set a daily spending limit to keep track of expenses and avoid overspending. Research affordable options for meals and transport.</li>
                </ul>

                {/*<!-- Local Etiquette -->*/}
                <h3>Respecting Local Etiquette</h3>
                <ul>
                    <li><strong>Learn Key Phrases:</strong> Basic greetings and phrases in the local language go a long way in making a good impression.</li>
                    <li><strong>Dress Appropriately:</strong> Dress respectfully according to local customs, especially when visiting religious sites or rural areas.</li>
                    <li><strong>Practice Mindful Photography:</strong> Always ask permission before taking photos of locals, and respect any restrictions on photography in certain areas.</li>
                </ul>
            </section>
        </main>

    );
};

export default TravelGuide;