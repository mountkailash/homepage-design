import React from 'react';
import './BlogsSection.css';

const BlogsSection = () => {

    // Data for each blog entry
    const blogsData = [
        {
            title: "Speaking SQL: Turning Natural Language into Database Dialogues",
            description: "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone...",
            link: "https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html"
        },
        {
            title: "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
            description: "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability...",
            link: "https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html"
        },
        {
            title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
            description: "Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently...",
            link: "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html"
        },
        {
            title: "PrivAIcy Matters: Balancing Privacy, Price, and Performance",
            description: "Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data...",
            link: "https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html"
        }
    ];

    return (
        <section id='Blogs' className="blogs-section">
            <h2>Explore and enjoy the blogs written by our passionate techies.</h2>
            <div className="container">

                <div className="blog-cards-container">
                    {blogsData.map((blog, index) => (
                        <div className="blog-card" key={index}>
                            <h3>{blog.title}</h3>
                            <p>{blog.description}</p>
                            <button onClick={() => window.open(blog.link, '_blank')} className="read-more-btn">Read more</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;
