// WhatWeOfferSection.js

import React from 'react';
import './WhatWeOfferSection.css';
import image1 from '../../src/assets/ai.png'; // Import your images for each card
import image2 from '../../src/assets/trust.png';
import image3 from '../../src/assets/scalability.png';
import image4 from '../../src/assets/end-to-end.png';

const WhatWeOfferSection = () => {
    // Define data for each card
    const cardsData = [
        {
            image: image1,
            title: 'Explore AI Opportunities for Your Enterprise',
            text: 'Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.',
        },
        {
            image: image2,
            title: 'Design AI Trust Layer',
            text: 'Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.',
        },
        {
            image: image3,
            title: 'Scalability-Focused Solutions',
            text: 'Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.',
        },
        {
            image: image4,
            title: 'End to end Workflow automation',
            text: 'Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.',
        },
    ];

    return (
        <section id='WhatWeOffer' className="what-we-offer-section">
            <h2>What we offer</h2>
            <div className="container">

                <div className="card-container">
                    {cardsData.map((card, index) => (
                        <div className="card" key={index}>
                            <div className="image-wrapper">
                                <div className="circle">
                                    <img src={card.image} alt="Card" className="card-image" />
                                </div>
                            </div>
                            <h4>{card.title}</h4>
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeOfferSection;
