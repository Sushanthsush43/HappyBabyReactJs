import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './BeExtraordinaire.css';
import axios from 'axios'

const BeExtraordinaire = () => {

    const [ServicesHeader, setServicesHeader] = useState('');
    const [ServicesHeaderContent, setServicesHeaderContent] = useState('');

    const pageSlug = 'be-extraordinaire';
    const [title, setTitle] = useState("No title");
    const [headers, setHeaders] = useState([]);
    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        // Fetch the page data from WordPress REST API by slug
        const fetchPageData = async () => {
            try {
                const response = await fetch(`https://sezavu.com/wp-json/wp/v2/pages?slug=${pageSlug}`);
                const data = await response.json();

                console.log("Fetched data:", data);
                if (data && data.length > 0) {
                    // Assuming the main content is in `content.rendered` or adjust accordingly
                    const mainContent = data[0]?.content?.rendered || "";

                    // Use a parser to extract headers and paragraphs from HTML
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(mainContent, "text/html");

                    // Extract headers
                    const newHeaders = Array.from(doc.querySelectorAll("h1, h2, h3, h4, h5, h6")).map(header => ({
                        level: header.tagName.toLowerCase().slice(1), // Get the level of the header (h1, h2, etc.)
                        text: header.textContent,
                    }));

                    // Extract paragraphs
                    const newParagraphs = Array.from(doc.querySelectorAll("p")).map(paragraph => paragraph.textContent);

                    // Update state variables
                    setTitle(data[0]?.title?.rendered || "No title");
                    setHeaders(newHeaders);
                    setParagraphs(newParagraphs);
                }
            } catch (error) {
                console.error("Error fetching page data:", error);
            }
        };

        fetchPageData();
    }, [pageSlug]);
    // console.log("header===>", headers)
    // console.log("paragraphs===>", paragraphs)


    // Feature Data
    const features = [
        { title: headers[2]?.text, description: paragraphs[2], icon: "fa-book" },
        { title: headers[3]?.text, description: paragraphs[3], icon: "fa-leaf" },
        { title: headers[4]?.text, description: paragraphs[4], icon: "fa-piggy-bank" },
        { title: headers[5]?.text, description: paragraphs[5], icon: "fa-globe" },
        { title: headers[6]?.text, description: paragraphs[6], icon: "fa-seedling" },
    ];

    useEffect(() => {
        const url = "http://localhost/headlessCMS/Server/wordpress/wp-json/wp/v2/posts";
        axios.get(url)
            .then((res) => {
                // setPostData(res.data);

                // Find post by ID
                const post = res.data.find(item => item.id === 23);
                const post2 = res.data.find(item => item.id === 25);
                const post3 = res.data.find(item => item.id === 27);
                const post4 = res.data.find(item => item.id === 29);
                const post5 = res.data.find(item => item.id === 31);
                const post6 = res.data.find(item => item.id === 34);
                const post7 = res.data.find(item => item.id === 36);
                const post8 = res.data.find(item => item.id === 38);
                // setSpecificPost(post);

                // Extract title and content after setting specificPost
                if (post) {
                    setServicesHeader(post.title.rendered);
                    setServicesHeaderContent(post.content.rendered.replace(/<[^>]*>/g, '').trim());
                }
                // if (post2) {
                //   setAboutVisionHeader(post2.title.rendered);
                //   setAboutVisionContent(post2.content.rendered.replace(/<[^>]*>/g, '').trim());
                // }
                // if (post3) {
                //   setAboutOurValuesnHeader(post3.title.rendered);
                //   // setAboutOurValuesContent(post3.content.rendered.replace(/<[^>]*>/g, '').trim());
                // }
                // if (post4) {
                //   setAboutSustainabilityHeader(post4.title.rendered);
                //   setAboutSustainabilityContent(post4.content.rendered.replace(/<[^>]*>/g, '').trim());
                // }
                // if (post5) {
                //   setAboutIntegrityHeader(post5.title.rendered);
                //   setAboutIntegrityContent(post5.content.rendered.replace(/<[^>]*>/g, '').trim());
                // }
                // if (post6) {
                //   setQualityyHeader(post6.title.rendered);
                //   setQualityContent(post6.content.rendered.replace(/<[^>]*>/g, '').trim());
                // }
                // if (post7) {
                //   setInnovationHeader(post7.title.rendered);
                //   setAboutInnovationContent(post7.content.rendered.replace(/<[^>]*>/g, '').trim());
                // }
                // if (post8) {
                //   setAboutCollaborationHeader(post8.title.rendered);
                //   setAboutCollaborationContent(post8.content.rendered.replace(/<[^>]*>/g, '').trim());
                // }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);

    return (

        <div className="brochure">
            <Header />
            <Introduction
                headers={headers}
                paragraphs={paragraphs}
            />
            <SustainablePractices
                features={features}
                headers={headers}
                paragraphs={paragraphs}
            />
        </div>
    );
};

// Header Component
const Header = () => (
    <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-4 text-white animated slideInDown mb-4">
                Our Services
            </h1>
        </div>
    </div>
);

// Introduction Component
const Introduction = ({ headers, paragraphs }) => (
    <div className="brochure-content">
        <section className="section">
            <div className="content-title">
                <h6>Our Services</h6>
                <h2>
                    {headers[0]?.text}</h2>
            </div>
            {/* <p>At Sezavu, we understand that sustainability is key to building resilient businesses and empowered individuals. Our services support you in every step of your sustainability journey, whether you're transforming your lifestyle, building a sustainable business, or making eco-conscious decisions.</p> */}
            {paragraphs[0]}
        </section>
    </div>
);

// Sustainable Practices Section
const SustainablePractices = ({ features, headers, paragraphs }) => (
    <div className="brochure-section" style={{ backgroundColor: "#e0e5e0", padding: "40px 0" }}>
        <div className="row">
            <section className="section col-lg-7">
                <div className="content-title">
                    <h6>Sustainable Lifestyle Practices</h6>
                    <h2>{headers[1]?.text}</h2>
                </div>
                <p>
                    {/* Be Extraordinaire is Sezavu's flagship program designed to help individuals adopt sustainable lifestyles. Blending ancient practices like yoga, Karlakattai, and other holistic tools with modern sustainability principles, we provide a comprehensive approach to conscious living. */}
                    {paragraphs[1]}
                </p>
                <div className="features">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
                    ))}
                </div>
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
const FeatureCard = ({ title, description, icon }) => (
    <div className="feature-card">
        <i className={`fa ${icon} icon`}></i>
        <div>
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    </div>
);


export default BeExtraordinaire;
