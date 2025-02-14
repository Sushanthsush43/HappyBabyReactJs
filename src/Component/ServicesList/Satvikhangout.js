import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Terraclan.css'; // Ensure to create this CSS file for styling

const Satvikhangout = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);
    return (
        <>
            <Header />
            <Introduction />
            <Services />
        </>
    );
};

// Header Component
const Header = () => (
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-4 text-white animated slideInDown mb-4">
                Our Services
            </h1>
        </div>
    </div>
);

// Introduction Component
const Introduction = () => (
    <div className="brochure-content">
        <section className="section">
            <div className="content-title">
                <h6>Our Services</h6>
                <h2>Sustainability-Driven Solutions for Businesses and Individuals</h2>
            </div>
            <p>At Sezavu, we understand that sustainability is key to building resilient businesses and empowered individuals. Our services support you in every step of your sustainability journey, whether you're transforming your lifestyle, building a sustainable business, or making eco-conscious decisions.</p>
        </section>
    </div>
);

// Services Component
const Services = () => (
    <div className="brochure-section" style={{ backgroundColor: "#e0e5e0", padding: "40px 0" }}>
        <div className="row">
            <section className="section col-lg-7">
                <div className="content-title">
                    <h6>Comprehensive hangout Services</h6>
                    <h2>Satvik hangout</h2>
                </div>
                {/* <p>At Terraclan, we believe that businesses built with sustainability at their core are the future. Our end-to-end startup services are tailored to help eco-conscious entrepreneurs launch and grow successful ventures that align with environmental and social responsibility. We offer:</p>
            <div className="features">
                {features.map((feature, index) => (
                    <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
                ))}
            </div> */}
                <br />
                {/* <p>We help startups navigate the complexities of building a sustainable business, ensuring that your vision not only thrives but also contributes positively to global sustainability efforts in line with the SDGs.</p> */}
            </section>
            <div className="col-lg-5">
                <div className="contact-us p-4 border rounded shadow bg-light">
                    <h4 className="mb-3">Contact Us</h4>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

// Feature Card Component
// const FeatureCard = ({ title, description, icon }) => (
//     <div className="feature-card">
//         <i className={`fa ${icon} icon`}></i>
//         <div>
//             <h6>{title}</h6>
//             <p>{description}</p>
//         </div>
//     </div>
// );

// Features Data
// const features = [
//     { title: "Business Registration and Compliance", description: "Ensuring a smooth setup with regulatory guidance.", icon: "fa-book" },
//     { title: "Sustainable Branding and Marketing", description: "Crafting compelling brand identities that connect with conscious consumers.", icon: "fa-leaf" },
//     { title: "Web Development", description: "Creating digital experiences that reflect sustainability values.", icon: "fa-code" },
//     { title: "Sustainability Consulting", description: "Providing strategies that integrate environmental responsibility into business operations.", icon: "fa-globe" },
// ];

export default Satvikhangout;
