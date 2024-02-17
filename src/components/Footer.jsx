import React from 'react';
import './Footer.css';


const Footer = () => {


    return (
        <footer className="footer">
            <div className="container">
                <div className="column">
                    <div className="logo">Logo</div>
                    <p>Keep all your case details and documents in one location.</p>
                </div>
                <div className="column">
                    <h3>Product</h3>
                    <p>client Intake & Lead</p>
                    <p>Management</p>
                    <p>Case Management</p>
                </div>
                <div className="column">
                    <h3>Solution</h3>
                    <p>All practice areas</p>
                    <p>Partnerships</p>
                    <p>Bar associations</p>
                </div>
                <div className="column">
                    <h3>Company</h3>
                    <p>About us</p>
                    <p>WhyMyCase</p>
                    <p>In the News</p>
                </div>
            </div>
            <div className="social-media">
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="line"></div>
            <div className="copy-right">© 2024 Coded by Shubham. All Rights Reserved.</div>
        </footer>
    );
};

export default Footer;
