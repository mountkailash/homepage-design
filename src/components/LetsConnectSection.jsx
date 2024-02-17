// LetsConnectSection.js

import React from 'react';
import './LetsConnectSection.css';

const LetsConnectSection = () => {
    return (
        <section id='Connect' className="lets-connect-section">
            <h2>Let's connect</h2>
            <div className="container">

                <form>
                    <div className="form-row">
                        <div className="form-group name">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" placeholder="Enter your full name" />
                        </div>
                        <div className="form-group email">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group number">
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <input type="tel" id="mobileNumber" placeholder="Enter your mobile number" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Enter the subject" />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Enter your message" className='textarea'></textarea>
                    </div>
                    <button type="submit">Submit form</button>
                </form>
            </div>
        </section>
    );
};

export default LetsConnectSection;
