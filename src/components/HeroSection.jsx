import React from 'react';
import './HeroSection.css';
import image from '../../src/assets/generativeAI.png';

const HeroSection = () => {
    return (
        <section id='Home' className="hero-section">
            <div className="container">
                <div className="content">
                    <div className="text">
                        <h1>Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.</h1>
                        <p>Transforming Enterprises with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>
                        <button className="btn" onClick={() => window.open("https://www.bluetickconsultants.com/generative-ai.html", "_blank")}>know more</button>
                    </div>
                    <div className="image-container">
                        <img src={image} alt="Image" className="image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;